<script setup>
defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
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
  errorMessage: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    class="input-control"
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
        @input="$emit('update:modelValue', $event.target.value)"
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
