<script setup>
/** import:global **/
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
/** import:global **/

/** section:props **/
const props = defineProps({
  config: {
    type: Object,
    default() {
      return {};
    },
  },
  data: {
    type: Array,
    default() {
      return [];
    },
  },
});
/** section:props **/

/** section:canvas **/
const canvas = ref('canvas');
const ctx = computed(() => {
  return canvas.value.getContext('2d');
});
/** section:canvas **/

/** section:measurements **/
const canvasWidth = computed(() => {
  return (xPadding + xOffset + barWidth) * props.data.length;
});

const canvasHeight = computed(() => {
  return (yMaxScale.value - yMinScale.value) *
    containerFactor.value + yOffset + yPaddingBottom + titlePadding + chartTitleFontSize.value;
});

const containerFactor = computed(() => {
  if ((yMaxValue.value - yMinValue.value) > 3000) {
    return 0.05;
  } else if ((yMaxValue.value - yMinValue.value) > 1000) {
    return 0.3;
  } else if ((yMaxValue.value - yMinValue.value) < 200) {
    return 3;
  } else {
    return 1;
  }
});

const xOffset = 100;
const xPadding = 100;
const xLabelPaddingBottom = 30;

const yOffset = 80;
const yPaddingTop = 10;
const yPaddingLeft = 60;

const titlePadding = 40;
const yPaddingBottom = 100;

const barWidth = 80;
const lineWidth = computed(() => {
  return (xOffset + barWidth) * props.data.length + xPadding;
});

const yScaleConfig = computed(() => {
  return props.config.yScale || 100;
});
/** section:measurements **/

/** section:styles **/
const fontFamily = computed(() => {
  return document.body.computedStyleMap().get('font-family').toString();
});

const boldWeight = 600;

const baseFontSize = computed(() => {
  return parseFloat(getComputedStyle(document.body).getPropertyValue('font-size'));
});

const xValueFontSize = computed(() => {
  return baseFontSize.value * 0.8;
});

const yValueFontSize = computed(() => {
  return baseFontSize.value * 0.8;
});

const lineLabelFontSize = computed(() => {
  return baseFontSize.value;
});

const xAxisLabelFontSize = computed(() => {
  return baseFontSize.value * 1.2;
});

const yAxisLabelFontSize = computed(() => {
  return baseFontSize.value * 1.2;
});

const chartTitleFontSize = computed(() => {
  return baseFontSize.value * 1.4;
});

const barBgColor = computed(() => {
  return chartHighlightColor.value;
});

const barLineColor = computed(() => {
  return chartLineColor.value;
});

const chartHighlightColor = computed(() => {
  return (props.config.colors || {}).highlightColor ||
    getComputedStyle(document.documentElement).getPropertyValue('--color-text');
});

const chartLineColor = computed(() => {
  return (props.config.colors || {}).lineColor ||
    getComputedStyle(document.documentElement).getPropertyValue('--color-border-hover');
});

watch(chartHighlightColor, (newVal, oldVal) => {
  ctx.value.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
  draw();
});

watch(chartLineColor, (newVal, oldVal) => {
  ctx.value.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
  draw();
});
/** section:styles **/

/** section:coordinates **/
const sortedDataScales = computed(() => {
  return props.data.map((record) => {
    return Math.ceil(record.yValue);
  }).sort((a, b) => {
    if (a < b) { return -1; } else if (a > b) { return 1; } else { return 0; }
  });
});

const yMinValue = computed(() => {
  const min = sortedDataScales.value[0];

  if (min < 0) {
    return min;
  } else {
    return 0;
  }
});

const yMaxValue = computed(() => {
  return sortedDataScales.value[sortedDataScales.value.length - 1] || yScaleConfig.value;
});

const yMinScale = computed(() => {
  if (yMinValue.value < 0) {
    return -1 * (parseInt(Math.abs(yMinValue.value) / yScaleConfig.value) * yScaleConfig.value + yScaleConfig.value);
  } else {
    return 0;
  }
});

const yMaxScale = computed(() => {
  const max = yMaxValue.value - (yMaxValue.value % yScaleConfig.value);

  if (max <= yScaleConfig.value / 2) {
    return max;
  } else {
    return max + yScaleConfig.value;
  }
});

const yScalesCount = computed(() => {
  return Math.ceil((yMaxScale.value - yMinScale.value) / yScaleConfig.value) + 1;
});

const yScales = computed(() => {
  const step = yScaleConfig.value;

  return Array.from(new Array(yScalesCount.value)).map((_, i) => yMinScale.value + i * step).sort((a, b) => {
    if (a < b) { return 1; } else if (a > b) { return -1; } else { return 0; }
  });
});

const xAxisLabelCoords = computed(() => {
  if (bars.value.length > 0) {
    const baseLine = scaleLines.value[scaleLines.value.length - 1];
    const x = Math.floor(lineWidth.value / 2);
    const y = baseLine.y + xLabelPaddingBottom + 30;
    return { x, y };
  } else {
    return { x: 0, y: 0 };
  }
});

const yAxisLabelCoords = computed(() => {
  if (bars.value.length > 0) {
    const x = yPaddingLeft - 10;
    const y = Math.floor(canvasHeight.value / 2);
    return { x, y };
  } else {
    return { x: 0, y: 0 };
  }
});

const chartTitleCoords = computed(() => {
  if (scaleLines.value.length > 0) {
    const firstLine = scaleLines.value[0];
    const x = Math.floor(lineWidth.value / 2);
    const y = firstLine.y - titlePadding;
    return { x, y };
  } else {
    return { x: 0, y: 0 };
  }
});
/** section:coordinates **/

/** section:data **/
const chartTitle = computed(() => {
  return props.config.title;
});

const xAxisLabel = computed(() => {
  return props.config.xAxisLabel;
});

const yAxisLabel = computed(() => {
  return props.config.yAxisLabel;
});

const bars = computed(() => {
  return props.data.map((record, i) => {
    const x = i * xPadding + xOffset + barWidth;
    const y = parseFloat(
      (canvasHeight.value - record.yValue * containerFactor.value - yOffset - yPaddingBottom).toFixed(2)
    );
    const width = barWidth;
    const height = parseFloat((record.yValue * containerFactor.value).toFixed(2));
    const xValue = record.xValue;
    const yValue = record.yValue.toFixed(2);

    return { x, y, width, height, xValue, yValue };
  });
});

const scaleLines = computed(() => {
  return yScales.value.map((scale, i) => {
    const x = xOffset;
    const y = canvasHeight.value - scale * containerFactor.value - yOffset - yPaddingBottom;
    return { scale, x, y };
  });
});
/** section:data **/

/** section:draw **/
function drawBars() {
  bars.value.forEach(({ x, y, width, height, xValue, yValue }, i) => {
    const textMeasure = ctx.value.measureText(yValue);
    const textWidth = textMeasure.width;
    const textX = x + (width - textWidth) / 2;
    const textY = y + height / 2;

    drawRect(x, y, width, height, barBgColor.value);

    const baseLine = scaleLines.value[scaleLines.value.length - 1];
    drawText(
      xValue, x, baseLine.y + xLabelPaddingBottom,
      `${xValueFontSize.value}px`,
      boldWeight, barBgColor.value, 'left'
    );

    drawText(
      yValue, textX, textY,
      `${yValueFontSize.value}px`,
      boldWeight, barLineColor.value, 'left'
    );
  });
}

function drawLines() {
  scaleLines.value.forEach(({ scale, x, y }) => {
    drawLine(x, y, lineWidth.value, 2, barLineColor.value);
    drawText(
      scale, yPaddingLeft, y + yPaddingTop,
      `${lineLabelFontSize.value}px`,
      boldWeight, barBgColor.value, 'left'
    );
  });
}

function drawLabels() {
  if (yAxisLabel.value) {
    rotateText(
      yAxisLabel.value,
      yAxisLabelCoords.value.x,
      yAxisLabelCoords.value.y,
      `${yAxisLabelFontSize.value}px`, boldWeight, barBgColor.value, 'center'
    );
  }

  if (xAxisLabel.value) {
    drawText(
      xAxisLabel.value,
      xAxisLabelCoords.value.x,
      xAxisLabelCoords.value.y,
      `${xAxisLabelFontSize.value}px`, boldWeight, barBgColor.value, 'center'
    );
  }

  if (chartTitle.value) {
    drawText(
      chartTitle.value,
      chartTitleCoords.value.x,
      chartTitleCoords.value.y,
      `${chartTitleFontSize.value}px`, boldWeight, barBgColor.value, 'center'
    );
  }
}

function rotateText(text, x, y, fontSize, weight, color, align) {
  ctx.value.save();
  ctx.value.translate(x, y);
  ctx.value.rotate(-Math.PI / 2);
  ctx.value.translate(-x, -y);
  drawText(text, x, y, fontSize, weight, color, align);
  ctx.value.restore();
}

function drawRect(x, y, width, height, color) {
  ctx.value.fillStyle = color;
  ctx.value.fillRect(x, y, width, height);
}

function drawText(text, x, y, fontSize, weight, color, align) {
  ctx.value.font = `${weight} ${fontSize} ${fontFamily.value}`;
  ctx.value.fillStyle = color;
  ctx.value.textAlign = align;
  ctx.value.fillText(text, x, y);
}

function drawLine(x, y, width, thickness, color) {
  ctx.value.lineWidth = thickness;
  ctx.value.strokeStyle = color;

  ctx.value.beginPath();
  ctx.value.moveTo(x, y);
  ctx.value.lineTo(width, y);
  ctx.value.stroke();
}

function draw() {
  drawLines();
  drawBars();
  drawLabels();
}
/** section:draw **/

/** section:update **/
const chartData = computed(() => {
  return props.data;
});

watch(chartData, (newVal, oldVal) => {
  clearCanvas();
  initCanvas();
  draw();
}, { deep: true });

function initCanvas() {
  const ratio = window.devicePixelRatio;
  canvas.value.width = canvasWidth.value * ratio;
  canvas.value.height = canvasHeight.value * ratio;
  canvas.value.style.width = `${canvasWidth.value}px`;
  canvas.value.style.height = `${canvasHeight.value}px`;
  ctx.value.scale(ratio, ratio);
}

function clearCanvas() {
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
}

function resetCanvas() {
  canvas.value.width = 0;
  canvas.value.height = 0;
}
/** section:update **/

onMounted(() => {
  initCanvas();
  draw();
});

onBeforeUnmount(() => {
  resetCanvas();
});
</script>

<template>
  <div class="chart-container">
    <canvas
      ref="canvas"
    />
  </div>
</template>

<style scoped>
.chart-container {
  overflow: auto;
}
</style>
