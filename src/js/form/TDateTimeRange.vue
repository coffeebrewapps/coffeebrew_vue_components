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
        class="start-time"
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
        class="end-time"
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
  margin: 0 0 8px 0;
}

.input-field .to {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}

.start-time,
.end-time,
.start-time:deep(.input-field),
.end-time:deep(.input-field) {
  margin: 0 !important;
}

.start-time:deep(.input-label),
.end-time:deep(.input-label) {
  display: none;
}

@media screen and (max-width: 1100px) {
  .input-field {
    flex-direction: column !important;
    gap: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .input-field .to {
    margin: 4px 0 !important;
    padding: 0 !important;
  }
}
</style>
