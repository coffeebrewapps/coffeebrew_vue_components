<script setup>
import { onMounted, computed, ref } from 'vue'

const today = new Date()
const defaultMinDate = new Date(today.getFullYear() - 10, 1, 1)
const defaultMaxDate = new Date(today.getFullYear() + 9, 12, 31)

const years = [
  ...Array(defaultMaxDate.getFullYear() - defaultMinDate.getFullYear()).keys()
].map(y => y + defaultMinDate.getFullYear())

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const days = ref([])

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

const toggleState = ref('collapsed')
const selectedYear = ref()
const selectedMonth = ref()
const selectedDay = ref()
const selectedDate = ref()

const showMonthPicker = ref(false)
const showDayPicker = ref(false)

const computedControlClass = computed(() => {
  return `input-control`
})

const computedFieldClass = computed(() => {
  return `input-field ${toggleState.value}`.trim()
})

const computedMonthPickerClass = computed(() => {
  if (showMonthPicker.value) {
    return `month picker show`
  } else {
    return `month picker hide`
  }
})

const computedDayPickerClass = computed(() => {
  if (showDayPicker.value) {
    return `day picker show`
  } else {
    return `day picker hide`
  }
})

const computedSelectedDate = computed(() => {
  if (!selectedYear.value) { return null }
  if (!selectedMonth.value) { return null }
  if (!selectedDay.value) { return null }
  return new Date(selectedYear.value, selectedMonth.value, selectedDay.value)
})

const displayYear = computed(() => {
  if (selectedYear.value) {
    return formatDateParts(selectedYear.value, 1, 1).split('-')[0]
  } else {
    return formatDate(new Date()).split('-')[0]
  }
})

const displayMonth = computed(() => {
  if (selectedMonth.value) {
    return formatDateParts(1900, selectedMonth.value, 1).split('-')[1]
  } else {
    return formatDate(new Date()).split('-')[1]
  }
})

const displayDay = computed(() => {
  if (selectedDay.value) {
    return formatDateParts(1900, 1, selectedDay.value).split('-')[2]
  } else {
    return formatDate(new Date()).split('-')[2]
  }
})

function daysInMonth(year, month) {
  const monthStart = new Date(year, month, 1)
  monthStart.setMonth(monthStart.getMonth() + 1)
  monthStart.setDate(monthStart.getDate() - 1)
  return monthStart.getDate()
}

function formatDate(date) {
  const year = date.toLocaleString('default', { year: 'numeric' })
  const month = date.toLocaleString('default', { month: '2-digit' })
  const day = date.toLocaleString('default', { day: '2-digit' })

  return [year, month, day].join('-');
}

function formatDateParts(year, month, day) {
  const date = new Date(year, month, day)
  year = date.toLocaleString('default', { year: 'numeric' })
  month = date.toLocaleString('default', { month: '2-digit' })
  day = date.toLocaleString('default', { day: '2-digit' })

  return [year, month, day].join('-');
}

function toggleSelect() {
  if (toggleState.value === 'collapsed') {
    toggleState.value = 'expanded'
    if (selectedYear.value) { showMonthPicker.value = true }
    if (selectedMonth.value) { showDayPicker.value = true }
  } else {
    toggleState.value = 'collapsed'
    showMonthPicker.value = false
    showDayPicker.value = false
  }
}

function setYearClass(val) {
  if (val === selectedYear.value) {
    return `option selected`
  } else {
    return `option`
  }
}

function setMonthClass(val) {
  if (val === selectedMonth.value) {
    return `option selected`
  } else {
    return `option`
  }
}

function setDayClass(val) {
  if (val === selectedDay.value) {
    return `option selected`
  } else {
    return `option`
  }
}

function selectYear(val) {
  selectedYear.value = val
  selectedMonth.value = 0
  selectedDay.value = 1
  showMonthPicker.value = true
  showDayPicker.value = false
}

function selectMonth(val) {
  selectedMonth.value = val
  selectedDay.value = 1
  showDayPicker.value = true
  days.value = daysInMonth(selectedYear.value, selectedMonth.value)
}

function selectDay(val) {
  toggleState.value = 'collapsed'
  selectedDay.value = val
  showMonthPicker.value = false
  showDayPicker.value = false
  emit('update:modelValue', computedSelectedDate)
}

function initDateFromModelValue() {
  if (!props.modelValue) { return }

  selectYear(props.modelValue.getFullYear())
  selectMonth(props.modelValue.getMonth())
  selectDay(props.modelValue.getDate())
}

onMounted(() => {
  initDateFromModelValue()
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
          <input disabled :value="displayYear">
          <input disabled :value="displayMonth">
          <input disabled :value="displayDay">
        </div>

        <div class="toggle">
          <i class="fa-solid fa-calendar-days"></i>
        </div>
      </div>

      <div
        class="year picker"
      >
        <div class="title">Year</div>

        <div class="options">
          <div
            v-for="year in years"
            :class="setYearClass(year)"
            :value="year"
            @click="selectYear(year)"
          >
            <div class="value">{{ year }}</div>
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>

      <div
        :class="computedMonthPickerClass"
      >
        <div class="title">Month</div>

        <div class="options">
          <div
            v-for="month in Object.keys(months)"
            :class="setMonthClass(month)"
            :value="month"
            @click="selectMonth(month)"
          >
            <div class="value">{{ months[month] }}</div>
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>

      <div
        :class="computedDayPickerClass"
      >
        <div class="title">Day</div>

        <div class="options">
          <div
            v-for="day in days"
            :class="setDayClass(day)"
            :value="day"
            @click="selectDay(day)"
          >
            <div class="value">{{ day }}</div>
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
  width: 200px;
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

.input-field .select .selected {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

.input-field .year.picker {
  left: 200px;
}

.input-field .month.picker {
  left: 300px;
}

.input-field .month.picker.show {
  display: inline-block;
}

.input-field .month.picker.hide {
  display: none;
}

.input-field .day.picker {
  left: 400px;
}

.input-field .day.picker.show {
  display: inline-block;
}

.input-field .day.picker.hide {
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
