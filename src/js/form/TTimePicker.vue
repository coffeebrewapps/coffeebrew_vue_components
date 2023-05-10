<script setup>
import { onMounted, computed, ref } from 'vue'

const hours = Array.from(Array(24)).map((_v, i) => i)
const minutes = Array.from(Array(60)).map((_v, i) => i)
const seconds = Array.from(Array(60)).map((_v, i) => i)

const props = defineProps({
  modelValue: {
    type: Date,
    default: new Date()
  },
  label: {
    type: String,
    default: 'Input'
  },
  hour12: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const toggleState = ref('collapsed')
const selectedHour = ref()
const selectedMinute = ref()
const selectedSecond = ref()
const selectedTime = ref()

const showMinutePicker = ref(false)
const showSecondPicker = ref(false)

const computedControlClass = computed(() => {
  if (props.hour12) {
    return `input-control hour12`
  } else {
    return `input-control hour24`
  }
})

const computedFieldClass = computed(() => {
  return `input-field ${toggleState.value}`.trim()
})

const computedMinutePickerClass = computed(() => {
  if (showMinutePicker.value) {
    return `minute picker show`
  } else {
    return `minute picker hide`
  }
})

const computedSecondPickerClass = computed(() => {
  if (showSecondPicker.value) {
    return `second picker show`
  } else {
    return `second picker hide`
  }
})

const computedSelectedTime = computed(() => {
  const hour = selectedHour.value || 0
  const minute = selectedMinute.value || 0
  const second = selectedSecond.value || 0
  return new Date(1900, 0, 1, hour, minute, second)
})

const displayHour = computed(() => {
  const hour = selectedHour.value || 0
  return formatTimeParts(hour, 0, 0).split(' ')[0].split(':')[0]
})

const displayMinute = computed(() => {
  const minute = selectedMinute.value || 0
  return formatTimeParts(0, minute, 0).split(' ')[0].split(':')[1]
})

const displaySecond = computed(() => {
  const second = selectedSecond.value || 0
  return formatTimeParts(0, 0, second).split(' ')[0].split(':')[2]
})

const displayTimePart = computed(() => {
  const hour = selectedHour.value || 0
  return formatTimeParts(hour, 0, 0).split(' ')[1]
})

function formatTimeParts(hour, minute, second) {
  const newDate = new Date(1900, 1, 1, hour, minute, second)
  return newDate.toLocaleTimeString('en-US', { hour12: props.hour12, hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

function toggleSelect() {
  if (toggleState.value === 'collapsed') {
    toggleState.value = 'expanded'
    if (selectedHour.value) { showMinutePicker.value = true }
    if (selectedMinute.value) { showSecondPicker.value = true }
  } else {
    toggleState.value = 'collapsed'
    showMinutePicker.value = false
    showSecondPicker.value = false
  }
}

function setHourClass(val) {
  if (val === selectedHour.value) {
    return `option selected`
  } else {
    return `option`
  }
}

function setMinuteClass(val) {
  if (val === selectedMinute.value) {
    return `option selected`
  } else {
    return `option`
  }
}

function setSecondClass(val) {
  if (val === selectedSecond.value) {
    return `option selected`
  } else {
    return `option`
  }
}

function selectHour(val) {
  selectedHour.value = val
  selectedMinute.value = 0
  selectedSecond.value = 0
  showMinutePicker.value = true
  showSecondPicker.value = false
}

function selectMinute(val) {
  selectedMinute.value = val
  selectedSecond.value = 0
  showSecondPicker.value = true
  seconds.value = 0
}

function selectSecond(val) {
  toggleState.value = 'collapsed'
  selectedSecond.value = val
  showMinutePicker.value = false
  showSecondPicker.value = false
  emit('update:modelValue', computedSelectedTime)
}

function initTimeFromModelValue() {
  const initDate = props.modelValue || (new Date())
  selectHour(initDate.getHours())
  selectMinute(initDate.getMinutes())
  selectSecond(initDate.getSeconds())
}

onMounted(() => {
  initTimeFromModelValue()
})
</script>

<template>
  <div
    :class="computedControlClass"
  >
    <div
      class="input-label"
    >
      {{ label }}
    </div>

    <div
      :class="computedFieldClass"
    >
      <div
        class="select"
        @click="toggleSelect"
      >
        <div class="selected">
          <input disabled :value="displayHour">
          <input disabled :value="displayMinute">
          <input disabled :value="displaySecond">
          <input v-if="hour12" disabled :value="displayTimePart">
        </div>

        <div class="toggle">
          <i class="fa-solid fa-clock"></i>
        </div>
      </div>

      <div
        class="hour picker"
      >
        <div class="title">Hour</div>

        <div class="options">
          <div
            v-for="hour in hours"
            :class="setHourClass(hour)"
            :value="hour"
            @click="selectHour(hour)"
          >
            <div class="value">{{ hour }}</div>
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>

      <div
        :class="computedMinutePickerClass"
      >
        <div class="title">Minute</div>

        <div class="options">
          <div
            v-for="minute in minutes"
            :class="setMinuteClass(minute)"
            :value="minute"
            @click="selectMinute(minute)"
          >
            <div class="value">{{ minute }}</div>
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>

      <div
        :class="computedSecondPickerClass"
      >
        <div class="title">Second</div>

        <div class="options">
          <div
            v-for="second in seconds"
            :class="setSecondClass(second)"
            :value="second"
            @click="selectSecond(second)"
          >
            <div class="value">{{ second }}</div>
          </div>
        </div>
      </div>
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
  margin: 2px 0 8px 0;
}

.input-control.hour24 {
  width: 200px;
}

.input-control.hour12 {
  width: 250px;
}

.input-label {
  font-size: 0.8rem;
}

.input-field {
  margin: 2px 0 8px 0;
}

.input-field .select:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-field .select {
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  text-align: center;
  padding: 12px;
  margin: 2px 0 0 0;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-sizing: border-box;
  height: 50px;
}

.input-control.md .input-field .select {
  grid-template-columns: 7fr 1fr;
}

.input-control.lg .input-field .select {
  grid-template-columns: 15fr 1fr;
}

.input-control.hour24 .input-field .select .selected {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}

.input-control.hour12 .input-field .select .selected {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
}

.input-field .select .selected input {
  text-align: center;
  width: 40px;
  height: 20px;
  background-color: var(--color-background-soft);
  color: var(--color-text);
}

.input-field .picker {
  position: absolute;
  top: -100px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-soft);
  color: var(--color-text);
  z-index: 99;
  width: 100px;
}

.input-field .hour.picker {
  left: 200px;
}

.input-field .minute.picker {
  left: 300px;
}

.input-field .minute.picker.show {
  display: inline-block;
}

.input-field .minute.picker.hide {
  display: none;
}

.input-field .second.picker {
  left: 400px;
}

.input-field .second.picker.show {
  display: inline-block;
}

.input-field .second.picker.hide {
  display: none;
}

.input-field.collapsed .picker {
  display: none;
}

.input-field.expanded .picker {
  display: block;
}

.input-field .picker .title {
  padding: 4px;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
}

.input-field .picker .options {
  height: 150px;
  overflow-y: scroll;
}

.input-field .picker .option {
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  padding: 4px;
  text-align: center;
}

.input-field .picker .option.selected {
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-field .picker .option:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-field .picker .option .fa-caret-right {
  display: none;
}

.input-field .picker .option.selected .fa-caret-right {
  display: inline-block;
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
