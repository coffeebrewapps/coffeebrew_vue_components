<script setup>
import { onMounted, computed, ref, watch } from 'vue'

import TOption from './TOption.vue'

function isEmpty(val) {
  return Object.is(val, undefined) || Object.is(val, null)
}

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
  },
  searchable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const toggleState = ref('collapsed')
const selectedOption = computed(() => {
  return props.modelValue
})

const inputField = ref('inputField')
const selectField = ref('selectField')
const cleanToggle = ref('cleanToggle')

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

const searchString = ref('')

const computedOptions = computed(() => {
  if (searchString.value.length > 0) {
    const regex = new RegExp(searchString.value, 'i')
    return props.options.filter((option) => {
      return option.value.match(regex)
    })
  } else {
    return props.options
  }
})

const computedSelectedOption = computed(() => {
  const found = props.options.find(o => o.value === selectedOption.value)
  if (found) { return found.label }
  return ''
})

function toggleSelect(event) {
  event.preventDefault()

  if (event.target !== inputField.value && event.target !== selectField.value) { return }

  if (props.disabled) { return; }

  if (toggleState.value === 'collapsed') {
    toggleState.value = 'expanded'
  } else {
    toggleState.value = 'collapsed'
  }
}

function searchOptions(event) {
  const keyCode = event.keyCode
  if (keyCode >= 32 && keyCode <= 127) {
    searchStringCode.value.push(keyCode)
  } else if (keyCode === 8 && searchStringCode.value.length > 0) {
    searchStringCode.value.splice(-1, 1)
  }
}

function clearSearch() {
  searchString.value = ''
}

function setOptionSelectedState(val) {
  return val === selectedOption.value
}

function selectOption(val, event) {
  if (event) { event.preventDefault() }

  toggleState.value = 'collapsed'
  emit('update:modelValue', val)
}

function resetField(event) {
  if (event && event.target !== inputField.value && event.target !== cleanToggle.value) { return }

  emit('update:modelValue', null) 
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
      tabindex="0"
      :class="computedFieldClass"
      ref="inputField"
      @keydown.enter="toggleSelect($event)"
      @keydown.esc="toggleSelect($event)"
      @keydown.backspace="resetField($event)"
    >
      <div
        class="select"
        :name="name"
        ref="selectField"
        @click="toggleSelect($event)"
      >
        <div class="selected">{{ computedSelectedOption }}</div>

        <div class="toggle">
          <i class="fa-solid fa-caret-down"></i>
          <i class="fa-solid fa-caret-up"></i>
        </div>
      </div>

      <div
        v-if="searchable"
        class="search"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
        <input v-model="searchString" />
        <i
          class="fa-solid fa-xmark"
          @click="clearSearch"
        ></i>
      </div>

      <div
        class="options"
      >
        <TOption
          tabindex="0"
          v-for="(option, i) in computedOptions"
          :key="i"
          :value="option.value"
          :label="option.label"
          :size="size"
          :selected="setOptionSelectedState(option.value)"
          @select="selectOption(option.value)"
          @keydown.enter="selectOption(option.value, $event)"
        />
      </div>
    </div>

    <div
      class="clean-toggle"
      ref="cleanToggle"
      @click="resetField($event)"
    >
      <i class="fa-solid fa-broom"></i>
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
  margin: 2px 8px 8px 0;
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

.input-field:focus {
  outline: none;
}

.input-field .select:hover,
.input-control .clean-toggle:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-field:focus .select {
  outline: 3px solid var(--color-border-hover);
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
  color: var(--color-text);
  background-color: var(--color-background);
  z-index: 99;
  max-height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
}

.input-field.collapsed .options {
  display: none;
}

.input-field.expanded .options {
  display: block;
}

.input-field.collapsed .search input,
.input-field.collapsed .search .fa-solid {
  display: none;
}

.input-field.expanded .search {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--color-border);
  border-top: none;
  border-bottom: none;
}

.input-field.expanded .search .fa-solid {
  display: inline-block;
}

.input-field.expanded .search input {
  padding: 0.5rem;
  outline: none;
  width: 100%;
  color: var(--color-text);
  background-color: var(--color-background);
  font-size: 1rem;
}

.input-field.expanded .search input:focus {
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.input-field.expanded .search .fa-xmark:hover {
  cursor: pointer;
  color: var(--color-border-hover);
}

.input-control .clean-toggle {
  position: absolute;
  top: 2px;
  right: -12px;
  z-index: 1;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--color-border);
}

.input-control.disabled .clean-toggle {
  display: none;
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
