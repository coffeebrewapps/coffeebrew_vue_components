<script setup>
import { computed, ref } from 'vue'

import TDialog from './TDialog.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 400
  },
  height: {
    type: Number,
    default: 200
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const dialog = ref('dialog')
const dialogShow = computed({
  get: () => {
    return props.modelValue
  },
  set: (val) => {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <TDialog
    ref="dialog"
    v-model="dialogShow"
    :width="width"
    :height="height"
    :title="title"
  >
    <template #body>
      <div
        class="text"
      >
        {{ content }}
      </div>
    </template>
  </TDialog>
</template>

<style scoped>
</style>
