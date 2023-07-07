<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null,
  },
  type: {
    type: String,
    default: 'text',
  },
  step: {
    type: Number,
    default: 1,
  },
  size: {
    type: String,
    default: 'md',
  },
  label: {
    type: String,
    default: 'Input',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
});

const input = ref('input');
const cleanToggle = ref('cleanToggle');

const inputValue = computed(() => {
  return props.modelValue;
});

const computedControlClass = computed(() => {
  const className = [];

  className.push(`input-control`);

  if (props.disabled) {
    className.push(`disabled`);
  }

  className.push(props.size);

  return className.join(' ');
});

const computedInputFieldClass = computed(() => {
  return `input-field ${props.type}`;
});

function incrementNumber() {
  if (!isNaN(+props.modelValue)) {
    emit('update:modelValue', parseFloat(+props.modelValue) + parseFloat(props.step));
  }
}

function decrementNumber() {
  if (!isNaN(+props.modelValue)) {
    emit('update:modelValue', parseFloat(+props.modelValue) - parseFloat(props.step));
  }
}

function updateInput(value) {
  if (props.type === 'number') {
    if (isNaN(+value) || value === '') {
      emit('update:modelValue', null);
    } else {
      emit('update:modelValue', +value);
    }
  } else {
    emit('update:modelValue', value);
  }
}

function resetField() {
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
      :class="computedInputFieldClass"
    >
      <div class="wrapper">
        <input
          ref="input"
          :type="type"
          :step="step"
          :value="inputValue"
          :disabled="disabled"
          @input="updateInput($event.target.value)"
        >

        <div
          v-if="type === 'number'"
          class="number-spin-button"
        >
          <i
            class="fa-solid fa-caret-up fa-sm"
            @click="incrementNumber"
          />
          <i
            class="fa-solid fa-caret-down fa-sm"
            @click="decrementNumber"
          />
        </div>

        <div
          ref="cleanToggle"
          tabindex="0"
          class="clean-toggle"
          @click="resetField"
          @keydown.enter="resetField"
        >
          <i class="fa-solid fa-circle-xmark" />
        </div>
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
  display: flex;
  flex-direction: column;
  margin: 2px 8px 8px 0;
}

.input-label {
  font-size: 0.8rem;
  min-height: 20px;
}

.input-field .wrapper {
  display: grid;
  grid-template-columns: auto 26px;
  align-items: center;
  margin: 2px 0 8px 0;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.input-field.number .wrapper {
  grid-template-columns: auto 26px 24px;
}

.input-control.disabled .input-field .wrapper {
  grid-template-columns: auto;
}

.input-field input {
  padding: 12px;
  display: inline-block;
  border: none;
  box-sizing: border-box;
  color: var(--color-text);
  background-color: var(--color-background);
  font-size: 0.8rem;
  width: 100%;
  height: 50px;
}

.input-field input[type=number]::-webkit-outer-spin-button,
.input-field input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

.input-field .number-spin-button {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  place-items: center;
}

.input-field .number-spin-button i:hover {
  cursor: pointer;
  color: var(--color-border-hover);
}

.input-control.disabled .input-field .number-spin-button {
  display: none;
}

.input-field input:focus {
  outline: none;
}

.input-control.disabled .input-field input,
.input-control.disabled .input-field .wrapper {
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field input:hover,
.input-control.disabled .input-field .number-spin-button i:hover {
  cursor: not-allowed;
  color: var(--color-text);
}

.input-control.sm .input-label,
.input-control.sm .input-field,
.input-control.sm .input-field .wrapper {
  width: 100px;
}

.input-control .input-label,
.input-control .input-field,
.input-control .input-field .wrapper,
.input-control.md .input-label,
.input-control.md .input-field,
.input-control.md .input-field .wrapper {
  width: 200px;
}

.input-control.lg .input-label,
.input-control.lg .input-field,
.input-control.lg .input-field .wrapper {
  width: 500px;
}

.input-control .clean-toggle {
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
}

.input-control.disabled .clean-toggle {
  display: none;
}

.input-control .input-field .wrapper:has(input:focus),
.input-control .clean-toggle:focus {
  outline: 3px solid var(--color-border-hover);
}

.input-control .clean-toggle:hover {
  cursor: pointer;
  color: var(--color-border-hover);
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
