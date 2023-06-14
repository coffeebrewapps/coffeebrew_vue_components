<script setup>
import { computed } from 'vue'

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

const maxContainerWidth = computed(() => {
  return window.innerWidth - 200
})

const chartContainerStyle = computed(() => {
  return `max-width: ${maxContainerWidth.value}px`
})

const chartHighlightColor = computed(() => {
  return (props.config.colors || {}).highlightColor ||
    getComputedStyle(document.documentElement).getPropertyValue('--color-text')
});

const chartLineColor = computed(() => {
  return (props.config.colors || {}).lineColor ||
    getComputedStyle(document.documentElement).getPropertyValue('--color-border-hover')
});

const barBgColor = computed(() => {
  return chartHighlightColor.value
})

const barLineColor = computed(() => {
  return chartLineColor.value
})

const containerFactor = computed(() => {
  if (xMaxScale.value > maxContainerWidth.value) {
    return 0.5
  } else if (xMaxScale.value < 200) {
    return 6
  } else {
    return 1.5
  }
})

const xScaleConfig = computed(() => {
  return props.config.xScale || 100
})

const xMaxScale = computed(() => {
  const sortedScales = props.data.map((record) => {
    return parseFloat(record.xValue)
  }).sort((a, b) => {
    if (a < b) { return -1 }
    else if (a > b) { return 1 }
    else { return 0 }
  })

  return sortedScales[sortedScales.length - 1] || xScaleConfig.value
})

const xScalesCount = computed(() => {
  return Math.ceil(xMaxScale.value / xScaleConfig.value)
})

const xScales = computed(() => {
  return Array.from(new Array(xScalesCount.value)).map((_, i) => (i + 1) * xScaleConfig.value)
})

const xContainerStyle = computed(() => {
  return `border-left: 2px solid ${barLineColor.value}`
})

function barStyle(bar, i) {
  const width = `${bar.xValue * containerFactor.value}px`

  return `width: ${width}; background-color: ${barBgColor.value};`
}

function tooltipStyle(bar, i) {
  const leftOffset = `${parseInt(bar.xValue * containerFactor.value / 2)}px`
  const topOffset = `25px`

  return `left: ${leftOffset}; top: ${topOffset}; background-color: ${barLineColor.value}; color: ${barBgColor.value}`
}

const yContainerLabelStyle = computed(() => {
  return `color: ${barBgColor.value};`
})

const yAxisLabelStyle = computed(() => {
  return `color: ${barBgColor.value};`
})

const xContainerLabelStyle = computed(() => {
  return `color: ${barBgColor.value};`
})

function xAxisLabelStyle(scale, i) {
  const width = `${xScaleConfig.value * containerFactor.value}px`

  return `width: ${width}; color: ${barBgColor.value};`
}

function xAxisLineStyle(scale, i) {
  const width = `${xScaleConfig.value * containerFactor.value}px`

  return `width: ${width}; border-right: 2px solid ${barLineColor.value};`
}
</script>

<template>
  <div
    class="chart-container"
    :style="chartContainerStyle"
  >
    <div class="y-container">
      <div
        class="y-axis-label"
        :style="yContainerLabelStyle"
      >
        {{ config.yAxisLabel }}
      </div>

      <div class="y-axis">
        <div
          v-for="(bar, i) in data"
          :key="i"
          class="axis-label"
          :style="yAxisLabelStyle"
        >
          {{ bar.yValue }}
        </div>
      </div>
    </div>

    <div
      class="x-container"
      :style="xContainerStyle"
    >
      <div class="bars">
        <div
          v-for="(bar, i) in data"
          :key="i"
          class="bar"
          :style="barStyle(bar, i)"
        >
          <span
            class="tooltip"
            :style="tooltipStyle(bar, i)"
          >{{ bar.xValue }}</span>
        </div>
      </div>

      <div class="x-axis">
        <div
          v-for="(scale, i) in xScales"
          :key="i"
          class="axis-label"
          :style="xAxisLabelStyle(scale, i)"
        >
          <span>
            {{ scale }}
          </span>
        </div>
      </div>

      <div
        class="x-axis-label"
        :style="xContainerLabelStyle"
      >{{ config.xAxisLabel }}</div>

      <div class="x-axis-lines">
        <div
          v-for="(scale, i) in xScales"
          :key="i"
          class="x-axis-line"
          :style="xAxisLineStyle(scale, i)"
        >
        </div>
      </div>
    </div> <!-- x-container -->
  </div> <!-- chart-container -->
</template>

<style scoped>
.chart-container {
  padding: 2rem 1rem;
  display: flex;
  gap: 0.5rem;
}

.y-container {
  display: flex;
  padding-left: 1rem;
}

.y-container .y-axis {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
}

.y-container .y-axis .axis-label {
  height: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

.y-axis-label {
  position: absolute;
  bottom: 30%;
  left: 0;
  margin-left: -1rem;
  transform-origin: 0 0;
  transform: rotate(270deg);
  font-weight: 600;
}

.x-container {
  padding-top: 1rem;
}

.bars {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 0.8rem;
  transition: width 0.5s linear;
  z-index: 1;
}

.bar .tooltip {
  display: none;
  position: absolute;
}

.bar:hover {
  cursor: pointer;
}

.bar:hover .tooltip {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  font-size: 0.6rem;
  font-weight: 600;
  border-radius: 4px;
  z-index: 2;
}

.x-axis {
  display: flex;
}

.x-axis .axis-label {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100px;
  padding-right: 0.5rem;
}

.x-axis .axis-label span {
  font-size: 0.8rem;
  font-weight: 600;
}

.x-axis-label {
  position: absolute;
  padding-top: 0.5rem;
  left: 50%;
  font-weight: 600;
}

.x-axis-lines {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
}

.x-axis-line {
  height: 100%;
  z-index: -1;
}
</style>
