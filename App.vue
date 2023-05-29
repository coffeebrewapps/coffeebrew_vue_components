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
  TInput,
  TOption,
  TSelect,
  TSelectTable,
  TTextarea,
  TTable,
  TProgressBar
} from '@/index'

const model = ref({
  username: '',
  name: '',
  email: 'lauren@email.com',
  description: '',
  password: '',
  amount: 0,
  paragraph1: '',
  paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quam nunc, vulputate a ipsum eget, fermentum facilisis turpis. In et mi dapibus, interdum dolor ut, volutpat turpis. In ut consectetur dolor. Curabitur sodales ipsum lacus, nec consectetur lacus vulputate id. Vestibulum ac suscipit massa, in vehicula urna. Pellentesque at tristique felis, a pellentesque dui. Vestibulum consectetur sit amet augue id commodo. Sed accumsan non lectus sed vulputate. Phasellus sed augue sed nulla placerat malesuada. Cras id sollicitudin risus, sed sagittis magna.',
  country1: '',
  country2: 'my',
  country3: '',
  country4: 'sg',
  tags1: [],
  tags2: [{ value: 'company:company-abc', label: 'Company ABC' }],
  tags3: [{ value: 'company:company-abc', label: 'Company ABC' }, { value: 'activity:testing', label: 'Testing' }],
  tags4: [],
  tags5: [],
  tags6: [{ value: 'company:company-abc', label: 'Company ABC' }],
  tags7: [],
  subscribe: false,
  agree: false,
  agree2: true,
  selected: true,
  startDate: null,
  endDate: null,
  createdDate: (new Date()),
  historyDate: null,
  startTime: (new Date(2023, 1, 2, 22, 5, 15)),
  endTime: null,
  updatedTime: (new Date()),
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
  }
})

const historyStartDate = ref(new Date(1900, 0, 1))
const historyEndDate = ref(new Date(2000, 11, 31))

const countryOptions = ref([
  { value: 'sg', label: 'Singapore' },
  { value: 'my', label: 'Malaysia' },
  { value: 'th', label: 'Thailand' },
  { value: 'vn', label: 'Vietnam' }
])

const tagOptions = ref([
  { value: 'company:company-abc', label: 'Company ABC' },
  { value: 'company:company-xyz', label: 'Company XYZ' },
  { value: 'activity:implementation', label: 'Implementation' },
  { value: 'activity:testing', label: 'Testing' }
])

const tableData = ref({
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
    { startTime: '2023-01-27 09:31:48', endTime: null, description: 'Implemention' },
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

function loadDataOnOffsetChange(val) {
  offsetChange(val)
  fetchServerData()
}

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

onMounted(() => {
  loadDataOnOffsetChange(0)
  loadTagsOnOffsetChange(0)
})
</script>

<template>
  <div class="content-container">
    <h1>Demo Form Elements</h1>

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
            <h3>TInput</h3>

            <div class="fields">
              <TInput v-model="model.username" type="text" label="Username"/>
              <TInput v-model="model.name" type="text" size="md" label="Name"/>
              <TInput v-model="model.description" type="text" size="lg" label="Description"/>
              <TInput v-model="model.amount" type="number" size="sm" label="Amount"/>
              <TInput v-model="model.password" type="password" label="Password (error message)" error-message="Min 8 characters"/>
              <TInput v-model="model.email" type="text" size="lg" label="Email (disabled)" :disabled="true"/>
            </div>
          </div>

          <div class="fields-container">
            <h3>TTextarea</h3>

            <div class="fields">
              <TTextarea v-model="model.paragraph1" label="Paragraph"/>
              <TTextarea v-model="model.paragraph2" label="Paragraph (custom rows and cols)" :rows="20" :cols="80"/>
              <TTextarea v-model="model.paragraph2" label="Paragraph (error message)" error-message="Field is required!"/>
              <TTextarea v-model="model.paragraph2" label="Paragraph (disabled)" :disabled="true"/>
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
            <h3>TSelect</h3>

            <div class="fields">
              <TSelect v-model="model.country1" label="Country" name="country" id="country-1" :options="countryOptions"/>
              <TSelect v-model="model.country2" size="sm" label="Country" name="country" id="country-2" :options="countryOptions"/>
              <TSelect v-model="model.country3" size="lg" label="Country (error message)" name="country" id="country-3" :options="countryOptions" error-message="Min 8 characters"/>
              <TSelect v-model="model.country4" label="Country (disabled)" name="country" id="country-4" :options="countryOptions" :disabled="true"/>
            </div>
          </div>

          <div class="fields-container">
            <h3>TSelectTable</h3>

            <div class="fields">
              <TSelectTable v-model="model.tags1" label="Tags" name="tags1" :options="tagOptions"/>
              <TSelectTable v-model="model.tags2" label="Tags (pre-selected)" name="tags2" :options="tagOptions"/>
              <TSelectTable v-model="model.tags3" label="Tags (multiple)" name="tags3" :options="tagOptions"/>
              <TSelectTable
                v-model="model.tags4"
                label="Tags (server paginated)"
                name="tags4"
                :options="paginatedTags"
                :options-length="tagsData.length"
                :options-loading="tagsDataLoading"
                :pagination="{ limit: 5, client: false }"
                @offset-change="loadTagsOnOffsetChange"
              />
              <TSelectTable
                v-model="model.tags5"
                label="Tags (single server paginated)"
                name="tags5"
                :multiple="false"
                :options="paginatedTags"
                :options-length="tagsData.length"
                :options-loading="tagsDataLoading"
                :pagination="{ limit: 5, client: false }"
                @offset-change="loadTagsOnOffsetChange"
              />
              <TSelectTable v-model="model.tags6" label="Tags (disabled)" name="tags6" :options="tagOptions" :disabled="true"/>
              <TSelectTable v-model="model.tags7" label="Tags (error message)" name="tags7" :options="tagOptions" error-message="Field is required!"/>
            </div>
          </div>

          <div class="fields-container">
            <h3>TCheckbox</h3>

            <div class="fields">
              <TCheckbox v-model="model.subscribe" label="Subscribe newsletter"/>
              <TCheckbox v-model="model.agree" label="Agree T&C" error-message="Required!"/>
              <TCheckbox v-model="model.selected" label="Selected"/>
              <TCheckbox v-model="model.agree2" label="Agree (disabled)" :disabled="true"/>
            </div>
          </div>

          <div class="fields-container">
            <h3>TDatePicker</h3>

            <div class="fields">
              <TDatePicker v-model="model.startDate" label="Start Date" align-pickers="bottom"/>
              <TDatePicker v-model="model.endDate" label="End Date" error-message="Cannot be earlier than start date!" align-pickers="top"/>
              <TDatePicker v-model="model.createdDate" label="Created Date (disabled)" :disabled="true"/>
              <TDatePicker v-model="model.historyDate" label="History Date" :min="historyStartDate" :max="historyEndDate"/>

              <TDateRange
                v-model:start-date="model.dateRange1.start"
                v-model:end-date="model.dateRange1.end"
                label="Date Range"
              />

              <TDateRange
                v-model:start-date="model.dateRange2.start"
                v-model:end-date="model.dateRange2.end"
                label="Date Range (error message)"
                error-message="End date cannot be earlier than start date!"
              />

              <TDateRange
                v-model:start-date="model.dateRange3.start"
                v-model:end-date="model.dateRange3.end"
                label="Date Range (disabled)"
                :disabled="true"
              />
            </div>
          </div>

          <div class="fields-container">
            <h3>TDateTimePicker</h3>

            <div class="fields">
              <TDateTimePicker v-model="model.startTime" label="Start Time" align-pickers="top"/>
              <TDateTimePicker v-model="model.endTime" name="log" label="End Time" :hour12="true" :min="historyStartDate" :max="historyEndDate" align-pickers="bottom"/>
              <TDateTimePicker v-model="model.updatedTime" label="Updated Time" :hour12="true" :disabled="true"/>

              <TDateTimeRange
                v-model:start-time="model.timeRange1.start"
                v-model:end-time="model.timeRange1.end"
                label="Time Range"
              />

              <TDateTimeRange
                v-model:start-time="model.timeRange2.start"
                v-model:end-time="model.timeRange2.end"
                label="Time Range (error message)"
                error-message="End time cannot be earlier than start time!"
              />

              <TDateTimeRange
                v-model:start-time="model.timeRange3.start"
                v-model:end-time="model.timeRange3.end"
                label="Time Range (disabled)"
                :disabled="true"
              />

              <TDateTimeRange
                v-model:start-time="model.timeRange3.start"
                v-model:end-time="model.timeRange3.end"
                label="Time Range (AM/PM)"
                :hour12="true"
              />
            </div>
          </div>

          <div class="fields-container-single">
            <h3>TTable</h3>

            <div class="fields">
              <TTable name="Work Logs (empty)" :headers="tableData.headers" :data="[]" no-data-text="Currently no data"/>
              <TTable :headers="tableData.headers" :data="tableData.data" />
              <TTable name="Work Logs" :headers="tableData.headers" :data="tableData.data" :actions="tableData.actions" :table-actions="tableData.tableActions" @offset-change="offsetChange"/>
              <TTable name="Work Logs (out of bound)" :headers="tableData.headers" :data="tableData.data" :pagination="{ limit: 3, client: true }"/>
              <TTable name="Work Logs (server pagination)" :loading="serverDataLoading" :headers="serverData.headers" :data="paginatedData" :pagination="{ limit: 3, client: false }" :total-data="serverData.data.length" @offset-change="loadDataOnOffsetChange" />

              <TTable
                name="Work Logs (server pagination custom loading bar)"
                :loading="serverDataLoading"
                :headers="serverData.headers"
                :data="paginatedData"
                :pagination="{ limit: 3, client: false }"
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

                <template #data-col.description="{ header, row, i }">
                  <span class="tag">{{ row[header.key] }}</span>
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

      <div class="result">
        <h2>Output</h2>
        <div
          v-for="key in Object.keys(model)"
        >
          {{ key }}: {{ model[key] }}
        </div>
      </div>

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
  padding: 0 1rem 0 0;
  width: 80%;
}

.form {
  width: 100%;
}

.result {
  width: 20%;
}

.fields-container-single,
.fields-container {
  margin: 1rem 0 ;
  padding: 1rem;
  border: 1px solid var(--color-border);
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

@media screen and (max-width: 768px) {
  .result {
    display: none;
  }
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
</style>
