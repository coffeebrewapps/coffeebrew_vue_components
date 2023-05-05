<script setup>
import { computed } from 'vue'

const props = defineProps({
  buttonType: {
    type: String,
    default: 'text'
  },
  size: {
    type: String,
    default: 'md'
  },
  value: {
    type: String,
    default: 'Button'
  },
  icon: {
    type: String,
    default: ''
  }
})

const emit = defineEmits({
  click: null
})

const computedBtnClass = computed(() => {
  return `button ${props.buttonType} ${props.size}`.trim()
})

const computedIconClass = computed(() => {
  return `${props.icon} fa-lg`.trim()
})
</script>

<template>
  <div
    :class="computedBtnClass"
    @click="$emit('click')"
  >
    <span
      v-if="buttonType === 'text'"
    >
      {{ value }}
    </span>

    <i :class="computedIconClass"></i>
  </div>
</template>

<style scoped>
.button {
  display: grid;
  align-items: center;
  margin: 2px 0 8px 0;
  border: 1px solid var(--color-border);
  text-align: center;
  height: 50px;
}

.button:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.button i {
  color: var(--color-text);
}

.button.text {
  display: grid;
  grid-template-columns: 9fr 1fr;
  padding: 12px;
  border-radius: 2rem;
}

.button.text.md {
  width: 200px;
}

.button.text.lg {
  width: 500px;
}

.button.icon {
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;
  border-radius: 50%;
  width: 50px;
}
</style>
