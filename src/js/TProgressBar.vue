<script setup>
import { onMounted, computed, ref } from 'vue';

const direction = ref('forward');
const forwardBar = ref('forwardBar');
const reverseBar = ref('reverseBar');
const intervalId = ref();

const props = defineProps({
  step: {
    type: Number,
    default: 10,
  },
  speed: {
    type: Number,
    default: 100,
  },
  bidirection: {
    type: Boolean,
    default: true,
  },
  indefinite: {
    type: Boolean,
    default: true,
  },
});

const computedForwardBarClass = computed(() => {
  return `bar forward-bar ${direction.value}`;
});

const computedReverseBarClass = computed(() => {
  if (props.bidirection) {
    return `bar reverse-bar ${direction.value}`;
  } else {
    return `bar reverse-bar hide`;
  }
});

onMounted(() => {
  intervalId.value = setInterval(animate, props.speed);
});

function currentWidth(bar) {
  if (bar) {
    return parseInt(bar.style.width.split('%')[0]);
  } else {
    return 0;
  }
}

function animate() {
  if (props.bidirection) {
    biDirection();
  } else {
    uniDirection();
  }
}

function uniDirection() {
  const forwardWidth = currentWidth(forwardBar.value);

  if (forwardWidth === 100) {
    if (props.indefinite) {
      resetWidth(forwardBar.value);
    } else {
      clearInterval(intervalId.value);
    }
  } else {
    stepBar(forwardBar.value, 'forward', forwardWidth);
  }
}

function biDirection() {
  const forwardWidth = currentWidth(forwardBar.value);
  const reverseWidth = currentWidth(reverseBar.value);

  if (forwardWidth === 100 && !props.indefinite) {
    clearInterval(intervalId.value);
    return;
  }

  if (direction.value === 'forward' && forwardWidth === 100) {
    direction.value = 'reverse';
    stepBar(forwardBar.value, 'reverse', forwardWidth);
    stepBar(reverseBar.value, 'forward', reverseWidth);
  } else if (direction.value === 'reverse' && reverseWidth === 100) {
    direction.value = 'forward';
    stepBar(forwardBar.value, 'forward', forwardWidth);
    stepBar(reverseBar.value, 'reverse', reverseWidth);
  } else if (direction.value === 'forward') {
    stepBar(forwardBar.value, 'forward', forwardWidth);
    stepBar(reverseBar.value, 'reverse', reverseWidth);
  } else if (direction.value === 'reverse') {
    stepBar(forwardBar.value, 'reverse', forwardWidth);
    stepBar(reverseBar.value, 'forward', reverseWidth);
  }
}

function resetWidth(bar) {
  bar.style.width = '0%';
}

function stepBar(bar, direction, current) {
  if (!bar) { return; }
  if (direction === 'forward') {
    bar.style.width = [(current + props.step).toString(), '%'].join('');
  } else {
    bar.style.width = [(current - props.step).toString(), '%'].join('');
  }
}
</script>

<template>
  <div
    class="progress-bar"
  >
    <div
      ref="forwardBar"
      :class="computedForwardBarClass"
      style="width: 0%;"
    />

    <div
      ref="reverseBar"
      :class="computedReverseBarClass"
      style="width: 100%;"
    />
  </div>
</template>

<style scoped>
.progress-bar {
  display: flex;
}

.bar {
  height: 5px;
  max-width: 100%;
}

.forward-bar {
  background-color: var(--color-text);
}

.forward-bar.reverse {
  background-color: var(--color-background) !important;
}

.reverse-bar {
  background-color: var(--color-background);
}

.reverse-bar.reverse {
  background-color: var(--color-text) !important;
}

.reverse-bar.hide {
  max-width: 0% !important;
  width: 0% !important;
}
</style>
