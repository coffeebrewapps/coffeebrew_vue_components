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
  },
  fullscreen: {
    type: Boolean,
    default: false
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

const computedStyles = computed(() => {
  if (dialog.value) {
    if (props.fullscreen) {
      const width = `90vw`
      const height = `90vh`
      const top = `calc((100vh - ${height}) / 2)`
      const left  = `calc((100vw - ${width}) / 2)`

      return `width:${width}; height:${height}; top:${top}; left:${left};`
    } else {
      const width = `${props.width}px`
      const height = `${props.height}px`
      const top = `calc((100vh - ${height}) / 2)`
      const left  = `calc((100vw - ${width}) / 2)`

      return `width:${width}; height:${height}; top:${top}; left:${left};`
    }
  } else {
    return ``
  }
})

onMounted(() => {
})
</script>

<template>
  <Transition name="dialog">
    <div
      :class="computedDialogClass"
      ref="dialog"
      v-if="showDialog"
    >
      <div
        class="window"
        :style="computedStyles"
      >
        <div
          class="close-button"
          @click="closeDialog()"
        >
          <i class="fa-solid fa-xmark"></i>
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
      </div> <!-- window -->
    </div> <!-- dialog -->
  </Transition>
</template>

<style scoped>
.dialog {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  transition: opacity 0.5s linear;
}

.dialog.show {
  display: block;
}

.dialog.hide {
  display: none;
}

.window {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 600px;
  top: calc((100vh - 600px) / 2);
  left: calc((100vw - 800px) / 2);
  background-color: var(--color-background);
  color: var(--color-text);
  border-radius: 4px;
  z-index: 999;
}

.window .close-button {
  position: absolute;
  top: -20px;
  left: -20px;
  z-index: 1000;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--color-border);
}

.window .close-button:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.window .container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
}

.window .container .heading {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem;
}

.window .container .body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  padding: 1rem;
  height: 80%;
  overflow-y: auto;
}

.window .container .actions {
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 1rem;
}
</style>
