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
  }
})

const emit = defineEmits(['update:modelValue'])

const checked = ref(props.modelValue)

const computedControlClass = computed(() => {
  if (props.label.length <= 10) {
    return `input-control sm`
  } else if (props.label.length > 10 && props.label.length <= 30) {
    return `input-control md`
  } else {
    return `input-control lg`
  }
})

const computedFieldClass = computed(() => {
  if (checked.value) {
    return `input-field checked`
  } else {
    return `input-field`
  }
})

function toggleChecked() {
  checked.value = !checked.value
  emit('update:modelValue', checked.value)
}
</script>

<template>
  <div
    :class="computedControlClass"
    @click="toggleChecked"
  >
    <div
      :class="computedFieldClass"
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
</template>

<style scoped>
.input-control {
  display: flex;
  flex-direction: row;
  align-items: center;
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

.input-field {
  display: grid;
  align-items: center;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid var(--color-border);
}

.input-field.checked {
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
