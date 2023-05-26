<script setup>
import { computed } from 'vue'

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
    if (isNaN(parseFloat(value))) {
      emit('update:modelValue', null)
    } else {
      emit('update:modelValue', parseFloat(value))
    }
  } else {
    emit('update:modelValue', value)
  }
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
      v-if="errorMessage.length > 0"
      class="input-error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped>
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

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
