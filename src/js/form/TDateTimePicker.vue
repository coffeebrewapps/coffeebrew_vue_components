<script setup>
import { onMounted, computed, ref, watch } from 'vue'

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

const days = computed(() => {
  const year = selectedYear.value
  const month = selectedMonth.value

  if (year && month) {
    const monthStart = new Date(year, month, 1)
    monthStart.setMonth(monthStart.getMonth() + 1)
    monthStart.setDate(monthStart.getDate() - 1)
    return Array.from(Array(monthStart.getDate())).map((_, i) => (i + 1))
  } else {
    return Array.from(Array(30)).map((_, i) => (i + 1))
  }
})

const hours = Array.from(Array(24)).map((_v, i) => i)
const minutes = Array.from(Array(60)).map((_v, i) => i)
const seconds = Array.from(Array(60)).map((_v, i) => i)

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

  if (props.displayTime) {
    className.push(`display-time`)

    if (props.hour12) {
      className.push(`hour12`)
    } else {
      className.push(`hour24`)
    }
  }

  if (props.disabled) {
    className.push(`disabled`)
  }

  return className.join(' ')
})

const computedFieldClass = computed(() => {
  return `input-field ${toggleState.value}`.trim()
})

const computedYearPickerClass = computed(() => {
  if (showYearPicker.value) {
    return `year picker show`
  } else {
    return `year picker hide`
  }
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

const computedHourPickerClass = computed(() => {
  if (props.displayTime && showHourPicker.value) {
    return `hour picker show`
  } else {
    return `hour picker hide`
  }
})

const computedMinutePickerClass = computed(() => {
  if (props.displayTime && showMinutePicker.value) {
    return `minute picker show`
  } else {
    return `minute picker hide`
  }
})

const computedSecondPickerClass = computed(() => {
  if (props.displayTime && showSecondPicker.value) {
    return `second picker show`
  } else {
    return `second picker hide`
  }
})

const computedSelectedDate = computed(() => {
  const year = selectedYear.value || (new Date()).getFullYear()
  const month = selectedMonth.value || (new Date()).getMonth()
  const day = selectedDay.value || (new Date()).getDate()
  const hour = selectedHour.value || 0
  const minute = selectedMinute.value || 0
  const second = selectedSecond.value || 0
  return new Date(year, month, day, hour, minute, second)
})

const displayYear = computed(() => {
  const year = selectedYear.value || (new Date()).getFullYear()
  return formatDateParts(year, 1, 1, 0, 0, 0).date.split('-')[0]
})

const displayMonth = computed(() => {
  const month = selectedMonth.value || (new Date()).getMonth()
  return formatDateParts(1900, month, 1, 0, 0, 0).date.split('-')[1]
})

const displayDay = computed(() => {
  const day = selectedDay.value || (new Date()).getDate()
  return formatDateParts(1900, 1, day, 0, 0, 0).date.split('-')[2]
})

const displayHour = computed(() => {
  const hour = selectedHour.value || 0
  return formatDateParts(1900, 1, 1, hour, 0, 0).time.split(' ')[0].split(':')[0]
})

const displayMinute = computed(() => {
  const minute = selectedMinute.value || 0
  return formatDateParts(1900, 1, 1, 0, minute, 0).time.split(' ')[0].split(':')[1]
})

const displaySecond = computed(() => {
  const second = selectedSecond.value || 0
  return formatDateParts(1900, 1, 1, 0, 0, second).time.split(' ')[0].split(':')[2]
})

const displayTimePart = computed(() => {
  const hour = selectedHour.value || 0
  return formatDateParts(1900, 1, 1, hour, 0, 0).time.split(' ')[1]
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

  return {
    date: [year, month, day].join('-'),
    time
  }
}

function toggleSelect() {
  if (props.disabled) { return; }

  if (toggleState.value === 'collapsed') {
    toggleState.value = 'expanded'
    showYearPicker.value = true
    if (selectedYear.value) { showMonthPicker.value = true }
    if (selectedMonth.value) { showDayPicker.value = true }
    if (selectedDay.value) { showHourPicker.value = true }
    if (selectedHour.value) { showMinutePicker.value = true }
    if (selectedMinute.value) { showSecondPicker.value = true }
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
  if (selectedYear.value) {
    const yearRef = yearRefs.value[years.indexOf(selectedYear.value)]
    yearOptions.value.scrollTop = yearRef.offsetTop
  }

  if (selectedMonth.value) {
    const monthRef = monthRefs.value[selectedMonth.value]
    monthOptions.value.scrollTop = monthRef.offsetTop
  }

  if (selectedDay.value) {
    const dayRef = dayRefs.value[days.value.indexOf(selectedDay.value)]
    dayOptions.value.scrollTop = dayRef.offsetTop
  }

  if (selectedHour.value) {
    const hourRef = hourRefs.value[hours.indexOf(selectedHour.value)]
    hourOptions.value.scrollTop = hourRef.offsetTop
  }

  if (selectedMinute.value) {
    const minuteRef = minuteRefs.value[minutes.indexOf(selectedMinute.value)]
    minuteOptions.value.scrollTop = minuteRef.offsetTop
  }

  if (selectedSecond.value) {
    const secondRef = secondRefs.value[seconds.indexOf(selectedSecond.value)]
    secondOptions.value.scrollTop = secondRef.offsetTop
  }
}

watch([selectedYear, selectedMonth, selectedDay, selectedHour, selectedMinute, selectedSecond], () => {
  scrollOptionsIntoView()
})

function selectYear(val) {
  selectedYear.value = val
  selectedMonth.value = 0
  selectedDay.value = 1
  selectedHour.value = 0
  selectedMinute.value = 0
  selectedSecond.value = 0
  showMonthPicker.value = true
  showDayPicker.value = false
  showHourPicker.value = false
  showMinutePicker.value = false
  showSecondPicker.value = false
}

function selectMonth(val) {
  selectedMonth.value = val
  selectedDay.value = 1
  selectedHour.value = 0
  selectedMinute.value = 0
  selectedSecond.value = 0
  showDayPicker.value = true
  showHourPicker.value = false
  showMinutePicker.value = false
  showSecondPicker.value = false
}

function selectDay(val) {
  selectedDay.value = val
  selectedHour.value = 0
  selectedMinute.value = 0
  selectedSecond.value = 0

  if (props.displayTime) {
    showHourPicker.value = true
    showMinutePicker.value = false
    showSecondPicker.value = false
  } else {
    showYearPicker.value = false
    showMonthPicker.value = false
    showDayPicker.value = false
    emit('update:modelValue', computedSelectedDate)
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
}

function selectSecond(val) {
  toggleState.value = 'collapsed'
  selectedSecond.value = val
  showYearPicker.value = false
  showMonthPicker.value = false
  showDayPicker.value = false
  showHourPicker.value = false
  showMinutePicker.value = false
  showSecondPicker.value = false
  emit('update:modelValue', computedSelectedDate)
}

function initDateFromModelValue() {
  const initDate = props.modelValue || (new Date())
  selectYear(initDate.getFullYear())
  selectMonth(initDate.getMonth())
  selectDay(initDate.getDate())

  if (props.displayTime) {
    selectHour(initDate.getHours())
    selectMinute(initDate.getMinutes())
    selectSecond(initDate.getSeconds())
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

  if (props.displayTime) {
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
          <input disabled :value="displayYear">
          <input disabled :value="displayMonth">
          <input disabled :value="displayDay">
          <input v-if="displayTime" disabled :value="displayHour">
          <input v-if="displayTime" disabled :value="displayMinute">
          <input v-if="displayTime" disabled :value="displaySecond">
          <input v-if="displayTime && hour12" disabled :value="displayTimePart">
        </div>

        <div class="toggle">
          <i class="fa-solid fa-calendar-days"></i>
        </div>
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

.input-field .picker {
  position: absolute;
  top: -100px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-soft);
  color: var(--color-text);
  z-index: 99;
  width: 100px;
}

.input-control .input-field .year.picker {
  left: 200px;
}

.input-control.display-time .input-field .year.picker {
  left: 400px;
}

.input-field .month.picker {
  left: 300px;
}

.input-control.display-time .input-field .month.picker {
  left: 500px;
}

.input-field .day.picker {
  left: 400px;
}

.input-control.display-time .input-field .day.picker {
  left: 600px;
}

.input-control.display-time .input-field .hour.picker {
  left: 700px;
}

.input-control.display-time .input-field .minute.picker {
  left: 800px;
}

.input-control.display-time .input-field .second.picker {
  left: 900px;
}

.input-field.expanded .picker.show {
  display: inline-block;
}

.input-field .picker.hide {
  display: none;
}

.input-field .picker .title {
  padding: 4px;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
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
