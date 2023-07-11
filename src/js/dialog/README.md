# Dialogs

[Back to home](/README.md)

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

[Back to top](#dialogs)

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

[Back to top](#dialogs)

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

[Back to top](#dialogs)
