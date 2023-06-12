<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

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

const cleanToggle = ref('cleanToggle')

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
      <div class="wrapper">
        <textarea
          :rows="computedSize.rows"
          :cols="computedSize.cols"
          :value="modelValue"
          :disabled="disabled"
          @input="$emit('update:modelValue', $event.target.value)"
        >
        </textarea>

        <div
          tabindex="0"
          class="clean-toggle"
          ref="cleanToggle"
          @click="resetField($event)"
          @keydown.enter="resetField($event)"
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
      </div> <!-- wrapper -->
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
  justify-content: flex-start;
  align-items: flex-start;
}

.input-label {
  font-size: 0.8rem;
  min-height: 20px;
}

.input-field .wrapper {
  display: grid;
  grid-template-columns: auto 26px;
  align-items: center;
  margin: 2px 0 0 0;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.input-field textarea {
  padding: 12px;
  margin: 2px 0 8px 0;
  display: inline-block;
  border: none;
  box-sizing: border-box;
  resize: none;
  color: var(--color-text);
  background-color: var(--color-background);
  font-size: 0.8rem;
}

.input-control .input-field .wrapper:has(textarea:focus) {
  outline: 3px solid var(--color-border-hover);
}

.input-control.disabled .input-field .wrapper,
.input-control.disabled .input-field .wrapper textarea {
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field .wrapper:hover {
  cursor: not-allowed;
}

.input-field textarea:focus {
  outline: none;
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
