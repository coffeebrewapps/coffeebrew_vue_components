import { mount, flushPromises } from '@vue/test-utils';
import TTable from '../../src/js/table/TTable.vue';

beforeEach(() => {
});

afterEach(() => {
  vi.restoreAllMocks();
});

const createClick = vi.fn();
const exportClick = vi.fn();
const viewClick = vi.fn();
const updateClick = vi.fn();

const tableActionsConfig = [
  {
    name: 'Create',
    icon: 'fa-solid fa-plus',
    click: createClick,
  },
  {
    name: 'Export',
    icon: 'fa-solid fa-export',
    click: exportClick,
  },
];

const actionsConfig = [
  {
    name: 'Update',
    icon: 'fa-solid fa-pencil',
    click: updateClick,
  },
];

describe('TTable.vue', () => {
  test('should render table', async() => {
    const data = [];

    const wrapper = mount(TTable, {
      props: {
        name: 'Contacts',
        tableActions: tableActionsConfig,
        headers: [
          {
            key: 'id',
            label: 'ID',
          },
        ],
        actions: actionsConfig,
        data,
      },
    });

    await flushPromises();

    const tableContainer = wrapper.get('.table-container');
    expect(tableContainer.exists()).toBeTruthy();

    const tableNameContainer = tableContainer.get('.table-actions');
    expect(tableContainer.exists()).toBeTruthy();

    const tableName = tableNameContainer.get('.table-name');
    expect(tableName.exists()).toBeTruthy();
    expect(tableName.classes('show')).toBeTruthy();
    expect(tableName.text()).toBe('Contacts');

    const tableActionsContainer = tableNameContainer.get('.actions');
    expect(tableActionsContainer.exists()).toBeTruthy();
    expect(tableActionsContainer.exists()).toBeTruthy();

    const tableActions = tableActionsContainer.findAll('.action');
    expect(tableActions.length).toBe(2);

    const createAction = tableActions[0];
    expect(createAction.html()).toContain('Create');
    expect(createAction.html()).toContain('fa-plus');

    await createAction.trigger('click');

    await flushPromises();

    expect(createClick).toHaveBeenCalledWith(data);

    const exportAction = tableActions[1];
    expect(exportAction.html()).toContain('Export');
    expect(exportAction.html()).toContain('fa-export');

    await exportAction.trigger('click');

    await flushPromises();

    expect(exportClick).toHaveBeenCalledWith(data);

    const table = tableContainer.get('table');
    expect(table.exists()).toBeTruthy();
    expect(table.classes('dense')).toBeTruthy();

    const tableHeader = table.get('thead');
    const headerRow = tableHeader.get('tr');

    const headerCols = headerRow.findAll('th');
    expect(headerCols.length).toBe(2);

    const idCol = headerCols[0];
    expect(idCol.text()).toBe('ID');

    const actionsCol = headerCols[1];
    expect(actionsCol.text()).toBe('');

    const loadingBar = tableHeader.find('.loading');
    expect(loadingBar.exists()).toBeFalsy();

    const tableBody = table.get('tbody');
    expect(tableBody.exists()).toBeTruthy();

    const bodyRows = tableBody.findAll('tr');
    expect(bodyRows.length).toBe(1);

    const noDataRow = bodyRows[0];
    const noDataCols = noDataRow.findAll('td');
    expect(noDataCols.length).toBe(1);

    const noDataCol = noDataCols[0];
    expect(noDataCol.text()).toBe('No data');

    const pagination = tableContainer.get('.pagination');
    expect(pagination.exists()).toBeTruthy();
    expect(pagination.classes('hide')).toBeTruthy();
  });

  test('when click on actions should trigger actions', async() => {
    const data = [
      {
        id: '1',
        name: 'Coffee Brew Apps',
      },
      {
        id: '2',
        name: 'Company ABC',
      },
      {
        id: '3',
        name: 'Company XYZ',
      },
      {
        id: '4',
        name: 'Company ACME',
      },
      {
        id: '5',
        name: 'Google.com',
      },
      {
        id: '6',
        name: 'Namecheap.com',
      },
    ];

    const wrapper = mount(TTable, {
      props: {
        tableActions: tableActionsConfig,
        headers: [
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'name',
            label: 'Name',
          },
        ],
        actions: actionsConfig,
        rowAction: viewClick,
        data,
        dense: false,
      },
    });

    await flushPromises();

    const tableContainer = wrapper.get('.table-container');
    const tableNameContainer = tableContainer.get('.table-actions');
    const tableName = tableNameContainer.get('.table-name');
    expect(tableName.exists()).toBeTruthy();
    expect(tableName.classes('hide')).toBeTruthy();

    const table = tableContainer.get('table');
    expect(table.classes('dense')).toBeFalsy();

    const tableHeader = table.get('thead');
    const headerRow = tableHeader.get('tr');

    const headerCols = headerRow.findAll('th');
    expect(headerCols.length).toBe(3);

    const idCol = headerCols[0];
    expect(idCol.text()).toBe('ID');

    const nameCol = headerCols[1];
    expect(nameCol.text()).toBe('Name');

    const actionsCol = headerCols[2];
    expect(actionsCol.text()).toBe('');

    const loadingBar = tableHeader.find('.loading');
    expect(loadingBar.exists()).toBeFalsy();

    const tableBody = table.get('tbody');
    expect(tableBody.exists()).toBeTruthy();

    const bodyRows = tableBody.findAll('tr');
    expect(bodyRows.length).toBe(5);

    const row1 = bodyRows[0];
    const row1Cols = row1.findAll('td');
    const row1Col1 = row1Cols[0];
    expect(row1Col1.text()).toBe('1');
    const row1Col2 = row1Cols[1];
    expect(row1Col2.text()).toBe('Coffee Brew Apps');

    const row2 = bodyRows[1];
    const row2Cols = row2.findAll('td');
    const row2Col1 = row2Cols[0];
    expect(row2Col1.text()).toBe('2');
    const row2Col2 = row2Cols[1];
    expect(row2Col2.text()).toBe('Company ABC');
    const row2Col3 = row2Cols[2];
    const row2Col3Actions = row2Col3.findAll('.action');
    expect(row2Col3Actions.length).toBe(1);

    const row2UpdateAction = row2Col3Actions[0];
    expect(row2UpdateAction.text()).toBe('Update');

    await row2UpdateAction.trigger('click');

    await flushPromises();

    expect(updateClick).toHaveBeenCalledWith({
      id: '2',
      name: 'Company ABC',
    }, 1);

    const row3 = bodyRows[2];
    const row3Cols = row3.findAll('td');
    const row3Col1 = row3Cols[0];
    expect(row3Col1.text()).toBe('3');
    const row3Col2 = row3Cols[1];
    expect(row3Col2.text()).toBe('Company XYZ');

    await row3.trigger('keydown.enter');

    await flushPromises();

    expect(viewClick).toHaveBeenCalledWith({
      id: '3',
      name: 'Company XYZ',
    }, 2);

    const row4 = bodyRows[3];
    const row4Cols = row4.findAll('td');
    const row4Col1 = row4Cols[0];
    expect(row4Col1.text()).toBe('4');
    const row4Col2 = row4Cols[1];
    expect(row4Col2.text()).toBe('Company ACME');

    await row4Col2.trigger('click');

    await flushPromises();

    expect(viewClick).toHaveBeenCalledWith({
      id: '4',
      name: 'Company ACME',
    }, 3);

    const row5 = bodyRows[4];
    const row5Cols = row5.findAll('td');
    const row5Col1 = row5Cols[0];
    expect(row5Col1.text()).toBe('5');
    const row5Col2 = row5Cols[1];
    expect(row5Col2.text()).toBe('Google.com');

    const pagination = tableContainer.get('.pagination');
    expect(pagination.exists()).toBeTruthy();
    expect(pagination.classes('show')).toBeTruthy();

    const pageNumberContainer = pagination.get('.page-number');
    expect(pageNumberContainer.exists()).toBeTruthy();
    expect(pageNumberContainer.text()).toBe('1 - 5 / 6');

    const pagerLeft = pagination.get('.pager.left');
    expect(pagerLeft.exists()).toBeTruthy();
    expect(pagerLeft.classes('show')).toBeFalsy();

    const pagerRight = pagination.get('.pager.right');
    expect(pagerRight.exists()).toBeTruthy();
    expect(pagerRight.classes('show')).toBeTruthy();

    await pagerRight.trigger('click');

    await flushPromises();

    const offsetEvents = wrapper.emitted().offsetChange;
    expect(offsetEvents.length).toBe(1);
    expect(offsetEvents[0]).toEqual([5]);
  });

  test('when click on pager should emit offset change event', async() => {
    const data = [
      {
        id: '1',
        name: 'Coffee Brew Apps',
      },
      {
        id: '2',
        name: 'Company ABC',
      },
      {
        id: '3',
        name: 'Company XYZ',
      },
      {
        id: '4',
        name: 'Company ACME',
      },
      {
        id: '5',
        name: 'Google.com',
      },
      {
        id: '6',
        name: 'Namecheap.com',
      },
      {
        id: '7',
        name: 'Apple.com',
      },
      {
        id: '8',
        name: 'Company Foo',
      },
      {
        id: '9',
        name: 'Company Bar',
      },
      {
        id: '10',
        name: 'Trello.com',
      },
      {
        id: '11',
        name: 'Slack.com',
      },
    ];

    const wrapper = mount(TTable, {
      props: {
        tableActions: tableActionsConfig,
        headers: [
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'name',
            label: 'Name',
          },
        ],
        actions: actionsConfig,
        data,
        dense: false,
        pagination: {
          offset: 5,
          limit: 5,
          client: true,
        },
      },
    });

    await flushPromises();

    const tableContainer = wrapper.get('.table-container');
    const tableNameContainer = tableContainer.get('.table-actions');
    const tableName = tableNameContainer.get('.table-name');
    expect(tableName.exists()).toBeTruthy();
    expect(tableName.classes('hide')).toBeTruthy();

    const table = tableContainer.get('table');
    expect(table.classes('dense')).toBeFalsy();

    const tableBody = table.get('tbody');
    expect(tableBody.exists()).toBeTruthy();

    const bodyRows = tableBody.findAll('tr');
    expect(bodyRows.length).toBe(5);

    const row1 = bodyRows[0];

    await row1.trigger('keydown.enter');

    await flushPromises();

    expect(viewClick).not.toHaveBeenCalledWith({
      id: '1',
      name: 'Coffee Brew Apps',
    }, 0);

    const pagination = tableContainer.get('.pagination');
    expect(pagination.exists()).toBeTruthy();
    expect(pagination.classes('show')).toBeTruthy();

    const pageNumberContainer = pagination.get('.page-number');
    expect(pageNumberContainer.exists()).toBeTruthy();
    expect(pageNumberContainer.text()).toBe('6 - 10 / 11');

    const pagerLeft = pagination.get('.pager.left');
    expect(pagerLeft.exists()).toBeTruthy();
    expect(pagerLeft.classes('show')).toBeTruthy();

    const pagerRight = pagination.get('.pager.right');
    expect(pagerRight.exists()).toBeTruthy();
    expect(pagerRight.classes('show')).toBeTruthy();

    await pagerLeft.trigger('click');

    await flushPromises();

    let offsetEvents = wrapper.emitted().offsetChange;
    expect(offsetEvents.length).toBe(1);
    expect(offsetEvents[0]).toEqual([0]);

    await wrapper.setProps({ pagination: { offset: 0, limit: 5, client: true } });

    await flushPromises();

    expect(pageNumberContainer.text()).toBe('1 - 5 / 11');

    expect(pagerLeft.classes('show')).toBeFalsy();

    await pagerLeft.trigger('keydown.enter');

    await flushPromises();

    offsetEvents = wrapper.emitted().offsetChange;
    expect(offsetEvents.length).toBe(1);

    await pagerRight.trigger('click');

    await flushPromises();

    offsetEvents = wrapper.emitted().offsetChange;
    expect(offsetEvents.length).toBe(2);
    expect(offsetEvents[0]).toEqual([0]);
    expect(offsetEvents[1]).toEqual([5]);

    await wrapper.setProps({ pagination: { offset: 5, limit: 5, client: true } });

    await flushPromises();

    expect(pageNumberContainer.text()).toBe('6 - 10 / 11');

    await pagerRight.trigger('keydown.enter');

    await flushPromises();

    offsetEvents = wrapper.emitted().offsetChange;
    expect(offsetEvents.length).toBe(3);
    expect(offsetEvents[0]).toEqual([0]);
    expect(offsetEvents[1]).toEqual([5]);
    expect(offsetEvents[2]).toEqual([10]);

    await wrapper.setProps({ pagination: { offset: 10, limit: 5, client: true } });

    await flushPromises();

    expect(pageNumberContainer.text()).toBe('11 / 11');

    await pagerRight.trigger('click');

    await flushPromises();

    offsetEvents = wrapper.emitted().offsetChange;
    expect(offsetEvents.length).toBe(3);

    await wrapper.setProps({ pagination: { offset: 3, limit: 5, client: true } });

    await flushPromises();

    expect(pageNumberContainer.text()).toBe('4 - 8 / 11');

    await pagerLeft.trigger('click');

    await flushPromises();

    offsetEvents = wrapper.emitted().offsetChange;
    expect(offsetEvents.length).toBe(4);
    expect(offsetEvents[0]).toEqual([0]);
    expect(offsetEvents[1]).toEqual([5]);
    expect(offsetEvents[2]).toEqual([10]);
    expect(offsetEvents[3]).toEqual([0]);
  });

  test('when server-side pagination should use props data', async() => {
    const wrapper = mount(TTable, {
      props: {
        name: 'Contacts',
        headers: [
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'name',
            label: 'Name',
          },
        ],
        data: [
          {
            id: '1',
            name: 'Coffee Brew Apps',
          },
          {
            id: '2',
            name: 'Company ABC',
          },
          {
            id: '3',
            name: 'Company XYZ',
          },
        ],
        pagination: {
          offset: 0,
          limit: 3,
          client: false,
        },
        totalData: 11,
      },
    });

    await flushPromises();

    const tableContainer = wrapper.get('.table-container');
    const table = tableContainer.get('table');

    const tableHeader = table.get('thead');

    expect(tableHeader.find('.loading').exists()).toBeTruthy();

    await wrapper.setProps({ loading: false });

    await flushPromises();

    expect(tableHeader.find('.loading').exists()).toBeFalsy();

    const tableBody = table.get('tbody');
    expect(tableBody.exists()).toBeTruthy();

    let bodyRows = tableBody.findAll('tr');
    expect(bodyRows.length).toBe(3);

    let row1 = bodyRows[0];
    let row1Cols = row1.findAll('td');
    let row1Col1 = row1Cols[0];
    expect(row1Col1.text()).toBe('1');
    let row1Col2 = row1Cols[1];
    expect(row1Col2.text()).toBe('Coffee Brew Apps');

    const pagination = tableContainer.get('.pagination');
    expect(pagination.exists()).toBeTruthy();
    expect(pagination.classes('show')).toBeTruthy();

    const pageNumberContainer = pagination.get('.page-number');
    expect(pageNumberContainer.exists()).toBeTruthy();
    expect(pageNumberContainer.text()).toBe('1 - 3 / 11');

    const pagerRight = pagination.get('.pager.right');
    expect(pagerRight.exists()).toBeTruthy();
    expect(pagerRight.classes('show')).toBeTruthy();

    await pagerRight.trigger('click');

    await flushPromises();

    const offsetEvents = wrapper.emitted().offsetChange;
    expect(offsetEvents.length).toBe(1);
    expect(offsetEvents[0]).toEqual([3]);

    await wrapper.setProps({ loading: true });

    expect(tableHeader.find('.loading').exists()).toBeTruthy();

    await wrapper.setProps({
      loading: false,
      data: [
        {
          id: '4',
          name: 'Company ACME',
        },
        {
          id: '5',
          name: 'Google.com',
        },
        {
          id: '6',
          name: 'Namecheap.com',
        },
      ],
      pagination: {
        offset: 3,
        limit: 3,
        client: false,
      },
    });

    await flushPromises();

    expect(pageNumberContainer.text()).toBe('4 - 6 / 11');

    bodyRows = tableBody.findAll('tr');
    expect(bodyRows.length).toBe(3);

    row1 = bodyRows[0];
    row1Cols = row1.findAll('td');
    row1Col1 = row1Cols[0];
    expect(row1Col1.text()).toBe('4');
    row1Col2 = row1Cols[1];
    expect(row1Col2.text()).toBe('Company ACME');
  });
});
