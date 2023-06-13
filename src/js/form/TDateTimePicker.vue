<script setup>
import { onMounted, computed, ref, watch } from 'vue'

import TButton from './TButton.vue'

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
    return new Date(today.getFullYear() - 100, 0, 1)
  }
})

const maxDate = computed(() => {
  if (notEmpty(props.max)) {
    return props.max
  } else {
    return new Date(today.getFullYear() + 100, 11, 31)
  }
})

const years = computed(() => {
  return [
    ...Array(1 + maxDate.value.getFullYear() - minDate.value.getFullYear()).keys()
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

function daysInMonth(year, month) {
  const monthStart = new Date(year, month, 1)
  const monthEnd = new Date(monthStart)
  monthEnd.setMonth(monthEnd.getMonth() + 1)
  monthEnd.setDate(monthEnd.getDate() - 1)

  const dayOfWeek = monthStart.getDay()
  const daysPadding = []

  if (props.mondayStart) {
    if (dayOfWeek === 0) {
      daysPadding.push(Array.from(new Array(6)))
    } else {
      daysPadding.push(Array.from(new Array(dayOfWeek - 1)))
    }
  } else {
    daysPadding.push(Array.from(new Array(dayOfWeek)))
  }

  const displayDays = Array.from(Array(monthEnd.getDate())).map((_, i) => (i + 1))
  return daysPadding.concat(displayDays).flat()
}

const daysOfWeekSunStart = [
  'S',
  'M',
  'T',
  'W',
  'T',
  'F',
  'S'
]

const daysOfWeekMonStart = [
  'M',
  'T',
  'W',
  'T',
  'F',
  'S',
  'S'
]

const daysOfWeek = computed(() => {
  if (props.mondayStart) {
    return daysOfWeekMonStart;
  } else {
    return daysOfWeekSunStart;
  }
})

const days = ref(Array.from(Array(31)).map((_v, i) => (i + 1)))
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
  },
  mondayStart: {
    type: Boolean,
    default: true
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

const showDayPickers = ref(false)
const showYearPicker = ref(false)
const showMonthPicker = ref(false)
const showDayPicker = ref(false)

const showTimePickers = ref(false)
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
  return `hour picker show`
})

const computedMinutePickerClass = computed(() => {
  return `minute picker show`
})

const computedSecondPickerClass = computed(() => {
  return `second picker show`
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

const titleDate = computed(() => {
  const parts = []

  if (notEmpty(selectedYear.value)) {
    parts.unshift(selectedYear.value)
  }

  if (showDayPickers.value) {
    if (showDayPicker.value) {
      if (notEmpty(selectedMonth.value)) {
        parts.unshift(months[selectedMonth.value])
      }
    }
  } else if (showTimePickers.value) {
    if (notEmpty(selectedMonth.value)) {
      parts.unshift(months[selectedMonth.value])
    }

    if (notEmpty(selectedDay.value)) {
      parts.unshift(selectedDay.value)
    }
  }

  return parts.join(' ')
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

    if (isEmpty(selectedYear.value)) {
      showDayPickers.value = true
      showYearPicker.value = true
    }
    else if (isEmpty(selectedMonth.value)) {
      showDayPickers.value = true
      showMonthPicker.value = true
    }
    else if (!props.displayTime) {
      showDayPickers.value = true
      showDayPicker.value = true
    } else {
      showTimePickers.value = true
    }
  } else {
    toggleState.value = 'collapsed'
    showYearPicker.value = false
    showMonthPicker.value = false
    showDayPicker.value = false

    showDayPickers.value = false
    showTimePickers.value = false
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
  const now = new Date()

  const className = []
  className.push(`option`)

  if (val === selectedDay.value) {
    className.push(`selected`)
  }

  if (isEmpty(val)) {
    className.push(`disabled`)
  }

  if (
    notEmpty(val) &&
    selectedYear.value === now.getFullYear() &&
    selectedMonth.value === now.getMonth() &&
    val === now.getDate()
  ) {
    className.push(`today`)
  }

  return className.join(' ')
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
  scrollYearOptionsIntoView()

  if (Object.is(props.displayTime, false)) { return }

  scrollHourOptionsIntoView()
  scrollMinuteOptionsIntoView()
  scrollSecondOptionsIntoView()
}

function scrollYearOptionsIntoView() {
  let yearRef = null
  if (notEmpty(selectedYear.value)) {
    yearRef = yearRefs.value[years.value.indexOf(selectedYear.value)]
  } else if (today < maxDate.value) {
    yearRef = yearRefs.value[years.value.indexOf(today.getFullYear())]
  } else {
    yearRef = yearRefs.value[years.value.indexOf(minDate.value.getFullYear())]
  }
  yearOptions.value.scrollTop = yearRef.offsetTop - 96;
}

function scrollHourOptionsIntoView() {
  if (Object.is(props.displayTime, false)) { return }

  let hourRef = null
  if (notEmpty(selectedHour.value)) {
    hourRef = hourRefs.value[hours.indexOf(selectedHour.value)]
  } else {
    hourRef = hourRefs.value[0]
  }
  hourOptions.value.scrollTop = hourRef.offsetTop
}

function scrollMinuteOptionsIntoView() {
  if (Object.is(props.displayTime, false)) { return }

  let minuteRef = null
  if (notEmpty(selectedMinute.value)) {
    minuteRef = minuteRefs.value[minutes.indexOf(selectedMinute.value)]
  } else {
    minuteRef = minuteRefs.value[0]
  }
  minuteOptions.value.scrollTop = minuteRef.offsetTop
}

function scrollSecondOptionsIntoView() {
  if (Object.is(props.displayTime, false)) { return }

  let secondRef = null
  if (notEmpty(selectedSecond.value)) {
    secondRef = secondRefs.value[seconds.indexOf(selectedSecond.value)]
  } else {
    secondRef = secondRefs.value[0]
  }
  secondOptions.value.scrollTop = secondRef.offsetTop
}

watch(selectedYear, () => {
  scrollYearOptionsIntoView()
})

watch(selectedHour, () => {
  scrollHourOptionsIntoView()
})

watch(selectedMinute, () => {
  scrollMinuteOptionsIntoView()
})

watch(selectedSecond, () => {
  scrollSecondOptionsIntoView()
})

const allowShortcut = computed(() => {
  return showMonthPicker.value || showDayPicker.value
})

function shortcutToday() {
  const now = new Date()
  if (now < minDate.value || now > maxDate.value) { return }

  selectYear(now.getFullYear())
  selectMonth(now.getMonth())
  selectDay(now.getDate())

  if (props.displayTime) {
    selectHour(now.getHours())
    selectMinute(now.getMinutes())
    selectSecond(now.getSeconds())
  }
}

function shortcutLeft() {
  if (showMonthPicker.value) {
    if (selectedYear.value === minDate.value.getFullYear()) { return }

    selectedYear.value = selectedYear.value - 1
  } else if (showDayPicker.value) {
    const current = new Date(selectedYear.value, selectedMonth.value, selectedDay.value || 1)
    current.setMonth(current.getMonth() - 1)
    selectedYear.value = current.getFullYear()
    selectedMonth.value = current.getMonth()
    days.value = daysInMonth(selectedYear.value, selectedMonth.value)
  }
}

function shortcutRight() {
  if (showMonthPicker.value) {
    if (selectedYear.value === maxDate.value.getFullYear()) { return }

    selectedYear.value = selectedYear.value + 1
  } else if (showDayPicker.value) {
    const current = new Date(selectedYear.value, selectedMonth.value, selectedDay.value || 1)
    current.setMonth(current.getMonth() + 1)
    selectedYear.value = current.getFullYear()
    selectedMonth.value = current.getMonth()
    days.value = daysInMonth(selectedYear.value, selectedMonth.value)
  }
}

const shortcutTodayStyle = computed(() => {
  const now = new Date()
  if (now < minDate.value || now > maxDate.value) {
    return `shortcut-toggle hide`
  } else {
    return `shortcut-toggle show`
  }
})

const shortcutLeftStyle = computed(() => {
  if (showMonthPicker.value) {
    if (selectedYear.value > minDate.value.getFullYear()) {
      return `shortcut-toggle show`
    } else {
      return `shortcut-toggle hide`
    }
  } else if (showDayPicker.value) {
    const current = new Date(selectedYear.value, selectedMonth.value, selectedDay.value || 1)
    current.setMonth(current.getMonth() - 1)
    if (current >= minDate.value) {
      return `shortcut-toggle show`
    } else {
      return `shortcut-toggle hide`
    }
  } else {
    return `shortcut-toggle hide`
  }
})

const shortcutRightStyle = computed(() => {
  if (showMonthPicker.value) {
    if (selectedYear.value < maxDate.value.getFullYear()) {
      return `shortcut-toggle show`
    } else {
      return `shortcut-toggle hide`
    }
  } else if (showDayPicker.value) {
    const current = new Date(selectedYear.value, selectedMonth.value, selectedDay.value || 1)
    current.setMonth(current.getMonth() + 1)
    if (current < maxDate.value) {
      return `shortcut-toggle show`
    } else {
      return `shortcut-toggle hide`
    }
  } else {
    return `shortcut-toggle hide`
  }
})

function selectYear(val) {
  selectedYear.value = val
  showYearPicker.value = false
  showMonthPicker.value = true
}

function selectMonth(val) {
  selectedMonth.value = val
  days.value = daysInMonth(selectedYear.value, selectedMonth.value)
  showMonthPicker.value = false
  showDayPicker.value = true
}

function selectDay(val) {
  if (isEmpty(val)) { return }

  selectedDay.value = val

  if (Object.is(props.displayTime, true)) {
    showDayPickers.value = false
    showTimePickers.value = true
  } else {
    confirmDate()
  }
}

function goToPrevPart(currentPart) {
  if (currentPart === 'month') {
    showMonthPicker.value = false
    showYearPicker.value = true
  } else if (currentPart === 'day') {
    showDayPicker.value = false
    showMonthPicker.value = true
  } else if (currentPart === 'time') {
    showTimePickers.value = false
    showDayPickers.value = true
    showDayPicker.value = true
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

    showTimePickers.value = false
  }

  emit('update:modelValue', computedSelectedDate.value)
}

function closeSelect() {
  toggleState.value = 'collapsed'
  showYearPicker.value = false
  showMonthPicker.value = false
  showDayPicker.value = false

  showTimePickers.value = false

  initDateFromModelValue()
}

const confirmReady = computed(() => {
  return (Object.is(props.displayTime, true) && notEmpty(computedSelectedDate.value)) ||
            notEmpty(computedSelectedDate.value)
})

function confirmDate() {
  toggleState.value = 'collapsed'
  showDayPickers.value = false
  showTimePickers.value = false

  if (notEmpty(computedSelectedDate.value)) {
    emit('update:modelValue', computedSelectedDate.value)
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
      <div class="wrapper">
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
          tabindex="0"
          class="clean-toggle"
          @click="resetField"
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
      </div> <!-- wrapper -->

      <div
        v-show="showDayPickers"
        class="day pickers"
      >
        <div
          class="close-toggle"
          @click="closeSelect"
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </div>

        <div
          :class="computedYearPickerClass"
          ref="yearPicker"
        >
          <div class="title"></div>

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
            </div>
          </div>
        </div> <!-- yearPicker -->

        <div
          :class="computedMonthPickerClass"
          ref="monthPicker"
        >
          <div
            class="title"
            @click="goToPrevPart('month')"
          >{{ titleDate }}</div>

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
            </div>
          </div>
        </div> <!-- monthPicker -->

        <div
          :class="computedDayPickerClass"
          ref="dayPicker"
        >
          <div
            class="title"
            @click="goToPrevPart('day')"
          >{{ titleDate }}</div>

          <div
            class="options"
            ref="dayOptions"
          >
            <div
              v-for="(d, i) in daysOfWeek"
              :key="i"
              class="option heading"
            >
              {{ d }}
            </div>

            <div
              v-for="day in days"
              :class="setDayClass(day)"
              :value="day"
              ref="dayRefs"
              @click="selectDay(day)"
            >
              <div class="value">{{ day }}</div>
            </div>
          </div>
        </div> <!-- dayPicker -->

        <div
          v-if="allowShortcut"
          class="shortcuts"
        >
          <div
            :class="shortcutLeftStyle"
            @click="shortcutLeft"
          >
            <i class="fa-solid fa-caret-left"></i>
          </div>

          <div
            :class="shortcutTodayStyle"
            @click="shortcutToday"
          >
            <div class="value">Today</div>
          </div>

          <div
            :class="shortcutRightStyle"
            @click="shortcutRight"
          >
            <i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div> <!-- day.pickers -->

      <div
        v-show="showTimePickers"
        class="time pickers"
      >
        <div
          class="close-toggle"
          @click="closeSelect"
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </div>

        <div
          class="title"
          @click="goToPrevPart('time')"
        >{{ titleDate }}</div>

        <div class="wrapper">
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
              </div>
            </div>
          </div> <!-- hourPicker -->

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
              </div>
            </div>
          </div> <!-- minutePicker -->

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
          </div> <!-- secondPicker -->
        </div> <!-- wrapper -->

        <div
          class="shortcuts"
        >
          <TButton
            button-type="text"
            value="Confirm"
            icon="fa-solid fa-check"
            @click="confirmDate"
            @keydown.enter="confirmDate"
          />
        </div>
      </div> <!-- time.pickers -->
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

.input-control.disabled {
  width: 200px;
}

.input-control.display-time {
  width: 400px;
}

.input-control.disabled.display-time.hour24 {
  width: 350px;
}

.input-control.disabled.display-time,
.input-control.display-time.hour24 {
  width: 350px;
}

.input-label {
  font-size: 0.8rem;
  min-height: 20px;
}

.input-field {
  margin: 2px 0 8px 0;
}

.input-field .wrapper:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-field .wrapper .select input:hover {
  cursor: pointer;
}

.input-control.disabled .input-field .wrapper {
  grid-template-columns: auto;
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field .wrapper:hover,
.input-control.disabled .input-field .wrapper .select input:hover {
  cursor: not-allowed;
}

.input-field .wrapper {
  display: grid;
  grid-template-columns: auto 26px;
  align-items: center;
  margin: 2px 0 0 0;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.input-field .select {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  text-align: center;
  padding: 12px;
  box-sizing: border-box;
  height: 50px;
}

.input-field .select .selected {
  display: flex;
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
  background-color: transparent;
  color: var(--color-text);
  border: none;
}

.input-control.disabled .input-field .select .selected input {
  background-color: var(--color-background-mute);
}

.input-field .clean-toggle {
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
}

.input-field .clean-toggle:hover {
  cursor: pointer;
  color: var(--color-background);
}

.input-field .clean-toggle:focus {
  outline: 3px solid var(--color-border-hover);
}

.input-control.disabled .input-field .clean-toggle {
  display: none;
}

.input-field .close-toggle {
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 3;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.input-field.collapsed .close-toggle,
.input-field.collapsed .shortcut-toggle {
  display: none;
}

.input-field .pickers.time .close-toggle {
  top: 12px;
}

.input-field .close-toggle:hover {
  cursor: pointer;
  color: var(--color-border-hover);
}

.input-field .shortcuts {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0.5rem 0 0;
  width: 100%;
  background-color: var(--color-background-soft);
}

.input-field .pickers.time .shortcuts:deep(.button) {
  margin: 0;
}

.input-field .shortcut-toggle {
  display: grid;
  align-items: center;
  justify-content: center;
}

.input-field .shortcut-toggle,
.input-field .shortcut-toggle.show {
  visibility: visible;
}

.input-field .shortcut-toggle.hide {
  visibility: hidden;
}

.input-field .shortcut-toggle .value {
  font-size: 0.8rem;
  font-weight: 600;
}

.input-field .shortcut-toggle:hover {
  cursor: pointer;
  color: var(--color-border-hover);
}

.input-field .pickers {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 1rem;
  left: 200px;
  border-radius: 4px;
  background-color: var(--color-background-soft);
}

@media screen and (max-width: 796px) {
  .input-field .pickers,
  .input-control.display-time .input-field .pickers.time {
    left: 0 !important;
    top: 50px !important;
  }
}

.input-field .pickers.time .wrapper {
  border: none;
  display: flex;
  flex-direction: row;
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

.input-control.display-time .input-field .pickers,
.input-control.display-time .input-field .pickers.time {
  left: 350px;
}

.input-field .picker {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  width: 300px;
  height: 300px;
}

.input-field .pickers.time .picker {
  width: 100px;
}

.input-field .pickers.time .picker ::-webkit-scrollbar {
  width: 0;
}

.input-field.expanded .picker.show {
  display: flex;
}

.input-field.collapsed .pickers {
  display: none;
}

.input-field .picker.hide {
  display: none;
}

.input-field .picker .title,
.input-field .pickers.time .title {
  padding: 4px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
}

.input-field .picker.month .title:hover,
.input-field .picker.day .title:hover,
.input-field .pickers.time .title:hover {
  cursor: pointer;
  color: var(--color-border-hover);
  font-weight: 600;
}

.input-field .picker .options {
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  overflow-y: scroll;
}

.input-field .picker .option {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 0.8rem;
}

.input-field .picker.year .options {
  gap: 0.5rem;
}

.input-field .picker.year .options .option .value {
  display: grid;
  align-items: center;
  padding: 0.5rem 0;
  width: 80%;
  height: 100%;
}

.input-field .picker.year .options .option .value:hover,
.input-field .picker.year .options .option.selected .value {
  border-radius: 4px;
  background-color: var(--color-border-hover);
}

.input-field .picker.month .options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.input-field .picker.month .options .option .value {
  display: grid;
  align-items: center;
  width: 80%;
  height: 60%;
}

.input-field .picker.month .options .option .value:hover,
.input-field .picker.month .options .option.selected .value {
  border-radius: 4px;
  background-color: var(--color-border-hover);
}

.input-field .picker.day .options {
  display: grid;
  padding: 4px;
  grid-template-columns: repeat(7, minmax(42px, 1fr));
  overflow: hidden;
}

.input-field .picker.day .options .option .value {
  display: grid;
  align-items: center;
  width: 2rem;
  height: 2rem;
}

.input-field .picker.day .options .option .value:hover,
.input-field .picker.day .options .option.selected .value {
  border-radius: 50%;
  background-color: var(--color-border-hover);
}

.input-field .picker.day .option.heading {
  font-weight: 600;
}

.input-field .picker.day .option.today .value {
  border-radius: 50%;
  border: 2px solid var(--color-border);
}

.input-field .picker.day .option.today .value:hover {
  border: none;
}

.input-field .picker.day .option.disabled .value:hover {
  cursor: initial;
  background-color: transparent;
}

.input-field .picker .option.selected {
  color: var(--color-text);
}

.input-field .picker .option .value:hover {
  cursor: pointer;
  color: var(--color-text);
}

.input-field .pickers.time .picker .option {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.input-field .pickers.time .picker .option:hover {
  cursor: pointer;
  border-radius: 4px;
  background-color: var(--color-border-hover);
}

.input-field .pickers.time .picker .option.selected {
  border-radius: 4px;
  background-color: var(--color-border-hover);
}

.input-field .pickers.time .picker .option .value {
  font-size: 0.8rem;
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
