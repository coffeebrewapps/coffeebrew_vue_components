<script setup>
import { computed } from 'vue';

import TDateTimePicker from './TDateTimePicker.vue';

const props = defineProps({
  modelValue: {
    type: Date,
    default: null,
  },
  min: {
    type: Date,
    default: null,
  },
  max: {
    type: Date,
    default: null,
  },
  label: {
    type: String,
    default: 'Input',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  alignPickers: {
    type: String,
    default: 'center',
  },
});

const emit = defineEmits(['update:modelValue']);

const selectedDate = computed({
  get: () => {
    return props.modelValue;
  },
  set: (val) => {
    emit('update:modelValue', val);
  },
});
</script>

<template>
  <TDateTimePicker
    v-model="selectedDate"
    :min="min"
    :max="max"
    :label="label"
    :display-time="false"
    :disabled="disabled"
    :align-pickers="alignPickers"
    :error-message="errorMessage"
  />
</template>

<style scoped>
</style>
