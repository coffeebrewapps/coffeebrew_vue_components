<script setup>
import { computed } from 'vue'

import TDateTimePicker from './TDateTimePicker.vue'

const props = defineProps({
  startTime: {
    type: Date,
    default: null
  },
  endTime: {
    type: Date,
    default: null
  },
  startMin: {
    type: Date,
    default: null
  },
  startMax: {
    type: Date,
    default: null
  },
  endMin: {
    type: Date,
    default: null
  },
  endMax: {
    type: Date,
    default: null
  },
  label: {
    type: String,
    default: 'Date'
  },
  hour12: {
    type: Boolean,
    default: false
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

const emit = defineEmits(['update:startTime', 'update:endTime'])

const selectedStartTime = computed({
  get: () => {
    return props.startTime
  },
  set: (val) => {
    emit('update:startTime', val)
  }
})

const selectedEndTime = computed({
  get: () => {
    return props.endTime
  },
  set: (val) => {
    emit('update:endTime', val)
  }
})
</script>

<template>
  <div class="input-control">
    <div class="input-label">
      {{ label }}
    </div>

    <div class="input-field">
      <TDateTimePicker
        v-model="selectedStartTime"
        label=""
        :disabled="disabled"
        :hour12="hour12"
        :min="startMin"
        :max="startMax"
        align-pickers="top"
      />

      <div class="to">to</div>

      <TDateTimePicker
        v-model="selectedEndTime"
        label=""
        :disabled="disabled"
        align-pickers="top"
        :hour12="hour12"
        :min="endMin"
        :max="endMax"
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
