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
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits({
  click: null
})

const computedBtnClass = computed(() => {
  const className = []
  className.push(`button`)
  className.push(props.buttonType)
  className.push(props.size)

  if (props.disabled) {
    className.push(`disabled`)
  }

  return className.join(' ')
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
  text-align: center;
  height: 35px;
  font-size: 0.8rem;
}

.button:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.button.disabled:hover {
  cursor: not-allowed;
  background-color: initial;
}

.button i {
  color: var(--color-text);
}

.button.text {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border-radius: 4px;
}

.button.text span {
  font-weight: 900;
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
  width: 35px;
}
</style>
