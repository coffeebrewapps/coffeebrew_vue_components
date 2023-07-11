# Form

[Back to home](/README.md)

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

[Back to top](#form)

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

[Back to top](#form)

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

[Back to top](#form)

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

[Back to top](#form)

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

[Back to top](#form)

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

[Back to top](#form)

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

[Back to top](#form)

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

[Back to top](#form)

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

[Back to top](#form)

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

[Back to top](#form)

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

[Back to top](#form)

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

[Back to top](#form)
