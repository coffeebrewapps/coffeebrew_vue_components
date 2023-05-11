<script setup>
import { onMounted, computed, ref } from 'vue'

import TDateTimePicker from './TDateTimePicker.vue'

const props = defineProps({
  modelValue: {
    type: Date,
    default: new Date()
  },
  min: {
    type: Date,
    default: new Date((new Date()).getFullYear() - 10, 1, 1)
  },
  max: {
    type: Date,
    default: new Date((new Date()).getFullYear() + 9, 12, 31)
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

const selectedDate = computed({
  get: () => {
    return props.modelValue
  },
  set: (val) => {
    emit('update:modelValue', val)
  }
})

onMounted(() => {
})
</script>

<template>
  <TDateTimePicker
    v-model="selectedDate"
    :min="min"
    :max="max"
    :label="label"
    :display-time="false"
    :error-message="errorMessage"
  />
</template>

<style scoped>
</style>
