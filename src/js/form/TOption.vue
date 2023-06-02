<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md'
  },
  value: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: [String, Number],
    default: 'Select'
  },
  selected: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select'])

const computedOptionClass = computed(() => {
  const classNames = []
  classNames.push(`option`)

  if (props.selected) {
    classNames.push(`selected`)
  }

  if (props.size) {
    classNames.push(props.size)
  }

  return classNames.join(' ')
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
  padding: 1rem;
  margin: 0;
  height: 50px;
  font-size: 0.8rem;
}

.option:focus,
.option:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
  font-weight: 600;
  outline: none;
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
