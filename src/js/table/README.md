# Table

[Back to home](/README.md)

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

[Back to top](#table)
