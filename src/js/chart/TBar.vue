<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  config: {
    type: Object,
    default() {
      return {}
    }
  },
  data: {
    type: Array,
    default() {
      return []
    }
  }
})

const canvas = ref('canvas')
const ctx = computed(() => {
  return canvas.value.getContext('2d')
})

const canvasWidth = computed(() => {
  const width = Math.floor(0.8 * window.innerWidth)
  return width
})

const canvasHeight = computed(() => {
  return (yMaxScale.value * containerFactor.value) + 100 + titlePadding
})

const containerFactor = computed(() => {
  if (yMaxScale.value > 400) {
    return 0.3
  } else if (yMaxScale.value < 200) {
    return 3
  } else {
    return 1
  }
})

const xOffset = 100
const xPadding = 100
const xLabelPaddingBottom = 50
const xAxisLabelPaddingBottom = 20

const yOffset = 80
const yPaddingTop = 10
const yPaddingLeft = 60

const titlePadding = 100

const barWidth = 80
const barGap = computed(() => {
  return xOffset - barWidth
})

const chartTitle = computed(() => {
  return props.config.title
})

const xAxisLabel = computed(() => {
  return props.config.xAxisLabel
})

const yAxisLabel = computed(() => {
  return props.config.yAxisLabel
})

const yScaleConfig = computed(() => {
  return props.config.yScale || 100
})

const yMaxScale = computed(() => {
  const sortedScales = props.data.map((record) => {
    return Math.ceil(record.yValue)
  }).sort((a, b) => {
    if (a < b) { return -1 }
    else if (a > b) { return 1 }
    else { return 0 }
  })

  return sortedScales[sortedScales.length - 1] || yScaleConfig.value
})

const yScalesCount = computed(() => {
  return Math.ceil(yMaxScale.value / yScaleConfig.value)
})

const yScales = computed(() => {
  return Array.from(new Array(yScalesCount.value)).map((_, i) => (i + 1) * yScaleConfig.value).sort((a, b) => {
    if (a < b) { return 1 }
    else if (a > b) { return -1 }
    else { return 0 }
  })
})

const barBgColor = computed(() => {
  return (props.config.colors || {}).highlightColor ||
    getComputedStyle(document.documentElement).getPropertyValue('--color-text')
})

const barLineColor = computed(() => {
  return (props.config.colors || {}).lineColor ||
    getComputedStyle(document.documentElement).getPropertyValue('--color-border-hover')
})

const fontFamily = computed(() => {
  return document.body.computedStyleMap().get('font-family').toString()
})

const bars = computed(() => {
  return props.data.map((record, i) => {
    const x = i * xPadding + xOffset + barWidth
    const y = parseFloat((canvasHeight.value - record.yValue * containerFactor.value - yOffset).toFixed(2))
    const width = barWidth
    const height = parseFloat((record.yValue * containerFactor.value).toFixed(2))
    const xValue = record.xValue
    const yValue = record.yValue

    return { x, y, width, height, xValue, yValue }
  })
})

function drawBars() {
  bars.value.forEach(({ x, y, width, height, xValue, yValue }, i) => {
    const textMeasure = ctx.value.measureText(yValue)
    const textWidth = textMeasure.width
    const textX = x + (width - textWidth) / 2
    const textY = y + height / 2

    drawRect(x, y, width, height, barBgColor.value)
    drawText(yValue, textX, textY, '0.8rem', 600, barLineColor.value, 'left');
    drawText(xValue, x, canvasHeight.value - xLabelPaddingBottom, '0.8rem', 600, barBgColor.value, 'left');
  })
}

const lineWidth = computed(() => {
  return (xOffset + barWidth) * props.data.length + xPadding
})

function drawLines() {
  const width = lineWidth.value

  yScales.value.forEach((scale, i) => {
    const x = xOffset
    const y = canvasHeight.value - scale * containerFactor.value - yOffset
    drawLine(x, y, width, 2, barLineColor.value)
    drawText(scale, yPaddingLeft, y + yPaddingTop, '1rem', 600, barBgColor.value, 'left')
  })

  drawLine(xOffset, canvasHeight.value - yOffset, width, 2, barLineColor.value)
}

function drawLabels() {
  if (yAxisLabel.value) {
    rotateText(
      yAxisLabel.value,
      xOffset + xPadding,
      Math.floor((canvasHeight.value - titlePadding) / 2),
      '1.2rem', 600, barBgColor.value, 'center'
    )
  }

  if (xAxisLabel.value) {
    drawText(
      xAxisLabel.value,
      Math.floor(lineWidth.value / 2),
      canvasHeight.value - xAxisLabelPaddingBottom,
      '1.2rem', 600, barBgColor.value, 'center'
    )
  }

  if (chartTitle.value) {
    drawText(
      chartTitle.value,
      Math.floor(lineWidth.value / 2),
      canvasHeight.value - yScales.value[0] * containerFactor.value - yOffset - 20,
      '1.4rem', 600, barBgColor.value, 'center'
    )
  }
}

function rotateText(text, x, y, fontSize, weight, color, align) {
  ctx.value.save()
  ctx.value.translate(-x, y)
  ctx.value.rotate(-Math.PI / 2)
  drawText(text, 0, y, fontSize, weight, color, align)
  ctx.value.restore()
}

function drawRect(x, y, width, height, color) {
  ctx.value.fillStyle = color
  ctx.value.fillRect(x, y, width, height)
}

function drawText(text, x, y, fontSize, weight, color, align) {
  ctx.value.font = `${weight} ${fontSize} ${fontFamily.value}`
  ctx.value.fillStyle = color
  ctx.value.textAlign = align;
  ctx.value.fillText(text, x, y);
}

function drawLine(x, y, width, thickness, color) {
  ctx.value.lineWidth = thickness
  ctx.value.strokeStyle = color

  ctx.value.beginPath()
  ctx.value.moveTo(x, y)
  ctx.value.lineTo(width, y)
  ctx.value.stroke()
}

function initCanvas() {
  canvas.value.style.width = `80%`
}

function draw() {
  drawLines()
  drawBars()
  drawLabels()
}

onMounted(() => {
  initCanvas()
  draw()
})
</script>

<template>
  <div class="chart-container">
    <canvas
      ref="canvas"
      :width="canvasWidth"
      :height="canvasHeight"
    ></canvas>
  </div>
</template>

<style scoped>
</style>
