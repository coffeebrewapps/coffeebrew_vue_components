<script setup>
import { onMounted, computed, ref, watch } from 'vue'

function notEmpty(val) {
  return !isEmpty(val)
}

function isEmpty(val) {
  return Object.is(val, undefined) || Object.is(val, null)
}

const today = new Date()

const initDate = computed(() => {
  return props.modelValue
})

const minDate = computed(() => {
  if (notEmpty(props.min)) {
    return props.min
  } else {
    return new Date(today.getFullYear() - 10, 0, 1)
  }
})

const maxDate = computed(() => {
  if (notEmpty(props.max)) {
    return props.max
  } else {
    return new Date(today.getFullYear() + 9, 11, 31)
  }
})

const years = computed(() => {
  return [
    ...Array(maxDate.value.getFullYear() - minDate.value.getFullYear()).keys()
  ].map(y => y + minDate.value.getFullYear())
})

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

const days = computed(() => {
  const year = selectedYear.value || minDate.value.getFullYear()
  const month = selectedMonth.value || minDate.value.getMonth()

  const monthStart = new Date(year, month, 1)
  monthStart.setMonth(monthStart.getMonth() + 1)
  monthStart.setDate(monthStart.getDate() - 1)
  return Array.from(Array(monthStart.getDate())).map((_, i) => (i + 1))
})

const hours = Array.from(Array(24)).map((_v, i) => i)
const minutes = Array.from(Array(60)).map((_v, i) => i)
const seconds = Array.from(Array(60)).map((_v, i) => i)

const props = defineProps({
  modelValue: {
    type: Date,
    default: null
  },
  min: {
    type: Date,
    default: null
  },
  max: {
    type: Date,
    default: null
  },
  label: {
    type: String,
    default: 'Input'
  },
  displayTime: {
    type: Boolean,
    default: true
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
  },
  alignPickers: {
    type: String,
    default: 'center'
  }
})

const emit = defineEmits(['update:modelValue'])

const yearPicker = ref('yearPicker')
const monthPicker = ref('monthPicker')
const dayPicker = ref('dayPicker')
const hourPicker = ref('hourPicker')
const minutePicker = ref('minutePicker')
const secondPicker = ref('secondPicker')

const yearOptions = ref('yearOptions')
const monthOptions = ref('monthOptions')
const dayOptions = ref('dayOptions')
const hourOptions = ref('hourOptions')
const minuteOptions = ref('minuteOptions')
const secondOptions = ref('secondOptions')

const yearRefs = ref([])
const monthRefs = ref([])
const dayRefs = ref([])
const hourRefs = ref([])
const minuteRefs = ref([])
const secondRefs = ref([])

const toggleState = ref('collapsed')
const selectedYear = ref()
const selectedMonth = ref()
const selectedDay = ref()
const selectedHour = ref()
const selectedMinute = ref()
const selectedSecond = ref()
const selectedDate = ref()

const showYearPicker = ref(false)
const showMonthPicker = ref(false)
const showDayPicker = ref(false)
const showHourPicker = ref(false)
const showMinutePicker = ref(false)
const showSecondPicker = ref(false)

const computedControlClass = computed(() => {
  const className = []

  className.push(`input-control`)

  if (Object.is(props.displayTime, true)) {
    className.push(`display-time`)

    if (Object.is(props.hour12, true)) {
      className.push(`hour12`)
    } else {
      className.push(`hour24`)
    }
  }

  if (Object.is(props.disabled, true)) {
    className.push(`disabled`)
  }

  return className.join(' ')
})

const computedFieldClass = computed(() => {
  const className = []

  className.push(`input-field`)

  if (props.alignPickers === 'top') {
    className.push(`top-align`)
  } else if (props.alignPickers === 'bottom') {
    className.push(`bottom-align`)
  } else {
    className.push(`center`)
  }

  className.push(toggleState.value)

  return className.join(' ')
})

const computedYearPickerClass = computed(() => {
  if (Object.is(showYearPicker.value, true)) {
    return `year picker show`
  } else {
    return `year picker hide`
  }
})

const computedMonthPickerClass = computed(() => {
  if (Object.is(showMonthPicker.value, true)) {
    return `month picker show`
  } else {
    return `month picker hide`
  }
})

const computedDayPickerClass = computed(() => {
  if (Object.is(showDayPicker.value, true)) {
    return `day picker show`
  } else {
    return `day picker hide`
  }
})

const computedHourPickerClass = computed(() => {
  if (Object.is(props.displayTime, true) && Object.is(showHourPicker.value, true)) {
    return `hour picker show`
  } else {
    return `hour picker hide`
  }
})

const computedMinutePickerClass = computed(() => {
  if (Object.is(props.displayTime, true) && Object.is(showMinutePicker.value, true)) {
    return `minute picker show`
  } else {
    return `minute picker hide`
  }
})

const computedSecondPickerClass = computed(() => {
  if (Object.is(props.displayTime, true) && Object.is(showSecondPicker.value, true)) {
    return `second picker show`
  } else {
    return `second picker hide`
  }
})

const computedSelectedDate = computed(() => {
  const year = selectedYear.value
  const month = selectedMonth.value
  const day = selectedDay.value

  if (isEmpty(year)) { return null }
  if (isEmpty(month)) { return null }
  if (isEmpty(day)) { return null }

  if (Object.is(props.displayTime, false)) {
    return new Date(year, month, day)
  }

  const hour = selectedHour.value
  const minute = selectedMinute.value
  const second = selectedSecond.value

  if (Object.is(props.displayTime, true) && isEmpty(hour)) { return null }
  if (Object.is(props.displayTime, true) && isEmpty(minute)) { return null }
  if (Object.is(props.displayTime, true) && isEmpty(second)) { return null }

  return new Date(year, month, day, hour, minute, second)
})

const displayDate = computed(() => {
  if (isEmpty(props.modelValue)) { return { date: {}, time: {} } }

  return formatDate(props.modelValue)
})

function formatDate(date) {
  return formatDateParts(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  )
}

function formatDateParts(year, month, day, hour, minute, second) {
  const date = new Date(year, month, day, hour, minute, second)
  year = date.toLocaleString('default', { year: 'numeric' })
  month = date.toLocaleString('default', { month: '2-digit' })
  day = date.toLocaleString('default', { day: '2-digit' })

  const time = date.toLocaleTimeString('en-US', { hour12: props.hour12, hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const timeParts = time.split(' ')[0].split(':')
  hour = timeParts[0]
  minute = timeParts[1]
  second = timeParts[2]
  const amPm = time.split(' ')[1]

  return {
    date: { year, month, day },
    time: { hour, minute, second, amPm }
  }
}

function toggleSelect() {
  if (Object.is(props.disabled, true)) { return; }

  if (toggleState.value === 'collapsed') {
    toggleState.value = 'expanded'
    showYearPicker.value = true
    if (notEmpty(selectedYear.value)) { showMonthPicker.value = true }
    if (notEmpty(selectedMonth.value)) { showDayPicker.value = true }
    if (notEmpty(selectedDay.value)) { showHourPicker.value = true }
    if (notEmpty(selectedHour.value)) { showMinutePicker.value = true }
    if (notEmpty(selectedMinute.value)) { showSecondPicker.value = true }
  } else {
    toggleState.value = 'collapsed'
    showYearPicker.value = false
    showMonthPicker.value = false
    showDayPicker.value = false
    showHourPicker.value = false
    showMinutePicker.value = false
    showSecondPicker.value = false
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
  if (parseInt(val) === parseInt(selectedMonth.value)) {
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

function scrollOptionsIntoView() {
  let yearRef = null
  if (notEmpty(selectedYear.value)) {
    yearRef = yearRefs.value[years.value.indexOf(selectedYear.value)]
  } else if (today < maxDate.value) {
    yearRef = yearRefs.value[years.value.indexOf(today.getFullYear())]
  } else {
    yearRef = yearRefs.value[years.value.indexOf(minDate.value.getFullYear())]
  }
  yearOptions.value.scrollTop = yearRef.offsetTop

  let monthRef = null
  if (notEmpty(selectedMonth.value)) {
    monthRef = monthRefs.value[selectedMonth.value]
  } else if (today < maxDate.value) {
    monthRef = monthRefs.value[today.getMonth()]
  } else {
    monthRef = monthRefs.value[minDate.value.getMonth()]
  }
  monthOptions.value.scrollTop = monthRef.offsetTop

  let dayRef = null
  if (notEmpty(selectedDay.value)) {
    dayRef = dayRefs.value[days.value.indexOf(selectedDay.value)]
  } else if (today < maxDate.value) {
    dayRef = dayRefs.value[days.value.indexOf(today.getDate())]
  } else {
    dayRef = dayRefs.value[days.value.indexOf(minDate.value.getDate())]
  }
  dayOptions.value.scrollTop = dayRef.offsetTop

  if (Object.is(props.displayTime, false)) { return }

  let hourRef = null
  if (notEmpty(selectedHour.value)) {
    hourRef = hourRefs.value[hours.indexOf(selectedHour.value)]
  } else if (today < maxDate.value) {
    hourRef = hourRefs.value[hours.indexOf(today.getHours())]
  } else {
    hourRef = hourRefs.value[hours.indexOf(minDate.value.getHours())]
  }
  hourOptions.value.scrollTop = hourRef.offsetTop

  let minuteRef = null
  if (notEmpty(selectedMinute.value)) {
    minuteRef = minuteRefs.value[minutes.indexOf(selectedMinute.value)]
  } else if (today < maxDate.value) {
    minuteRef = minuteRefs.value[minutes.indexOf(today.getMinutes())]
  } else {
    minuteRef = minuteRefs.value[minutes.indexOf(minDate.value.getMinutes())]
  }
  minuteOptions.value.scrollTop = minuteRef.offsetTop

  let secondRef = null
  if (notEmpty(selectedSecond.value)) {
    secondRef = secondRefs.value[seconds.indexOf(selectedSecond.value)]
  } else if (today < maxDate.value) {
    secondRef = secondRefs.value[seconds.indexOf(today.getSeconds())]
  } else {
    secondRef = secondRefs.value[seconds.indexOf(minDate.value.getSeconds())]
  }
  secondOptions.value.scrollTop = secondRef.offsetTop
}

watch([selectedYear, selectedMonth, selectedDay, selectedHour, selectedMinute, selectedSecond], () => {
  scrollOptionsIntoView()
})

function selectYear(val) {
  selectedYear.value = val
  showMonthPicker.value = true
}

function selectMonth(val) {
  selectedMonth.value = val
  showDayPicker.value = true
}

function selectDay(val) {
  selectedDay.value = val

  if (Object.is(props.displayTime, true)) {
    showHourPicker.value = true
  }
}

function resetField() {
  selectedYear.value = null
  selectedMonth.value = null
  selectedDay.value = null

  showYearPicker.value = false
  showMonthPicker.value = false
  showDayPicker.value = false

  if (Object.is(props.displayTime, true)) {
    selectedHour.value = null
    selectedMinute.value = null
    selectedSecond.value = null

    showHourPicker.value = false
    showMinutePicker.value = false
    showSecondPicker.value = false
  }

  emit('update:modelValue', computedSelectedDate)
}

function closeSelect() {
  toggleState.value = 'collapsed'
  showYearPicker.value = false
  showMonthPicker.value = false
  showDayPicker.value = false
  showHourPicker.value = false
  showMinutePicker.value = false
  showSecondPicker.value = false

  initDateFromModelValue()
}

const confirmReady = computed(() => {
  return (Object.is(props.displayTime, true) && notEmpty(computedSelectedDate.value)) ||
            notEmpty(computedSelectedDate.value)
})

function confirmDate() {
  toggleState.value = 'collapsed'
  showYearPicker.value = false
  showMonthPicker.value = false
  showDayPicker.value = false
  showHourPicker.value = false
  showMinutePicker.value = false
  showSecondPicker.value = false

  if (notEmpty(computedSelectedDate.value)) {
    emit('update:modelValue', computedSelectedDate)
  } else {
    props.errorMessage = `Cannot submit without selecting all date/time parts!`
  }
}

function selectHour(val) {
  selectedHour.value = val
  showMinutePicker.value = true
}

function selectMinute(val) {
  selectedMinute.value = val
  showSecondPicker.value = true
}

function selectSecond(val) {
  selectedSecond.value = val
}

function initDateFromModelValue() {
  if (isEmpty(initDate.value)) {
    selectedYear.value = null
    selectedMonth.value = null
    selectedDay.value = null

    if (!props.displayTime) { return }

    selectedHour.value = null
    selectedMinute.value = null
    selectedSecond.value = null

    return
  }

  selectYear(initDate.value.getFullYear())
  selectMonth(initDate.value.getMonth())
  selectDay(initDate.value.getDate())

  if (props.displayTime) {
    selectHour(initDate.value.getHours())
    selectMinute(initDate.value.getMinutes())
    selectSecond(initDate.value.getSeconds())
  }
}

// Reference: https://usefulangle.com/post/118/javascript-intersection-observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting === true) {
      scrollOptionsIntoView()
    }
  })
}, { threshold: [0] })

onMounted(() => {
  observer.observe(yearPicker.value)
  observer.observe(monthPicker.value)
  observer.observe(dayPicker.value)

  if (Object.is(props.displayTime, true)) {
    observer.observe(hourPicker.value)
    observer.observe(minutePicker.value)
    observer.observe(secondPicker.value)
  }

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
          <input disabled :value="displayDate.date.year">
          <input disabled :value="displayDate.date.month">
          <input disabled :value="displayDate.date.day">
          <input v-if="displayTime" disabled :value="displayDate.time.hour">
          <input v-if="displayTime" disabled :value="displayDate.time.minute">
          <input v-if="displayTime" disabled :value="displayDate.time.second">
          <input v-if="displayTime && hour12" disabled :value="displayDate.time.amPm">
        </div>

        <div class="toggle">
          <i class="fa-solid fa-calendar-days"></i>
        </div>
      </div>

      <div
        class="clean-toggle"
        @click="resetField"
      >
        <i class="fa-solid fa-broom"></i>
      </div>

      <div class="pickers">
        <div
          class="close-toggle"
          @click="closeSelect"
        >
          <i class="fa-solid fa-xmark"></i>
        </div>

        <div
          :class="computedYearPickerClass"
          ref="yearPicker"
        >
          <div class="title">Year</div>

          <div
            class="options"
            ref="yearOptions"
          >
            <div
              v-for="year in years"
              :class="setYearClass(year)"
              :value="year"
              ref="yearRefs"
              @click="selectYear(year)"
            >
              <div class="value">{{ year }}</div>
              <i class="fa-solid fa-caret-right"></i>
            </div>
          </div>
        </div>

        <div
          :class="computedMonthPickerClass"
          ref="monthPicker"
        >
          <div class="title">Month</div>

          <div
            class="options"
            ref="monthOptions"
          >
            <div
              v-for="month in Object.keys(months)"
              :class="setMonthClass(month)"
              :value="month"
              ref="monthRefs"
              @click="selectMonth(month)"
            >
              <div class="value">{{ months[month] }}</div>
              <i class="fa-solid fa-caret-right"></i>
            </div>
          </div>
        </div>

        <div
          :class="computedDayPickerClass"
          ref="dayPicker"
        >
          <div class="title">Day</div>

          <div
            class="options"
            ref="dayOptions"
          >
            <div
              v-for="day in days"
              :class="setDayClass(day)"
              :value="day"
              ref="dayRefs"
              @click="selectDay(day)"
            >
              <div class="value">{{ day }}</div>
              <i class="fa-solid fa-caret-right"></i>
            </div>
          </div>
        </div>

        <div
          :class="computedHourPickerClass"
          ref="hourPicker"
        >
          <div class="title">Hour</div>

          <div
            class="options"
            ref="hourOptions"
          >
            <div
              v-for="hour in hours"
              :class="setHourClass(hour)"
              :value="hour"
              ref="hourRefs"
              @click="selectHour(hour)"
            >
              <div class="value">{{ hour }}</div>
              <i class="fa-solid fa-caret-right"></i>
            </div>
          </div>
        </div>

        <div
          :class="computedMinutePickerClass"
          ref="minutePicker"
        >
          <div class="title">Minute</div>

          <div
            class="options"
            ref="minuteOptions"
          >
            <div
              v-for="minute in minutes"
              :class="setMinuteClass(minute)"
              :value="minute"
              ref="minuteRefs"
              @click="selectMinute(minute)"
            >
              <div class="value">{{ minute }}</div>
              <i class="fa-solid fa-caret-right"></i>
            </div>
          </div>
        </div>

        <div
          :class="computedSecondPickerClass"
          ref="secondPicker"
        >
          <div class="title">Second</div>

          <div
            class="options"
            ref="secondOptions"
          >
            <div
              v-for="second in seconds"
              :class="setSecondClass(second)"
              :value="second"
              ref="secondRefs"
              @click="selectSecond(second)"
            >
              <div class="value">{{ second }}</div>
            </div>
          </div>
        </div>

        <div
          v-if="confirmReady"
          class="confirm-toggle"
          @click="confirmDate"
        >
          <i class="fa-solid fa-check"></i>
        </div>

      </div> <!-- pickers -->
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
  margin: 2px 8px 8px 0;
  width: 200px;
}

.input-control.display-time {
  width: 400px;
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

.input-control.disabled .input-field .select {
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field .select .selected input:hover,
.input-control.disabled .input-field .select:hover {
  cursor: not-allowed;
}

.input-field .select {
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: center;
  text-align: center;
  padding: 12px;
  margin: 2px 0 0 0;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-sizing: border-box;
  height: 50px;
}

.input-field .select .selected {
  display: grid;
  align-items: center;
}

.input-control .input-field .select .selected {
  grid-template-columns: repeat(3, 1fr);
}

.input-control.display-time.hour24 .input-field .select .selected {
  grid-template-columns: repeat(6, 1fr);
}

.input-control.display-time.hour12 .input-field .select .selected {
  grid-template-columns: repeat(7, 1fr);
}

.input-field .select .selected input {
  text-align: center;
  width: 40px;
  height: 20px;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  border: none;
}

.input-field .clean-toggle {
  position: absolute;
  top: -20px;
  left: 180px;
  z-index: 1;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--color-border);
}

.input-control.display-time .input-field .clean-toggle {
  left: 380px;
}

.input-control.disabled .input-field .clean-toggle,
.input-field.expanded .clean-toggle {
  display: none;
}

.input-field .close-toggle {
  position: absolute;
  top: -20px;
  left: -20px;
  z-index: 3;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--color-border);
}

.input-field.collapsed .confirm-toggle,
.input-field.collapsed .close-toggle {
  display: none;
}

.input-field .clean-toggle:hover,
.input-field .confirm-toggle:hover,
.input-field .close-toggle:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-field .confirm-toggle {
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 3;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--color-border);
}

.input-field .pickers {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  left: 200px;
}

.input-field.center .pickers {
  top: -80px;
}

.input-field.top-align .pickers {
  top: 0;
}

.input-field.bottom-align .pickers {
  bottom: 0;
}

.input-control.display-time .input-field .pickers {
  left: 400px;
}

.input-field .picker {
  border: 1px solid var(--color-border);
  background-color: var(--color-background-soft);
  color: var(--color-text);
  width: 100px;
}

.input-field.expanded .picker.show {
  display: inline-block;
}

.input-field.collapsed .picker {
  display: none;
}

.input-field .picker.hide {
  display: none;
}

.input-field .picker .title {
  padding: 4px;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
  font-weight: 600;
}

.input-field .picker .options {
  scroll-behavior: smooth;
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

.input-control .input-field .day.picker .option .fa-caret-right {
  display: none;
}

.input-control.display-time .input-field .day.picker .option.selected .fa-caret-right {
  display: inline-block;
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
