<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: 'Input'
  },
  errorMessage: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const checked = ref(props.modelValue)
const checkbox = ref('checkbox')

const computedControlClass = computed(() => {
  const className = []

  className.push(`input-control`)

  if (props.label.length <= 10) {
    className.push(`sm`)
  } else if (props.label.length > 10 && props.label.length <= 30) {
    className.push(`md`)
  } else {
    className.push(`lg`)
  }

  if (props.disabled) {
    className.push(`disabled`)
  }

  return className.join(' ')
})

const computedCheckboxClass = computed(() => {
  if (checked.value) {
    return `checkbox checked`
  } else {
    return `checkbox`
  }
})

function toggleChecked(event) {
  if (event instanceof KeyboardEvent && event.target !== checkbox.value) { return }

  if (props.disabled) { return; }

  checked.value = !checked.value
  emit('update:modelValue', checked.value)
}
</script>

<template>
  <div
    :class="computedControlClass"
    @click="toggleChecked($event)"
  >
    <div
      class="input-field"
    >
      <div
        tabindex="0"
        ref="checkbox"
        :class="computedCheckboxClass"
        @keydown.enter="toggleChecked($event)"
      >
      </div>

      <div
        class="input-label"
      >
        {{ label }}
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
  gap: 4px;
  padding: 4px 0;
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

.input-control:hover {
  cursor: pointer;
}

.input-control.disabled:hover {
  cursor: not-allowed;
}

.input-field {
  display: flex;
  align-items: center;
  gap: 4px;
}

.input-field .checkbox {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid var(--color-border);
}

.input-field .checkbox:focus {
  outline: 3px solid var(--color-border);
}

.input-field .checkbox.checked {
  background-color: var(--color-border-hover);
}

.input-label {
  font-size: 0.8rem;
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
