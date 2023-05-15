<script setup>
import { onMounted, computed, ref } from 'vue'

import TOption from './TOption.vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md'
  },
  label: {
    type: String,
    default: 'Input'
  },
  options: {
    type: Array,
    default: []
  },
  disabled: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const toggleState = ref('collapsed')
const selectedOption = ref('')

const computedControlClass = computed(() => {
  const className = []

  className.push(`input-control`)

  if (props.size) {
    className.push(props.size)
  }

  if (props.disabled) {
    className.push(`disabled`)
  }

  return className.join(' ')
})

const computedFieldClass = computed(() => {
  return `input-field ${toggleState.value}`.trim()
})

const computedSelectedOption = computed(() => {
  const found = props.options.find(o => o.value === selectedOption.value)
  if (found) { return found.label }
  return ''
})

function toggleSelect() {
  if (props.disabled) { return; }

  if (toggleState.value === 'collapsed') {
    toggleState.value = 'expanded'
  } else {
    toggleState.value = 'collapsed'
  }
}

function setOptionSelectedState(val) {
  return val === selectedOption.value
}

function selectOption(val) {
  toggleState.value = 'collapsed'
  selectedOption.value = val
  emit('update:modelValue', val)
}

onMounted(() => {
  selectOption(props.modelValue)
})
</script>

<template>
  <div
    :class="computedControlClass"
  >
    <div
      class="input-label"
    >
      {{ label }}
    </div>

    <div
      :class="computedFieldClass"
    >
      <div
        class="select"
        :name="name"
        @click="toggleSelect"
      >
        <div class="selected">{{ computedSelectedOption }}</div>

        <div class="toggle">
          <i class="fa-solid fa-caret-down"></i>
          <i class="fa-solid fa-caret-up"></i>
        </div>
      </div>

      <div
        class="options"
      >
        <TOption
          v-for="option in options"
          :value="option.value"
          :label="option.label"
          :size="size"
          :selected="setOptionSelectedState(option.value)"
          @select="selectOption(option.value)"
        />
      </div>
    </div>

    <div
      v-if="errorMessage.length > 0"
      class="input-error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped>
.input-control {
  margin: 2px 0 8px 0;
}

.input-control.sm {
  width: 100px;
}

.input-control.md {
  width: 200px;
}

.input-control.lg {
  width: 500px;
}

.input-label {
  font-size: 0.8rem;
}

.input-field {
  margin: 2px 0 8px 0;
}

.input-field .select:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-control.disabled .input-field .select {
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field .select:hover {
  cursor: not-allowed;
}

.input-field .select {
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  text-align: center;
  padding: 12px;
  margin: 2px 0 0 0;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-sizing: border-box;
  height: 50px;
}

.input-control.md .input-field .select {
  grid-template-columns: 7fr 1fr;
}

.input-control.lg .input-field .select {
  grid-template-columns: 15fr 1fr;
}

.input-field.collapsed .select i.fa-caret-up {
  display: none;
}

.input-field.expanded .select i.fa-caret-up {
  display: inline-block;
}

.input-field.collapsed .select i.fa-caret-down {
  display: inline-block;
}

.input-field.expanded .select i.fa-caret-down {
  display: none;
}

.input-field .options {
  position: absolute;
  left: 0;
  right: 0;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-soft);
  color: var(--color-text);
  z-index: 99;
}

.input-field.collapsed .options {
  display: none;
}

.input-field.expanded .options {
  display: block;
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
