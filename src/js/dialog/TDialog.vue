<script setup>
import { onMounted, computed, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 800
  },
  height: {
    type: Number,
    default: 600
  },
  title: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const dialog = ref('dialog')

const computedDialogClass = computed(() => {
  if (props.modelValue) {
    return `dialog show`
  } else {
    return `dialog hide`
  }
})

const showDialog = computed(() => {
  return props.modelValue
})

function closeDialog() {
  emit('update:modelValue', false)
}

onMounted(() => {
  dialog.value.style.width = `${props.width}px`
  dialog.value.style.height = `${props.height}px`
  dialog.value.style.top = `calc((100vh - ${dialog.value.style.height}) / 2)`
  dialog.value.style.left = `calc((100vw - ${dialog.value.style.width}) / 2)`
})
</script>

<template>
  <div
    v-if="showDialog"
    class="dialog"
    ref="dialog"
  >
    <div
      class="menu-bar"
    >
      <slot name="menu-bar">
        <div
          class="menu-button close"
          @click="closeDialog()"
        ></div>
      </slot>
    </div>

    <div
      class="container"
    >
      <div
        class="heading"
      >
        <slot name="heading">
          {{ title }}
        </slot>
      </div>

      <div
        class="body"
      >
        <slot name="body">
        </slot>
      </div>

      <div
        class="actions"
      >
        <slot name="actions">
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dialog {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: calc((100vh - 600px) / 2);
  left: calc((100vw - 800px) / 2);
  width: 800px;
  height: 600px;
  background-color: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-text);
  z-index: 99;
}

.dialog .menu-bar {
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  height: 2rem;
  border-bottom: 1px solid var(--color-text);
}

.dialog .menu-bar .menu-button.close {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: var(--color-error);
}

.dialog .menu-bar .menu-button.close:hover {
  cursor: pointer;
}

.dialog .container {
  display: flex;
  flex-direction: column;
  height: 92%;
  padding: 1rem;
}

.dialog .container .heading {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem;
}

.dialog .container .body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  height: 80%;
}

.dialog .container .actions {
  display: flex;
  justify-content: center;
  gap: 4px;
}
</style>
