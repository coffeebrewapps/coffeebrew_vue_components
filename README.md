# Coffeebrew Vue Components

A library of Vue components custom-made for Coffee Brew Apps.

# Dialogs

## TAlert

Used for displaying popup window with text content only.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| modelValue | Boolean | false | true<br>false | Display state of the popup window. |
| width | Number | 400 | | Width of the popup window in px. |
| height | Number | 200 | | Height of the popup window in px. |
| title | String | '' | | Title of the popup window. |
| content | String | '' | | Content of the popup window. |
| fullscreen | Boolean | false | true<br>false | Whether the window should occupy the full screen. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:modelValue | false | When dialog close button is clicked. |

### Example Usage

<strong>HTML</strong>

```html
<TAlert
  title="Error Alert"
  content="An error has occurred."
  :width="800"
  :height="600"
  v-model="alertDialog"
/>
```

<strong>JS</strong>

```js
const alertDialog = ref(false);
```

[Back to top](#coffeebrew-vue-components)

## TConfirmDialog

Used for displaying popup window with two-line texts and Confirm and Cancel actions.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| modelValue | Boolean | false | true<br>false | Display state of the popup window. |
| width | Number | 800 | | Width of the popup window in px. |
| height | Number | 600 | | Height of the popup window in px. |
| title | String | '' | | Title of the popup window. |
| primaryText | String | '' | | Primary text of the window content. |
| secondaryText | String | '' | | Secondary text of the window content. |
| fullscreen | Boolean | false | true<br>false | Whether the window should occupy the full screen. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:modelValue | false | When dialog close button is clicked. |
| confirm | | When Confirm button is clicked. |
| cancel | | When Cancel button is clicked. |

### Example Usage

<strong>HTML</strong>

```html
<TConfirmDialog
  title="Delete Chart"
  primary-text="Are you sure you want to delete this chart?"
  secondary-text="Monthly working hours by company (2023)"
  v-model="confirmDialog"
  :height="300"
  :width="500"
  @confirm="dialogOnConfirm"
  @cancel="dialogOnCancel"
/>
```

<strong>JS</strong>

```js
const confirmDialog = ref(false);

function dialogOnConfirm() {
  deleteRecord();
}

function dialogOnCancel() {
  fetchRecords();
}
```

[Back to top](#coffeebrew-vue-components)

## TDialog

Used for displaying popup window with customisable header, body and actions.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| modelValue | Boolean | false | true<br>false | Display state of the popup window. |
| width | Number | 800 | | Width of the popup window in px. |
| height | Number | 600 | | Height of the popup window in px. |
| title | String | '' | | Title of the popup window. |
| fullscreen | Boolean | false | true<br>false | Whether the window should occupy the full screen. |

### Slots

| name | bindings | description |
| --- | --- | --- |
| heading | | Customise window heading. |
| body | | Customise window body. |
| actions | | Customise window actions. |

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:modelValue | false | When dialog close button is clicked. |

### Example Usage

<strong>HTML</strong>

```html
<TDialog
  v-model="recordDialog"
  title="View Record"
  :fullscreen="true"
>
  <template #heading>
    View Record #1
  </template>

  <template #body>
    <div class="data-row">
      <div class="data-col">
        ID
      </div>
      <div class="data-col">
        1
      </div>
    </div>

    <div class="data-row">
      <div class="data-col">
        Name
      </div>
      <div class="data-col">
        Coffee Brew Apps
      </div>
    </div>
  </template>

  <template #actions>
    <div class="button" @click="updateRecord('1')">
      Update
    </div>
  </template>
</TDialog>
```

<strong>JS</strong>

```js
const recordDialog = ref(false);

function updateRecord(id) {
  api.update(id);
}
```

[Back to top](#coffeebrew-vue-components)

# Form

## TButton

Used for clickable actions.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| buttonType | String | 'text' | text<br>icon | Whether to display button with text or icon only. |
| size | String | 'md' | sm<br>md<br>lg | Determines the width of the button.<br>sm: 100px<br>md: 200px<br>lg: 500px |
| value | String | 'Button' | | Display text of the button if it is of 'text' type. |
| icon | String | '' | | Display icon of the button. |
| disabled | Boolean | false | true/false | Whether the button is disabled or not. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| click | | When button is clicked. |

### Example Usage

<strong>HTML</strong>

```html
<TButton
  button-type="icon"
  icon="fa-solid fa-moon"
  @click="toggleTheme"
/>
```

<strong>JS</strong>

```js
const theme = ref(false);

function toggleTheme() {
  theme.value = !theme.value;
}
```

[Back to top](#coffeebrew-vue-components)

## TCheckbox

Used for toggling between two states.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| modelValue | Boolean | false | true<br>false | Checked state of the checkbox. |
| label | String | '' | | Display label for the checkbox. |
| errorMessage | String | '' | | Error message for the checkbox. |
| disabled | Boolean | false | true<br>false | Whether the checkbox is disabled or not. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:modelValue | true | When checkbox is checked. |
| update:modelValue | false | When checkbox is unchecked. |

### Example Usage

<strong>HTML</strong>

```html
<TCheckbox
  v-model="subscribe"
  label="Subscribe newsletter"
/>
```

<strong>JS</strong>

```js
const subscribe = ref(false);
```

[Back to top](#coffeebrew-vue-components)

## TDatePicker

Used for picking a date.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| modelValue | Date | null | | Selected date for the picker. |
| min | Date | null | | Minimum date available to select. | 
| max | Date | null | | Maximum date available to select. |
| label | String | '' | | Display label for the date picker. |
| errorMessage | String | '' | | Error message for the date picker. |
| disabled | Boolean | false | true<br>false | Whether the date picker is disabled or not. |
| alignPickers | String | 'center' | top<br>center<br>bottom | Position of the pickers relative to the display field. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:modelValue | A Date instance | When a date is selected. |
| update:modelValue | null | When field is cleared. |

### Example Usage

<strong>HTML</strong>

```html
<TDatePicker
  v-model="dob"
  label="Date of Birth"
  align-pickers="bottom"
/>
```

<strong>JS</strong>

```js
const dob = ref(new Date());
```

[Back to top](#coffeebrew-vue-components)

## TDateRange

Used for picking a range of dates.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| startDate | Date | null | | Start date for the selected range. |
| endDate | Date | null | | End date for the selected range. |
| startMin | Date | null | | Minimum date available to select for start date. | 
| startMax | Date | null | | Maximum date available to select for start date. |
| endMin | Date | null | | Minimum date available to select for end date. | 
| endMax | Date | null | | Maximum date available to select for end date. |
| label | String | '' | | Display label for the date range pickers. |
| errorMessage | String | '' | | Error message for the date range pickers. |
| disabled | Boolean | false | true<br>false | Whether the date range pickers are disabled or not. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:startDate | A Date instance | When a start date is selected. |
| update:endDate | A Date instance | When a end date is selected. |
| update:startDate | null | When field is cleared. |
| update:endDate | null | When field is cleared. |

### Example Usage

<strong>HTML</strong>

```html
<TDateRange
  v-model:start-date="dateRange.start"
  v-model:end-date="dateRange.end"
  label="Date Range"
  :start-min="minStartDate"
  :start-max="maxStartDate"
  :end-min="minEndDate"
  :end-max="maxEndDate"
/>
```

<strong>JS</strong>

```js
const dateRange = ref({
  start: new Date(),
  end: new Date()
});

const minStartDate = new Date('2000-01-01');
const maxStartDate = new Date('2010-12-31');

const minEndDate = new Date('2000-01-01');
const maxEndDate = new Date('2010-12-31');
```

[Back to top](#coffeebrew-vue-components)

## TDateTimePicker

Used for picking a date with timestamp.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| modelValue | Date | null | | Selected datetime for the picker. |
| min | Date | null | | Minimum datetime available to select. | 
| max | Date | null | | Maximum datetime available to select. |
| label | String | '' | | Display label for the datetime picker. |
| displayTime | Boolean | true | true<br>false | Whether to allow selecting time component or not. |
| hour12 | Boolean | false | true<br>false | Whether to display time in 24-hour format or with AM/PM. |
| errorMessage | String | '' | | Error message for the datetime picker. |
| disabled | Boolean | false | true<br>false | Whether the datetime picker is disabled or not. |
| alignPickers | String | 'center' | top<br>center<br>bottom | Position of the pickers relative to the display field. |
| mondayStart | Boolean | true | true<br>false | Whether to start week on Monday or Sunday. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:modelValue | A Date instance | When a datetime is selected. |
| update:modelValue | null | When field is cleared. |

### Example Usage

<strong>HTML</strong>

```html
<TDateTimePicker
  v-model="startTime"
  label="Start Time"
  align-pickers="top"
/>
```

<strong>JS</strong>

```js
const startTime = ref(new Date());
```

[Back to top](#coffeebrew-vue-components)

## TDateTimeRange

Used for picking a range of datetimes.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| startTime | Time | null | | Start datetime for the selected range. |
| endTime | Time | null | | End datetime for the selected range. |
| startMin | Date | null | | Minimum date available to select for start date. | 
| startMax | Date | null | | Maximum date available to select for start date. |
| endMin | Date | null | | Minimum date available to select for end date. | 
| endMax | Date | null | | Maximum date available to select for end date. |
| label | String | '' | | Display label for the date range pickers. |
| hour12 | Boolean | false | true<br>false | Whether to display time in 24-hour format or with AM/PM. |
| errorMessage | String | '' | | Error message for the datetime range pickers. |
| disabled | Boolean | false | true<br>false | Whether the datetime range pickers are disabled or not. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:startTime | A Date instance | When a start datetime is selected. |
| update:endTime | A Date instance | When a end datetime is selected. |
| update:startTime | null | When field is cleared. |
| update:endTime | null | When field is cleared. |

### Example Usage

<strong>HTML</strong>

```html
<TDateTimeRange
  v-model:start-time="timeRange.start"
  v-model:end-time="timeRange.end"
  label="Time Range"
/>
```

<strong>JS</strong>

```js
const timeRange = ref({
  start: new Date(),
  end: new Date()
});
```

[Back to top](#coffeebrew-vue-components)

## TFilePicker

Used for picking files from filesystem.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| modelValue | File, Array[File] | null | | Selected file(s). |
| multiple | Boolean | false | true<br>false | Whether to allow selecting multiple files at once or not. |
| accept | String | 'image/*,.pdf' | | File types allowed to be selected. |
| size | String | 'md' | sm<br>md<br>lg | Determines the width of the picker.<br>sm: 150px<br>md: 250px<br>lg: 500px |
| label | String | 'File' | | Display label for the file picker. |
| errorMessage | String | '' | | Error message for the file picker. |
| disabled | Boolean | false | true<br>false | Whether the file picker is disabled or not. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:modelValue | A File instance | When a file is selected. |
| update:modelValue | An array of File instances | When multiple files are selected. |
| update:modelValue | null | When field is cleared for single select. |
| update:modelValue | [] | When field is cleared for multiple select. |

### Example Usage

<strong>HTML</strong>

```html
<TFilePicker
  v-model="logo"
  size="lg"
  label="Logo"
/>
```

<strong>JS</strong>

```js
const logo = ref();
```

[Back to top](#coffeebrew-vue-components)

## TInput

Used for collecting text/number input.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| modelValue | String, Number | null | | Input value. |
| type | String | 'text' | text<br>number | Type of input. |
| step | Number | 1 | | If input is of type 'number', determines the increment/decrement interval. |
| size | String | 'md' | sm<br>md<br>lg | Determines the width of the picker.<br>sm: 100px<br>md: 200px<br>lg: 500px |
| label | String | 'Input' | | Display label for the input. |
| disabled | Boolean | false | true<br>false | Whether the input is disabled or not. |
| errorMessage | String | '' | | Error message for the input. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:modelValue | A text value | When text is entered. |
| update:modelValue | A number value | When number is entered or incremented or decremented. |
| update:modelValue | null | When invalid number is entered or input is cleared. |

### Example Usage

<strong>HTML</strong>

```html
<TInput
  v-model="firstName"
  label="First Name"
/>

<TInput
  v-model="age"
  type="number"
  label="Age"
/>
```

<strong>JS</strong>

```js
const firstName = ref('');
const age = ref(24);
```

[Back to top](#coffeebrew-vue-components)

## TOption

Used for displaying an option in the TSelect component.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| value | String, Number | '' | | Option value. |
| label | String | 'Select' | | Display label for the option. |
| selected | Boolean | false | true<br>false | Whether the option is selected or not. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| select | A value | When option is selected. |

### Example Usage

<strong>HTML</strong>

```html
<TOption
  v-for="(option, i) in options"
  :key="i"
  :value="option.value"
  :label="option.label"
  :selected="isSelected(option.value)"
  @select="selectOption(option.value)"
/>
```

<strong>JS</strong>

```js
const selectedOption = ref();

const options = [
  { value: 'sg', label: 'Singapore' },
  { value: 'my', label: 'Malaysia' },
  { value: 'th', label: 'Thailand' },
  { value: 'vn', label: 'Vietnam' }
];

function isSelected(value) {
  return selectedOption.value === value;
}

function selectOption(value) {
  selectedOption.value = value;
}
```

[Back to top](#coffeebrew-vue-components)

## TSelect

Used to display a list of options for selection.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| modelValue | String, Number | null | | Selected option value. |
| name | String | '' | | Name the select field. |
| size | String | 'md' | sm<br>md<br>lg | Determines the width of the select field.<br>sm: 150px<br>md: 250px<br>lg: 500px |
| label | String | '' | | Display label for the select field. |
| options | Array | [] | List of options for selection. Must contain `value` and `label` fields.<br>Eg. `{ value: '1', label: 'Coffee Brew Apps' }` |
| disabled | Boolean | false | true<br>false | Whether the select field is disabled or not. |
| errorMessage | String | '' | | Error message for the select field. |
| searchable | Boolean | false | true<br>false | Whether show a search field for options or not. |

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:modelValue | Option value | When an option is selected. |
| update:modelValue | null | When field is cleared. |

### Example Usage

<strong>HTML</strong>

```html
<TSelect
  v-model="country"
  label="Country"
  :options="countryOptions"
  :searchable="true"
/>
```

<strong>JS</strong>

```js
const country = ref();

const countryOptions = [
  { value: 'sg', label: 'Singapore' },
  { value: 'my', label: 'Malaysia' },
  { value: 'th', label: 'Thailand' },
  { value: 'vn', label: 'Vietnam' }
];
```

[Back to top](#coffeebrew-vue-components)

## TSelectTable

Used to display a popup window of paginated table options for selection.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| modelValue | Array | [] | | Selected options. |
| multiple | Boolean | false | true<br>false | Whether to allow selecting multiple options at once or not. |
| name | String | '' | | Name the select field. |
| size | String | 'md' | sm<br>md<br>lg | Determines the width of the select field.<br>sm: 150px<br>md: 250px<br>lg: 500px |
| label | String | 'Input' | | Display label for the select field. |
| optionsLoading | Boolean | false | true<br>false | Whether options are loading or not. |
| options | Array | [] | List of options for selection. Must contain `value` and `label` fields.<br>Eg. `{ value: '1', label: 'Coffee Brew Apps' }` |
| optionsLength | Number | 0 | Total number of options available for selection (including those not rendered in the table). |
| pagination | Object | { offset: 0, limit: 5, client: true } | | Determines the current offset, limit of pagination, and whether it is client-side pagination or not. |
| disabled | Boolean | false | true<br>false | Whether the select field is disabled or not. |
| errorMessage | String | '' | | Error message for the select field. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:modelValue | An array of options | When one or more option is selected. |
| update:modelValue | [] | When field is cleared. |
| offsetChange | A Number value | When pagination offset of the options table is changed. |

### Example Usage

<strong>HTML</strong>

```html
<TSelectTable
  v-model="tags"
  label="Tags"
  :options="tagOptions"
  :options-length="totalOptions"
  @offset-change="fetchOptions(offset)"
/>
```

<strong>JS</strong>

```js
const tags = ref([]);
const tagOptions = ref([]);
const totalOptions = ref(0);

async function fetchOptions(offset) {
  await api.list('tags')
    .then((result) => {
      tagOptions.value = result.data;
      totalOptions.value = result.total;
    });
}

onMounted(async() => {
  await fetchOptions(0);
});
```

[Back to top](#coffeebrew-vue-components)

## TTextarea

Used for collecting multi-line text input.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| modelValue | String | '' | | Input value. |
| rows | Number | 10 | | Determines the height to display. |
| cols | Number | 100 | | Determines the width to display. |
| label | String | 'Input' | | Display label for the input. |
| disabled | Boolean | false | true<br>false | Whether the input is disabled or not. |
| errorMessage | String | '' | | Error message for the input. |

### Slots

None.

### Events

| name | payload | trigger |
| --- | --- | --- |
| update:modelValue | null | When input is cleared. |

### Example Usage

<strong>HTML</strong>

```html
<TTextarea
  v-model="description"
  label="Description"
/>
```

<strong>JS</strong>

```js
const description = ref('');
```

[Back to top](#coffeebrew-vue-components)

# Table

## TTable

Used to display a table of records with CRUD actions and pagination support.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| name | String | '' | | Name of the table. |
| headers | Array | [] | | Header fields to display. Must contain `key` and `label` fields.<br>Eg. `[{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }]` |
| data | Array | [] | | Records to display. Record fields should match the keys of the headers.<br>Eg. `[{ id: '1', name: 'Coffee Brew Apps' }]` |
| totalData | Number | 0 | | Total number of records (including those not displayed due to pagination). |
| actions | Array | [] | | Actions available for each record. Must contain `name`, `icon` and `click` fields.<br>Eg. `[{ name: 'Update', icon: 'fa-solid fa-pencil', click: (row, i) => { updateRecord(row, i) } }]` |
| tableActions | Array | [] | | Actions available for the entire table. Must contain `name`, `icon` and `click` fields.<br>Eg. `[{ name: 'Export', icon: 'fa-solid fa-file-export', click: (data) => { exportData(data) } }]` |
| rowAction | Function | null | | Action to trigger when clicking on a single record row.<br>Eg. `(row, i) => { viewRecord(row, i) }` |
| pagination | Object | { offset: 0, limit: 5, client: true } | | Determines the current offset, limit of pagination, and whether it is client-side pagination or not. |
| loading | Boolean | false | true<br>false | Whether records are loading or not. |
| dense | Boolean | false | true<br>false | Whether to display rows with padding or not. |
| noDataText | String | 'No data' | | Text to display if there is no record to display. |

### Slots

| name | bindings | description |
| --- | --- | --- |
| table-actions | { name, actions } | Customise the UI of table actions. |
| table-name | { name } | Customise the UI of table name. |
| table-action | { action, data } | Customise the UI of a single table action. |
| header-row | { headers, actions } | Customise the UI of the header row. |
| header-col.${key} | { header, i } | Customise the UI of a single header column. |
| header-actions | { actions } | Customise the UI of the header column for row actions. |
| progress-bar | { headers, actions, span } | Customise the UI of when records are loading. |
| data-row | { headers, row, actions, i } | Customise the UI of a record row. |
| data-content | { headers, row, i } | Customise the UI of a record row excluding row actions column. |
| data-col.${key} | { header, row, i } | Customise the UI of a single data column. |
| data-actions | { row, actions, i } | Customise the UI of the row actions column. |
| data-action | { row, action, i } | Customise the UI of a single row action. |
| pagination | { pageLeft, pageRight, start, end, total } | Customise the UI of paginator.<br><br>pageLeft: The function to paginate to previous page.<br>pageRight: The function to paginate to next page.<br>start: Current page first record position (1-index).<br>end: Current page last record position (1-index).<br>total: Total number of records available. |
| pager-left | | Customise the UI of the previous page action. |
| pager-number | { start, end, total } | Customise the UI of the current page. |
| pager-right | | Customise the UI of the next page action. |

### Events

| name | payload | trigger |
| --- | --- | --- |
| offsetChange | A Number value | When pagination offset of the table is changed. |

### Example Usage

<strong>HTML</strong>

```html
<TTable name="Work Logs"
  :headers="headers"
  :data="data"
  :actions="actions"
  :table-actions="tableActions"
  :row-action="actions[0].click"
  :total-data="totalData"
  :pagination="pagination"
  @offset-change="offsetChange"
/>
```

<strong>JS</strong>

```js
const headers = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'description', label: 'Description' },
];

const data = ref([]);

const totalData = ref(0);

const actions = [
  {
    name: 'Update',
    icon: 'fa-solid fa-pencil',
    click: (row, i) => { updateRecord(row, i) },
  },
];

const tableActions = [
  {
    name: 'Create',
    icon: 'fa-solid fa-plus',
    click: () => { openCreateDialog() },
  },
];

const pagination = {
  offset: 0,
  limit: 5,
  client: false,
};

async function offsetChange(offset) {
  await api.list('contacts')
    .then((result) => {
      data.value = result.data;
      totalData.value = result.total;
    });
}

onMounted(async() => {
  await offsetChange(0);
});
```

[Back to top](#coffeebrew-vue-components)

# Others

## TProgressBar

Used to indicate a state of progress.

### Props

| name | type | default | options | description |
| --- | --- | --- | --- | --- |
| step | Number | 10 | | Determines the percentage width of increase for each time ticks. |
| speed | Number | 100 | | Determines the time interval of increase in milliseconds. |
| bidirection | Boolean | true | true<br>false | Whether render the bar progress in both forward and backward directions or not. |
| indefinite | Boolean | true | true<br>false | Whether the bar will repeat the progress and reset cycle indefinitely or not. |

### Slots

None.

### Events

None.

### Example Usage

<strong>HTML</strong>

```html
<TProgressBar
  :speed="500"
  :bidirection="false"
/>
```

[Back to top](#coffeebrew-vue-components)

# Development

## Nodejs version

```
nodejs 18.16.0
```

## Setup

```sh
yarn install
```

## Start development server

```sh
yarn dev
```

Served at http://localhost:5173 by default.

## Build assets

```sh
yarn build
```

Assets are built to `/dist`.

## Build demo page

```sh
yarn build-demo
```

Demo page assets are built to `/docs`.

## Test cases

```sh
yarn test
```

## Test coverage

```sh
yarn test-coverage
```

Coverage metrics report served at http://localhost:51205.

# Disclaimer

This is for personal use only. Although it is open-source, I cannot guarantee the reliability of the code, and may not
be able to attend to bug reports timely.

If you absolutely wish to use the code, please fork it or just copy whatever part that is useful for your own use.
