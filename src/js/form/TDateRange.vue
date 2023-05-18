<script setup>
import { computed } from 'vue'

import TDatePicker from './TDatePicker.vue'

const props = defineProps({
  startDate: {
    type: Date,
    default: null
  },
  endDate: {
    type: Date,
    default: null
  },
  label: {
    type: String,
    default: 'Date'
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

const emit = defineEmits(['update:startDate', 'update:endDate'])

const selectedStartDate = computed({
  get: () => {
    return props.startDate
  },
  set: (val) => {
    emit('update:startDate', val)
  }
})

const selectedEndDate = computed({
  get: () => {
    return props.endDate
  },
  set: (val) => {
    emit('update:endDate', val)
  }
})
</script>

<template>
  <div class="input-control">
    <div class="input-label">
      {{ label }}
    </div>

    <div class="input-field">
      <TDatePicker
        v-model="selectedStartDate"
        label=""
        :disabled="disabled"
        align-pickers="top"
      />

      <div class="to">to</div>

      <TDatePicker
        v-model="selectedEndDate"
        label=""
        :disabled="disabled"
        align-pickers="top"
      />
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
  margin: 2px 8px 4px 0;
}

.input-label {
  font-size: 0.8rem;
}

.input-field {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin: 2px 8px 4px 0;
  padding: 12px 12px 0 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.input-field .to {
  margin: 0 8px 0 4px;
  padding: 2rem 0;
  font-size: 0.8rem;
  font-weight: 600;
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
