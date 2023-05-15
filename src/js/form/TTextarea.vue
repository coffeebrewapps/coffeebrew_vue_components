<script setup>
import { computed } from 'vue'

defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 10
  },
  cols: {
    type: Number,
    default: 100
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

const computedSize = computed(() => {
  return {
    rows: props.rows || 10,
    cols: props.cols || 100
  }
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
      class="input-field"
    >
      <textarea
        :rows="computedSize.rows"
        :cols="computedSize.cols"
        :value="modelValue"
        :disabled="disabled"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      </textarea>
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

.input-field textarea {
  padding: 12px;
  margin: 2px 0 8px 0;
  display: inline-block;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-sizing: border-box;
  resize: none;
}

.input-control.disabled .input-field textarea {
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field textarea:hover {
  cursor: not-allowed;
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
