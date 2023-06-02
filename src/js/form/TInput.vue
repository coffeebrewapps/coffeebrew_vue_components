<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null
  },
  type: {
    type: String,
    default: 'text'
  },
  size: {
    type: String,
    default: 'md'
  },
  label: {
    type: String,
    default: 'Input'
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

const cleanToggle = ref('cleanToggle')

const computedControlClass = computed(() => {
  const className = []

  className.push(`input-control`)

  if (props.disabled) {
    className.push(`disabled`)
  }

  return className.join(' ')
})

function updateInput(value) {
  if (props.type === 'number') {
    if (isNaN(+value)) {
      emit('update:modelValue', null)
    } else {
      emit('update:modelValue', value)
    }
  } else {
    emit('update:modelValue', value)
  }
}

function resetField(event) {
  if (event instanceof KeyboardEvent && event.target !== cleanToggle.value) { return }

  emit('update:modelValue', null)
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
      class="input-field"
    >
      <input
        :type="type"
        :class="size"
        :value="modelValue"
        :disabled="disabled"
        @input="updateInput($event.target.value)"
      >
    </div>

    <div
      tabindex="0"
      class="clean-toggle"
      ref="cleanToggle"
      @click="resetField($event)"
      @keydown.enter="resetField($event)"
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

.input-label {
  font-size: 0.8rem;
}

.input-field input {
  padding: 12px;
  margin: 2px 0 8px 0;
  display: inline-block;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--color-text);
  background-color: var(--color-background);
  font-size: 0.8rem;
}

.input-field input:focus {
  outline: 3px solid var(--color-border-hover);
}

.input-control.disabled .input-field input {
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field input:hover {
  cursor: not-allowed;
}

.input-field input.sm {
  width: 100px;
}

.input-field input.md {
  width: 200px;
}

.input-field input.lg {
  width: 500px;
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

.input-control .clean-toggle:focus {
  outline: 3px solid var(--color-border-hover);
}

.input-control .clean-toggle:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
