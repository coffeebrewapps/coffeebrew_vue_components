<script setup>
import { onMounted, computed, ref } from 'vue'

import {
  TAlert,
  TConfirmDialog,
  TDialog,
  TButton,
  TCheckbox,
  TDatePicker,
  TDateRange,
  TDateTimePicker,
  TDateTimeRange,
  TFilePicker,
  TInput,
  TOption,
  TSelect,
  TSelectTable,
  TTextarea,
  TTable,
  TProgressBar
} from '@/src/index'

const theme = ref(true) // true: dark, false: light
const themeIcon = computed(() => {
  if (theme.value) {
    return `fa-solid fa-moon`;
  } else {
    return `fa-solid fa-sun`;
  }
})

function toggleTheme() {
  theme.value = !theme.value

  document.body.classList.toggle('dark', theme.value)
  document.body.classList.toggle('light', !theme.value)
}

const tInputModel = ref({
  username: '',
  name: '',
  email: 'lauren@email.com',
  description: '',
  password: '',
  amount: 0,
  noLabel: '',
})

const tTextareaModel = ref({
  paragraph1: '',
  paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quam nunc, vulputate a ipsum eget, fermentum facilisis turpis. In et mi dapibus, interdum dolor ut, volutpat turpis. In ut consectetur dolor. Curabitur sodales ipsum lacus, nec consectetur lacus vulputate id. Vestibulum ac suscipit massa, in vehicula urna. Pellentesque at tristique felis, a pellentesque dui. Vestibulum consectetur sit amet augue id commodo. Sed accumsan non lectus sed vulputate. Phasellus sed augue sed nulla placerat malesuada. Cras id sollicitudin risus, sed sagittis magna.',
  paragraph3: '',
  paragraph4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quam nunc, vulputate a ipsum eget, fermentum facilisis turpis. In et mi dapibus, interdum dolor ut, volutpat turpis. In ut consectetur dolor. Curabitur sodales ipsum lacus, nec consectetur lacus vulputate id. Vestibulum ac suscipit massa, in vehicula urna. Pellentesque at tristique felis, a pellentesque dui. Vestibulum consectetur sit amet augue id commodo. Sed accumsan non lectus sed vulputate. Phasellus sed augue sed nulla placerat malesuada. Cras id sollicitudin risus, sed sagittis magna.',
  paragraph5: 'This textarea field has no label',
})

const tSelectModel = ref({
  country1: '',
  country2: 'my',
  country3: '',
  country4: 'sg',
  country5: '',
  timezone1: '',
  timezone2: '',
})

const tSelectTableModel = ref({
  tags1: [],
  tags2: [],
  tags3: [{ value: 'company:company-abc', label: 'Company ABC' }],
  tags4: [{ value: 'company:company-abc', label: 'Company ABC' }, { value: 'activity:testing', label: 'Testing' }],
  tags5: [],
  tags6: [],
  tags7: [{ value: 'company:company-abc', label: 'Company ABC' }],
  tags8: [],
})

const tCheckboxModel = ref({
  subscribe: false,
  agree: false,
  selected: true,
  agree2: true,
})

const tDatePickerModel = ref({
  startDate: null,
  endDate: null,
  createdDate: (new Date()),
  historyDate: null,
  dateRange1: {
    start: (new Date(1920, 1, 2)),
    end: null
  },
  dateRange2: {
    start: (new Date(2023, 1, 2)),
    end: null
  },
  dateRange3: {
    start: (new Date(2023, 5, 2)),
    end: (new Date(2023, 6, 15))
  },
})

const tDateTimePickerModel = ref({
  startTime: (new Date(2023, 1, 2, 22, 5, 15)),
  endTime: null,
  updatedTime: (new Date()),
  timeRange1: {
    start: null,
    end: null
  },
  timeRange2: {
    start: (new Date(2023, 1, 2)),
    end: null
  },
  timeRange3: {
    start: (new Date(2023, 7, 15, 3, 46, 21)),
    end: (new Date(2023, 9, 6, 13, 23, 53))
  },
})

const tFilePickerModel = ref({
  file1: null,
  file2: null,
  file3: null,
  file4: null,
  file5: []
})

function loadFile4() {
  FakeAPI
    .loadFile('logo-white.png', 'image/png')
    .then((file) => {
      tFilePickerModel.value.file4 = file
    })
}

function loadFile5() {
  const promises = [
    FakeAPI.loadFile('logo-white.png', 'image/png'),
    FakeAPI.loadFile('banner-white.png', 'image/png'),
  ]

  Promise.all(promises)
    .then((files) => {
      tFilePickerModel.value.file5 = files
    })
}

const historyStartDate = ref(new Date(1900, 0, 1))
const historyEndDate = ref(new Date(2000, 11, 31))

const countryOptions = ref([
  { value: 'sg', label: 'Singapore' },
  { value: 'my', label: 'Malaysia' },
  { value: 'th', label: 'Thailand' },
  { value: 'vn', label: 'Vietnam' }
])

const timezoneOptions = computed(() => {
  return Intl.supportedValuesOf('timeZone').map((timezone) => {
    const timezoneLabel = timezone.replace(/_/g, ' ')
    return { value: timezone, label: timezoneLabel }
  })
})

const tagOptions = ref([
  { value: 'company:company-abc', label: 'Company ABC' },
  { value: 'company:company-xyz', label: 'Company XYZ' },
  { value: 'activity:implementation', label: 'Implementation' },
  { value: 'activity:testing', label: 'Testing' }
])

const hoursOptions = computed(() => {
  return Array.from(Array(25)).map((_, i) => {
    return { value: i, label: i }
  })
})

const tableData = ref({
  headers: [
    { key: 'startTime', label: 'Start Time' },
    { key: 'endTime', label: 'End Time' },
    { key: 'description', label: 'Description' },
    { key: 'hours', label: 'Hours' },
  ],
  data: [
    { startTime: new Date('2023-01-23T12:42:14'), endTime: new Date('2023-01-23T18:34:29'), description: 'Requirements', hours: 6 },
    { startTime: new Date('2023-01-24T08:23:57'), endTime: new Date('2023-01-24T16:27:18'), description: 'Implementation', hours: 8 },
    { startTime: new Date('2023-01-25T10:32:19'), endTime: new Date('2023-01-25T12:23:53'), description: 'Documentation', hours: 2 },
    { startTime: new Date('2023-01-25T13:32:58'), endTime: new Date('2023-01-25T19:28:43'), description: 'Implementation', hours: 6 },
    { startTime: new Date('2023-01-26T17:28:47'), endTime: new Date('2023-01-26T22:13:02'), description: 'Testing', hours: 5 },
    { startTime: new Date('2023-01-27T09:31:48'), endTime: null, description: 'Implemention', hours: null },
  ],
  tableActions: [
    {
      name: 'Add',
      icon: 'fa-solid fa-circle-plus fa-xl',
      click: function(data) {
        openAlertDialog(`Adding data to count: ${data.length}`)
      }
    },
    {
      name: 'Export',
      icon: 'fa-solid fa-file-arrow-down fa-xl',
      click: function(data) {
        openAlertDialog(`Export data count: ${data.length}`)
      }
    }
  ],
  actions: [
    {
      name: 'View',
      icon: 'fa-solid fa-magnifying-glass',
      click: function(row, index) {
        openDataDialog(row, index)
      }
    },
    {
      name: 'Edit',
      icon: 'fa-solid fa-pen-to-square',
      click: function(row, index) {
        openAlertDialog(`Row[${index}]: editing ${JSON.stringify(row)}`)
      }
    },
    {
      name: 'Delete',
      icon: 'fa-solid fa-trash-can',
      click: function(row, index) {
        openAlertDialog(`Row[${index}]: deleting ${JSON.stringify(row)}`)
      }
    }
  ]
})

const serverData = ref({
  headers: [
    { key: 'startTime', label: 'Start Time' },
    { key: 'endTime', label: 'End Time' },
    { key: 'description', label: 'Description' }
  ],
  data: [
    { startTime: '2023-01-23 12:42:14', endTime: '2023-01-23 18:34:29', description: 'Requirements' },
    { startTime: '2023-01-24 08:23:57', endTime: '2023-01-24 16:27:18', description: 'Implementation' },
    { startTime: '2023-01-25 10:32:19', endTime: '2023-01-25 12:23:53', description: 'Documentation' },
    { startTime: '2023-01-25 13:32:58', endTime: '2023-01-25 19:28:43', description: 'Implementation' },
    { startTime: '2023-01-26 17:28:47', endTime: '2023-01-26 22:13:02', description: 'Testing' },
    { startTime: '2023-01-23 12:42:14', endTime: '2023-01-23 18:34:29', description: 'Requirements' },
    { startTime: '2023-01-24 08:23:57', endTime: '2023-01-24 16:27:18', description: 'Implementation' },
    { startTime: '2023-01-25 10:32:19', endTime: '2023-01-25 12:23:53', description: 'Documentation' },
    { startTime: '2023-01-25 13:32:58', endTime: '2023-01-25 19:28:43', description: 'Implementation' },
    { startTime: '2023-01-26 17:28:47', endTime: '2023-01-26 22:13:02', description: 'Testing' },
    { startTime: '2023-01-23 12:42:14', endTime: '2023-01-23 18:34:29', description: 'Requirements' },
    { startTime: '2023-01-24 08:23:57', endTime: '2023-01-24 16:27:18', description: 'Implementation' },
    { startTime: '2023-01-25 10:32:19', endTime: '2023-01-25 12:23:53', description: 'Documentation' },
    { startTime: '2023-01-25 13:32:58', endTime: '2023-01-25 19:28:43', description: 'Implementation' },
    { startTime: '2023-01-26 17:28:47', endTime: '2023-01-26 22:13:02', description: 'Testing' },
    { startTime: '2023-01-23 12:42:14', endTime: '2023-01-23 18:34:29', description: 'Requirements' },
    { startTime: '2023-01-24 08:23:57', endTime: '2023-01-24 16:27:18', description: 'Implementation' },
    { startTime: '2023-01-25 10:32:19', endTime: '2023-01-25 12:23:53', description: 'Documentation' },
    { startTime: '2023-01-25 13:32:58', endTime: '2023-01-25 19:28:43', description: 'Implementation' },
    { startTime: '2023-01-26 17:28:47', endTime: '2023-01-26 22:13:02', description: 'Testing' },
    { startTime: '2023-01-23 12:42:14', endTime: '2023-01-23 18:34:29', description: 'Requirements' },
    { startTime: '2023-01-24 08:23:57', endTime: '2023-01-24 16:27:18', description: 'Implementation' },
    { startTime: '2023-01-25 10:32:19', endTime: '2023-01-25 12:23:53', description: 'Documentation' },
    { startTime: '2023-01-25 13:32:58', endTime: '2023-01-25 19:28:43', description: 'Implementation' },
    { startTime: '2023-01-26 17:28:47', endTime: '2023-01-26 22:13:02', description: 'Testing' },
    { startTime: '2023-01-27 09:31:48', endTime: null, description: 'Implemention' },
  ]
})

const tagsData = ref([
  { value: 'company:company-abc', label: 'Company ABC' },
  { value: 'company:company-xyz', label: 'Company XYZ' },
  { value: 'company:company-acme', label: 'Company ACME' },
  { value: 'activity:analysis', label: 'Analysis' },
  { value: 'activity:design', label: 'Design' },
  { value: 'activity:implementation', label: 'Implementation' },
  { value: 'activity:testing', label: 'Testing' },
  { value: 'activity:documentation', label: 'Documentation' },
  { value: 'admin:accounting', label: 'Accounting' }
])

const FakeAPI = {
  async fetchWorkLogs (offset, limit) {
    return new Promise(resolve => {
      setTimeout(() => {
        const items = serverData.value.data.slice(offset, limit + offset)
        resolve({ data: items, total: serverData.value.length })
      }, 500)
    })
  },

  async fetchTags (offset, limit) {
    return new Promise(resolve => {
      setTimeout(() => {
        const items = tagsData.value.slice(offset, limit + offset)
        resolve({ data: items, total: tagsData.value.length })
      }, 500)
    })
  },

  async loadFile (filename, mimeType) {
    return new Promise((resolve, reject) => {
      const rawData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3XecZFWdNvDnVq7qVJ27p3u6J0dgQGDIOIAMKCKsAXVNLL5r2JXXhGQJDogSVxBxTeyry+qq67q6qCBZhJE0OefQaTrHqq74/nG6JzAdKty65557nu/n059RZrrrN9Nd9z73hN8x0ul0GkRERKQVl+wCiIiIyHoMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBpiACAiItIQAwAREZGGGACIiIg0xABARESkIQYAIiIiDTEAEBERaYgBgIiISEMMAERERBryFPwVUglgpK/gL2MLLjcQKpddBRGRc8QiQGxYdhXWC4UBV2Fv0YUPAC4PkE4BQ10FfylbiI8CZXWyqyAiUl88AvTsE/cQnRRXF/zmD1g1BVBSI9KMDkZ6gKFO2VUQEaktEQN6Duh38w+VAyXVlryUdWsAymYAgRLLXk6qwU5guFt2FUREakomxJN/KiG7EmsFSoCyesteztpFgOFGwBey9CWlGejQZ+0DEZFZUklx80/GZVdiLV+RuEdayNoAYBhA+UzA47f0ZaXpbwWiA7KrICJSQzoF9B4AEqOyK7GWNwCUN4p7pIWs3wbocgMVTYDba/lLS9HXAsRGZFdBRGRv6TTQe1C/66XHJ+6JLrflLy2nD4DbK+0vbLl0GujZD8SjsishIrKvvhZgdEh2FdZye4CKZktW/E9EXiMgj1+EAEODXkTplJjT0m1Yi4goEwPt+k2XGi6gXO5ouNy7rzcIhBsAWDvvIUUqKUYCdFvYQkQ0lcFDwHCP7CqsZRjiAdgbkFqG/MfvQIk+jXOScT23thARTWSkR58mcYeNLYa3wY44+QEAEI0Piq1pfCBdIiZGAlJJ2ZUQEckT6Qf622VXYb2yesBfLLsKAHYJAIDofFRUIbsKa8SjYrVrOi27EiIi640OAn2tsquwXmmtrbri2icAAEBpHRAolV2FNWLDQN9BAAwBRKSReATobYF2177iKqCoUnYVx7BXAADEokAbzI1YIqppCiYiPSVGxRSobv39g2XiTBybsV8AsMnqSMvoOg9GRHpJxoDuffqtfwqUAOEZsquYkP0CAGCL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gJFeYKRP/O8kTy80ldsD+EuAQIlYpR8qEzd8LtgjygsDAJGp0kB0SISBaL/436ODom0xg8EUDMAfOupGf9SHNyi7OCJHYgAgsko8KtYRjA6Jj+ggEBsW/93pjYo8PnEj94XEk7s3KIbwx/9boIS99IksxgBAZAfpFBAfBeIjIgzEImPBYET892QMSMbHPhJASuJogtsDuL2A2zf269s+PH5xkx+/wXuDXIhHZEMMAEQqSqePCgRj4WD8v41LJY4sUnz777k9R564DZfYH3/497zH/7mjb/bcRkfkCAwAREREGuKkGxERkYYYAIiIiDTEAEBERKQhBgAiIiINMQAQERFpiAGAiIhIQwwAREREGmIAICIi0hADABERkYYYAIiIiDTEAEBERKQhBgAiIiINMQAQERFpiAGAiIhIQwwAREREGmIAICIi0hADABERkYYYAIiIiDTEAEBERKQhBgAiIiINMQAQERFpiAGAiIhIQwwAREREGmIAICIi0hADABERkYYYAIiIiDTEAEBERKQhBgAiIiINMQAQERFpiAGAiIhIQwwAREREGmIAICIi0hADABERkYYYAIiIiDT0/wGmuZLbUaSvxgAAAABJRU5ErkJggg=='

      fetch(rawData)
        .then((result) => {
          result.blob()
            .then((blob) => {
              resolve(new File([blob], filename, { type: mimeType }))
            })
            .catch((error) => {
              console.error(error)
              reject(error)
            })
        })
        .catch((error) => {
          console.error(error)
          reject(error)
        })
    })
  }
}

const offset = ref(0)
const limit = ref(3)
const tagsOffset = ref(0)
const tagsLimit = ref(5)
const paginatedData = ref([])
const paginatedTags = ref([])
const serverDataLoading = ref(true)
const tagsDataLoading = ref(true)
const confirmDialog = ref(false)
const dataDialog = ref(false)
const currentRow = ref()
const currentIndex = ref()
const alertDialog = ref(false)
const alertContent = ref('')

const computedDataDialogTitle = computed(() => {
  return `View row ${currentIndex.value + 1}`
})

const alertWidth = computed(() => {
  const contentLength = alertContent.value.length || 1
  const contentLines = contentLength / 25
  return 25 * 16
})

const alertHeight = computed(() => {
  const contentLength = alertContent.value.length || 1
  const contentLines = Math.ceil(contentLength / 25)

  if (contentLines < 250) {
    return 250
  } else {
    return contentLines * 16
  }
})

function fetchServerData() {
  serverDataLoading.value = true
  FakeAPI
    .fetchWorkLogs(offset.value, limit.value)
    .then(({ data, total }) => {
      paginatedData.value = data
      serverDataLoading.value = false
    })
}

function fetchTagsData() {
  tagsDataLoading.value = true
  FakeAPI
    .fetchTags(tagsOffset.value, tagsLimit.value)
    .then(({ data, total }) => {
      paginatedTags.value = data
      tagsDataLoading.value = false
    })
}

function hello(text) {
  openAlertDialog(text)
}

function offsetChange(val) {
  offset.value = val
}

const worklogsPagination = computed(() => {
  return { offset: offset.value, limit: 5, client: false }
})

function loadDataOnOffsetChange(val) {
  offsetChange(val)
  fetchServerData()
}

const tagsPagination = computed(() => {
  return { offset: tagsOffset.value, limit: 5, client: false }
})

function loadTagsOnOffsetChange(val) {
  tagsOffset.value = val
  fetchTagsData()
}

function openConfirmDialog() {
  confirmDialog.value = true
}

function dialogOnConfirm(text) {
  openAlertDialog(`confirm ${text}`)
}

function dialogOnCancel(text) {
  openAlertDialog(`cancel ${text}`)
}

function openDataDialog(row, index) {
  dataDialog.value = true
  currentRow.value = row
  currentIndex.value = index
}

function openAlertDialog(text) {
  alertDialog.value = true
  alertContent.value = text
}

function formatFileModelForDisplay(model) {
  return Object.entries(model).reduce((o, [key, val]) => {
    if (val) {
      if (Array.isArray(val)) {
        o[key] = val.map((v) => {
          return {
            filename: v.name,
            mimetype: v.type,
          }
        })
      } else {
        o[key] = {
          filename: val.name,
          mimetype: val.type,
        }
      }
    } else {
      o[key] = null
    }
    return o
  }, {})
}

onMounted(() => {
  loadDataOnOffsetChange(0)
  loadTagsOnOffsetChange(0)
  loadFile4()
  loadFile5()
})
</script>

<template>
  <div class="content-container">
    <div class="top-nav">
      <h1>Demo Form Elements</h1>

      <div class="actions">
        <TButton
          button-type="icon"
          :icon="themeIcon"
          @click="toggleTheme"
        />
      </div>
    </div>

    <div class="page-container">
      <div class="form-container">
        <div class="form">

          <div class="fields-container-single">
            <h3>TProgressBar</h3>

            <div class="fields">
              <TProgressBar/>
              <TProgressBar :speed="500" :bidirection="false"/>
              <TProgressBar :speed="500" :bidirection="false" :indefinite="false"/>
            </div>
          </div>

          <div class="fields-container">
            <h3>Tags</h3>

            <div class="fields">
              <div class="tag">
                <div class="category">tag</div>
                <div class="divider">:</div>
                <div class="name">default</div>
              </div>

              <div class="tag sm">
                <div class="category">tag</div>
                <div class="divider">:</div>
                <div class="name">small</div>
              </div>

              <div class="tag md">
                <div class="category">tag</div>
                <div class="divider">:</div>
                <div class="name">medium</div>
              </div>

              <div class="tag lg">
                <div class="category">tag</div>
                <div class="divider">:</div>
                <div class="name">large</div>
              </div>
            </div>
          </div>

          <div class="fields-container">
            <h3>Hyperlink</h3>

            <div class="fields">
              <a href="#" @click="openConfirmDialog()">This is a Hyperlink to open Confirm Dialog</a>

              <TConfirmDialog
                title="Delete Chart"
                primary-text="Are you sure you want to delete this chart?"
                secondary-text="Monthly working hours by company (2023)"
                v-model="confirmDialog"
                :height="300"
                :width="500"
                @confirm="dialogOnConfirm('delete chart')"
                @cancel="dialogOnCancel('delete chart')"
              />
            </div>
          </div>

          <div class="fields-container">
            <h3 class="title">
              TInput <i class="fa-solid fa-eye"></i>

              <div class="data">
                {{ tInputModel }}
              </div>
            </h3>

            <div class="fields">
              <TInput v-model="tInputModel.username" type="text" label="Username"/>
              <TInput v-model="tInputModel.name" type="text" size="md" label="Name"/>
              <TInput v-model="tInputModel.description" type="text" size="lg" label="Description"/>
              <TInput v-model="tInputModel.amount" type="number" size="sm" label="Invoice Billable Amount"/>
              <TInput v-model="tInputModel.noLabel" type="text" size="sm" label=""/>
              <TInput v-model="tInputModel.password" type="password" label="Password (error message)" error-message="Min 8 characters"/>
              <TInput v-model="tInputModel.email" type="text" size="lg" label="Email (disabled)" :disabled="true"/>
            </div>
          </div>

          <div class="fields-container">
            <h3 class="title">
              TTextarea <i class="fa-solid fa-eye"></i>

              <div class="data">
                {{ tTextareaModel }}
              </div>
            </h3>

            <div class="fields">
              <TTextarea v-model="tTextareaModel.paragraph1" label="Paragraph"/>
              <TTextarea v-model="tTextareaModel.paragraph2" label="Paragraph (custom rows and cols)" :rows="20" :cols="10"/>
              <TTextarea v-model="tTextareaModel.paragraph3" label="Paragraph (error message)" error-message="Field is required!"/>
              <TTextarea v-model="tTextareaModel.paragraph4" label="Paragraph (disabled)" :disabled="true"/>
              <TTextarea v-model="tTextareaModel.paragraph5" label=""/>
            </div>
          </div>

          <div class="fields-container">
            <h3>TButton</h3>

            <div class="fields">
              <TButton button-type="text" value="Very Long Button" icon="fa-sharp fa-solid fa-circle-down" @click="hello('Hello World!')"/>
              <TButton button-type="text" size="lg" value="Very Long Long Button with Icon" icon="fa-sharp fa-solid fa-circle-down"/>

              <TButton button-type="icon" icon="fa-sharp fa-solid fa-circle-down"/>
            </div>
          </div>

          <div class="fields-container">
            <h3 class="title">
              TSelect <i class="fa-solid fa-eye"></i>

              <div class="data">
                {{ tSelectModel }}
              </div>
            </h3>

            <div class="fields">
              <TSelect v-model="tSelectModel.country1" label="Country" name="country" id="country-1" :options="countryOptions"/>
              <TSelect v-model="tSelectModel.country2" size="sm" label="Country to select" name="country" id="country-2" :options="countryOptions"/>
              <TSelect v-model="tSelectModel.country3" size="lg" label="Country (error message)" name="country" id="country-3" :options="countryOptions" error-message="Min 8 characters"/>
              <TSelect v-model="tSelectModel.country4" label="Country (disabled)" name="country" id="country-4" :options="countryOptions" :disabled="true"/>
              <TSelect v-model="tSelectModel.country5" size="sm" label="" name="country" id="country-5" :options="countryOptions"/>
            </div>

            <div class="fields">
              <TSelect v-model="tSelectModel.timezone1" size="lg" label="Timezone (long list)" name="timezone" id="timezone-1" :options="timezoneOptions" :searchable="true"/>
              <TSelect v-model="tSelectModel.timezone1" size="lg" label="" name="timezone" id="timezone-1" :options="timezoneOptions" :searchable="true"/>
            </div>
          </div>

          <div class="fields-container">
            <h3 class="title">
              TSelectTable <i class="fa-solid fa-eye"></i>

              <div class="data">
                {{ tSelectTableModel }}
              </div>
            </h3>

            <div class="fields">
              <TSelectTable v-model="tSelectTableModel.tags1" label="Tags" name="tags1" :options="tagOptions"/>
              <TSelectTable v-model="tSelectTableModel.tags2" label="" name="tags2" :options="tagOptions"/>
              <TSelectTable v-model="tSelectTableModel.tags3" label="Tags (pre-selected)" name="tags2" :options="tagOptions"/>
              <TSelectTable v-model="tSelectTableModel.tags4" label="Tags (multiple)" name="tags3" :options="tagOptions"/>
            </div>

            <div class="fields">
              <TSelectTable
                v-model="tSelectTableModel.tags5"
                label="Tags (server paginated)"
                name="tags5"
                size="lg"
                :options="paginatedTags"
                :options-length="tagsData.length"
                :options-loading="tagsDataLoading"
                :pagination="tagsPagination"
                @offset-change="loadTagsOnOffsetChange"
              />
              <TSelectTable
                v-model="tSelectTableModel.tags6"
                label="Tags select (single server paginated)"
                name="tags6"
                :multiple="false"
                :options="paginatedTags"
                :options-length="tagsData.length"
                :options-loading="tagsDataLoading"
                :pagination="tagsPagination"
                @offset-change="loadTagsOnOffsetChange"
              />
            </div>

            <div class="fields">
              <TSelectTable v-model="tSelectTableModel.tags7" label="Tags (disabled)" name="tags6" :options="tagOptions" :disabled="true"/>
              <TSelectTable v-model="tSelectTableModel.tags8" label="Tags (error message)" name="tags7" :options="tagOptions" error-message="Field is required!"/>
            </div>
          </div>

          <div class="fields-container">
            <h3 class="title">
              TCheckbox <i class="fa-solid fa-eye"></i>

              <div class="data">
                {{ tCheckboxModel }}
              </div>
            </h3>

            <div class="fields">
              <TCheckbox v-model="tCheckboxModel.subscribe" label="Subscribe newsletter"/>
              <TCheckbox v-model="tCheckboxModel.agree" label="Agree T&C" error-message="Required!"/>
              <TCheckbox v-model="tCheckboxModel.selected" label="Selected"/>
              <TCheckbox v-model="tCheckboxModel.agree2" label="Agree (disabled)" :disabled="true"/>
            </div>
          </div>

          <div class="fields-container">
            <h3 class="title">
              TDatePicker <i class="fa-solid fa-eye"></i>

              <div class="data">
                {{ tDatePickerModel }}
              </div>
            </h3>

            <div class="fields">
              <TDatePicker v-model="tDatePickerModel.startDate" label="Start Date" align-pickers="bottom"/>
              <TDatePicker v-model="tDatePickerModel.endDate" label="End Date" error-message="Cannot be earlier than start date!" align-pickers="top"/>
              <TDatePicker v-model="tDatePickerModel.createdDate" label="Created Date (disabled)" :disabled="true"/>
              <TDatePicker v-model="tDatePickerModel.historyDate" label="History Date" :min="historyStartDate" :max="historyEndDate"/>

              <TDateRange
                v-model:start-date="tDatePickerModel.dateRange1.start"
                v-model:end-date="tDatePickerModel.dateRange1.end"
                label="Date Range"
                :start-min="historyStartDate"
                :start-max="historyEndDate"
                :end-min="historyStartDate"
                :end-max="historyEndDate"
              />

              <TDateRange
                v-model:start-date="tDatePickerModel.dateRange2.start"
                v-model:end-date="tDatePickerModel.dateRange2.end"
                label="Date Range (error message)"
                error-message="End date cannot be earlier than start date!"
              />

              <TDateRange
                v-model:start-date="tDatePickerModel.dateRange3.start"
                v-model:end-date="tDatePickerModel.dateRange3.end"
                label="Date Range (disabled)"
                :disabled="true"
              />
            </div>
          </div>

          <div class="fields-container">
            <h3 class="title">
              TDateTimePicker <i class="fa-solid fa-eye"></i>

              <div class="data">
                {{ tDateTimePickerModel }}
              </div>
            </h3>

            <div class="fields">
              <TDateTimePicker v-model="tDateTimePickerModel.startTime" label="Start Time" align-pickers="top"/>
              <TDateTimePicker v-model="tDateTimePickerModel.endTime" name="log" label="End Time" :hour12="true" :min="historyStartDate" :max="historyEndDate" align-pickers="bottom"/>
              <TDateTimePicker v-model="tDateTimePickerModel.updatedTime" label="Updated Time" :hour12="true" :disabled="true"/>

              <TDateTimeRange
                v-model:start-time="tDateTimePickerModel.timeRange1.start"
                v-model:end-time="tDateTimePickerModel.timeRange1.end"
                label="Time Range"
              />

              <TDateTimeRange
                v-model:start-time="tDateTimePickerModel.timeRange2.start"
                v-model:end-time="tDateTimePickerModel.timeRange2.end"
                label="Time Range (error message)"
                error-message="End time cannot be earlier than start time!"
              />

              <TDateTimeRange
                v-model:start-time="tDateTimePickerModel.timeRange3.start"
                v-model:end-time="tDateTimePickerModel.timeRange3.end"
                label="Time Range (disabled)"
                :disabled="true"
              />

              <TDateTimeRange
                v-model:start-time="tDateTimePickerModel.timeRange3.start"
                v-model:end-time="tDateTimePickerModel.timeRange3.end"
                label="Time Range (AM/PM)"
                :hour12="true"
              />
            </div>
          </div>

          <div class="fields-container">
            <h3 class="title">
              TFilePicker <i class="fa-solid fa-eye"></i>

              <div class="data">
                {{ JSON.stringify(formatFileModelForDisplay(tFilePickerModel), false, 4) }}
              </div>
            </h3>

            <div class="fields">
              <TFilePicker v-model="tFilePickerModel.file1" size="md" label="File 1"/>
              <TFilePicker v-model="tFilePickerModel.file2" label="File 2 (disabled)" :disabled="true"/>
              <TFilePicker v-model="tFilePickerModel.file3" size="lg" label="File 3"/>
              <TFilePicker v-model="tFilePickerModel.file4" size="md" label="Pre-selected"/>
              <TFilePicker v-model="tFilePickerModel.file5" size="lg" label="Multiple" :multiple="true" :accept="'image/*'"/>
            </div>
          </div>

          <div class="fields-container-single">
            <h3>TTable</h3>

            <div class="fields">
              <TTable name="Work Logs (empty)" :headers="tableData.headers" :data="[]" no-data-text="Currently no data"/>
              <TTable :headers="tableData.headers" :data="tableData.data" />
              <TTable name="Work Logs" :headers="tableData.headers" :data="tableData.data" :actions="tableData.actions" :table-actions="tableData.tableActions" @offset-change="offsetChange"/>
              <TTable name="Work Logs (out of bound)" :headers="tableData.headers" :data="tableData.data" :pagination="{ offset: 0, limit: 3, client: true }"/>
              <TTable name="Work Logs (server pagination)" :loading="serverDataLoading" :headers="serverData.headers" :data="paginatedData" :pagination="worklogsPagination" :total-data="serverData.data.length" @offset-change="loadDataOnOffsetChange" />

              <TTable
                name="Work Logs (server pagination custom loading bar)"
                :loading="serverDataLoading"
                :headers="serverData.headers"
                :data="paginatedData"
                :pagination="worklogsPagination"
                :total-data="serverData.data.length"
                @offset-change="loadDataOnOffsetChange"
              >
                <template #progress-bar="{ headers, actions, span }">
                  <th :colspan="span">
                    <TProgressBar :speed="100" :bidrection="false" />
                  </th>
                </template>
              </TTable>

              <TTable
                name="Work Logs (custom templates)"
                :headers="tableData.headers"
                :data="tableData.data"
                :actions="tableData.actions"
                :table-actions="tableData.tableActions"
                @offset-change="offsetChange"
              >
                <template #table-name="{ name }">
                  Table: {{ name }}
                </template>

                <template #table-action="{ action, data }">
                  {{ action.name }}
                </template>

                <template #header-row="{ headers, actions }">
                  <th
                    style="width: 30px;"
                    class="col"
                  >
                    #
                  </th>
                  <th
                    v-for="(header, i) in headers"
                    class="col"
                  >
                    {{ header.label }}
                  </th>

                  <th
                    class="col"
                  >
                    <span v-if="actions.length === 0">
                      No action
                    </span>
                  </th>
                </template>

                <template #data-row="{ headers, row, actions, i }">
                  <td
                    class="col"
                  >
                    {{ i + 1 }}
                  </td>

                  <td
                    v-for="header in headers"
                    class="col"
                  >
                    {{ row[header.key] }}
                  </td>

                  <td
                    v-if="actions.length > 0"
                    class="col"
                  >
                    <div
                      class="data-actions"
                    >
                      <div
                        v-for="action in actions"
                        class="data-action"
                        @click="action.click(row, i)"
                      >
                        {{ action.name }}
                      </div>
                    </div>
                  </td>
                </template>

                <template #pagination="{ pageLeft, pageRight, start, end, total }">
                  <div class="pager-left" @click="pageLeft()">
                    Left
                  </div>

                  <div class="page-number">
                    {{ start }} - {{ end }} of {{ total }}
                  </div>

                  <div class="pager-right" @click="pageRight()">
                    Right
                  </div>
                </template>
              </TTable>

              <TTable
                name="Work Logs (custom templates 2)"
                :headers="tableData.headers"
                :data="tableData.data"
                :actions="tableData.actions"
                :table-actions="tableData.tableActions"
                @offset-change="offsetChange"
              >
                <template #table-name="{ name }">
                  Table: {{ name }}
                </template>

                <template #table-action="{ action, data }">
                  {{ action.name }}
                </template>

                <template #header-col.startTime="{ header, i }">
                  {{ header.label }} (SGT)
                </template>

                <template #header-col.endTime="{ header, i }">
                  {{ header.label }} (SGT)
                </template>

                <template #header-actions="{ actions }">
                  No action
                </template>

                <template #data-col.startTime="{ header, row, i }">
                  <TDatePicker v-model="row.startTime" label=""/>
                </template>

                <template #data-col.endTime="{ header, row, i }">
                  <TDatePicker v-model="row.endTime" label=""/>
                </template>

                <template #data-col.description="{ header, row, i }">
                  <TInput v-model="row.description" label="" />
                </template>

                <template #data-col.hours="{ header, row, i }">
                  <TSelect v-model="row.hours" label="" size="sm" :options="hoursOptions" />
                </template>

                <template #data-action="{ row, action, i }">
                  <div class="data-action">{{ action.name }}</div>
                </template>

                <template #pager-left>
                  <i class="fa-solid fa-circle-arrow-left"></i>
                </template>

                <template #page-number="{ start, end, total }">
                  {{ start }} - {{ end }} of {{ total }}
                </template>

                <template #pager-right>
                  <i class="fa-solid fa-circle-arrow-right"></i>
                </template>
              </TTable>

              <TDialog
                v-model="dataDialog"
                :title="computedDataDialogTitle"
                :fullscreen="true"
              >
                <template #body>
                  <div class="data-row">
                    <div
                      class="data-col"
                      v-for="col in currentRow"
                    >
                      {{ col }}
                    </div>
                  </div>
                </template>
              </TDialog>

            </div> <!-- fields -->
          </div> <!-- fields-container -->
        </div>
      </div> <!-- form-container -->

      <Transition>
        <TAlert
          title="Alert"
          :content="alertContent"
          :width="alertWidth"
          :height="alertHeight"
          v-model="alertDialog"
        />
      </Transition>
    </div> <!-- page-container -->
  </div> <!-- content-container -->
</template>

<style scoped>
.content-container .top-nav {
  display: flex;
  align-items: center;
}

.content-container .top-nav h1 {
  flex-grow: 1;
}

.content-container .top-nav .actions {
  padding: 0 1rem;
}

.spacer {
  margin: 1rem 0;
}

.page-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.form-container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 0;
  width: 100%;
}

.form {
  width: 100%;
}

.fields-container-single,
.fields-container {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid var(--color-border);
  overflow: auto;
}

.fields-container .fields {
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}

.fields-container-single .fields {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.date-range {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.date-range .to {
  font-size: 0.8rem;
  top: -0.8rem;
  align-self: center;
}

.progress-bars {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
}

.tags {
  display: flex;
}

.col {
  text-align: left;
  padding: 1rem;
  border: 1px solid var(--color-border);
}

.data-actions {
  display: flex;
  flex-direction: column;
}

.data-action:hover {
  cursor: pointer;
  color: var(--color-border-hover);
}

.pager-left {
  margin-right: 1rem;
}

.pager-right {
  margin-left: 1rem;
}

.pager-left:hover,
.pager-right:hover {
  cursor: pointer;
  color: var(--color-border-hover);
}

.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.3s linear;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}

.fields-container .title:hover .data {
  visibility: visible;
}

.fields-container .title:hover .fa-eye {
  cursor: pointer;
}

.data {
  visibility: hidden;
  position: absolute;
  z-index: 1000;
  left: 180px;
  top: 0;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 0.8rem;
  font-size: 0.8rem;
  max-width: 80vw;
  white-space: break-spaces;
}

</style>
