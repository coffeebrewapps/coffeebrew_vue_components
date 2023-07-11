<script setup>
import { computed, ref } from 'vue';

import TOption from './TOption.vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null,
  },
  name: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
  label: {
    type: String,
    default: 'Input',
  },
  options: {
    type: Array,
    default() {
      return [];
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
  searchable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const toggleState = ref('collapsed');
const inputField = ref('inputField');
const selectField = ref('selectField');
const cleanToggle = ref('cleanToggle');
const searchInput = ref('searchInput');
const searchString = ref('');

const selectedOption = computed(() => {
  return props.modelValue;
});

const computedControlClass = computed(() => {
  const className = [];

  className.push(`input-control`);

  if (props.size) {
    className.push(props.size);
  }

  if (props.disabled) {
    className.push(`disabled`);
  }

  className.push(toggleState.value);

  return className.join(' ');
});

const computedFieldClass = computed(() => {
  return `input-field ${toggleState.value}`.trim();
});

const computedOptions = computed(() => {
  if (searchString.value.length > 0) {
    const regex = new RegExp(searchString.value, 'i');
    return props.options.filter((option) => {
      return option.value.match(regex) || option.label.match(regex);
    });
  } else {
    return props.options;
  }
});

const computedSelectedOption = computed(() => {
  const found = props.options.find(o => o.value === selectedOption.value);
  if (found) { return found.label; }
  return '';
});

function toggleSelect(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  if (props.disabled) { return; }

  if (toggleState.value === 'collapsed') {
    toggleState.value = 'expanded';
  } else {
    toggleState.value = 'collapsed';
  }
}

function closeSelect(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  toggleState.value = 'collapsed';
}

function clearSearchString(event) {
  if (searchString.value === '') {
    closeSelect(event);
    return;
  }

  event.preventDefault();
  event.stopImmediatePropagation();

  clearSearch();
}

function clearSearch() {
  searchString.value = '';
}

function setOptionSelectedState(val) {
  return val === selectedOption.value;
}

function selectOption(val, event) {
  if (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  toggleState.value = 'collapsed';
  emit('update:modelValue', val);
}

function resetField(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  emit('update:modelValue', null);
}
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
      ref="inputField"
      tabindex="0"
      :class="computedFieldClass"
      @click="toggleSelect($event)"
      @keydown.enter="toggleSelect($event)"
      @keydown.esc="closeSelect($event)"
      @keydown.backspace="resetField($event)"
    >
      <div class="wrapper">
        <div
          ref="selectField"
          class="select"
          :name="name"
        >
          <div class="selected">
            {{ computedSelectedOption }}
          </div>

          <div class="toggle">
            <i class="fa-solid fa-caret-down" />
            <i class="fa-solid fa-caret-up" />
          </div>
        </div>

        <div
          ref="cleanToggle"
          tabindex="0"
          class="clean-toggle"
          @click="resetField($event)"
          @keydown.enter="resetField($event)"
        >
          <i class="fa-solid fa-circle-xmark" />
        </div>
      </div> <!-- wrapper -->
    </div> <!-- input-field -->

    <div
      v-if="searchable"
      class="search"
    >
      <i class="fa-solid fa-magnifying-glass" />
      <input
        ref="searchInput"
        v-model="searchString"
        @keydown.esc="clearSearchString"
      >
      <i
        class="fa-solid fa-xmark"
        @click="clearSearch"
      />
    </div> <!-- search -->

    <div
      class="options"
    >
      <TOption
        v-for="(option, i) in computedOptions"
        :key="i"
        tabindex="0"
        :value="option.value"
        :label="option.label"
        :selected="setOptionSelectedState(option.value)"
        @select="selectOption(option.value)"
        @keydown.enter="selectOption(option.value, $event)"
      />
    </div> <!-- options -->

    <div
      v-if="errorMessage.length > 0"
      class="input-error"
    >
      {{ errorMessage }}
    </div> <!-- input-error -->
  </div> <!-- input-control -->
</template>

<style scoped>
.input-control {
  margin: 2px 0 8px 0;
}

.input-control.sm {
  width: 150px;
}

.input-control.md {
  width: 250px;
}

.input-control.lg {
  width: 500px;
}

.input-label {
  font-size: 0.8rem;
  min-height: 20px;
}

.input-field {
  margin: 2px 0 0 0;
}

.input-field:focus {
  outline: none;
}

.input-field .wrapper {
  display: grid;
  grid-template-columns: auto 26px;
  align-items: center;
  margin: 2px 0 0 0;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.input-field .wrapper:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-field:focus .wrapper {
  outline: 3px solid var(--color-border-hover);
}

.input-control.disabled .input-field .wrapper {
  grid-template-columns: auto;
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field .wrapper:hover {
  cursor: not-allowed;
}

.input-field .select {
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  text-align: center;
  padding: 12px;
  box-sizing: border-box;
  height: 50px;
}

.input-control.disabled .input-field .select {
  grid-template-columns: auto !important;
}

.input-field .select .selected {
  font-size: 0.8rem;
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

.input-control .options {
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

.input-control.collapsed .options {
  display: none;
}

.input-control.expanded .options {
  display: block;
}

.input-control.collapsed .search input,
.input-control.collapsed .search .fa-solid {
  display: none;
}

.input-control.expanded .search {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--color-border);
  border-top: none;
  border-bottom: none;
}

.input-control.expanded .search .fa-solid {
  display: inline-block;
}

.input-control.expanded .search input {
  padding: 0.5rem;
  outline: none;
  border: none;
  width: 100%;
  color: var(--color-text);
  background-color: var(--color-background);
  font-size: 0.8rem;
}

.input-control.expanded .search input:focus {
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.input-control.expanded .search .fa-xmark:hover {
  cursor: pointer;
  color: var(--color-border-hover);
}

.input-control .clean-toggle {
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
}

.input-control .clean-toggle:hover {
  cursor: pointer;
  color: var(--color-background);
}

.input-control.disabled .toggle,
.input-control.disabled .clean-toggle {
  display: none;
}

.input-control .clean-toggle:focus {
  outline: 3px solid var(--color-border-hover);
}

.input-error {
  margin: 8px 0 8px 0;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
