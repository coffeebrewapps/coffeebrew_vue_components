<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md'
  },
  value: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: 'Select'
  },
  selected: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select'])

const computedOptionClass = computed(() => {
  if (props.selected) {
    return `option selected ${props.size}`.trim()
  } else {
    return `option ${props.size}`.trim()
  }
})
</script>

<template>
  <div
    :class="computedOptionClass"
    :value="value"
    @click="$emit('select', value)"
  >
    {{ label }}
  </div>
</template>

<style scoped>
.option {
  text-align: center;
  padding: 12px;
  margin: 0;
  height: 50px;
}

.option:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
  font-weight: 600;
}

.option.sm {
  width: 100px;
}

.option.md {
  width: 200px;
}

.option.lg {
  width: 500px;
}

.option.selected {
  background-color: var(--color-border-hover);
  color: var(--color-text);
  font-weight: 600;
}
</style>
