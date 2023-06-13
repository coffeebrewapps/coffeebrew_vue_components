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
        class="start-date"
        v-model="selectedStartDate"
        label=""
        :disabled="disabled"
        :min="startMin"
        :max="startMax"
        align-pickers="top"
      />

      <div class="to">to</div>

      <TDatePicker
        class="end-date"
        v-model="selectedEndDate"
        label=""
        :disabled="disabled"
        :min="endMin"
        :max="endMax"
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
  margin-bottom: 2px;
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
  max-width: 200px;
}

.start-date,
.end-date,
.start-date:deep(.input-field),
.end-date:deep(.input-field) {
  margin: 0 !important;
}

.start-date:deep(.input-label),
.end-date:deep(.input-label) {
  display: none;
}

@media screen and (max-width: 680px) {
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
