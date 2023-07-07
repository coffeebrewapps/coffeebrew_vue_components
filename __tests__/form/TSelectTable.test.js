import { mount, flushPromises } from '@vue/test-utils';
import TDialog from '../../src/js/dialog/TDialog.vue';
import TTable from '../../src/js/table/TTable.vue';
import TButton from '../../src/js/form/TButton.vue';
import TSelectTable from '../../src/js/form/TSelectTable.vue';

beforeEach(() => {
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('TSelectTable.vue', () => {
  test('should render select table field', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: [
          { value: 'SG', label: 'Singapore' },
          { value: 'MY', label: 'Malaysia' },
        ],
        label: 'Country',
        optionsLength: 5,
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.exists()).toBeTruthy();
    expect(inputControl.classes('md')).toBeTruthy();
    expect(inputControl.classes('disabled')).toBeFalsy();

    const inputLabel = inputControl.get('.input-label');
    expect(inputLabel.exists()).toBeTruthy();
    expect(inputLabel.text()).toBe('Country');

    const inputField = inputControl.get('.input-field');
    expect(inputField.exists()).toBeTruthy();

    const inputFieldWrapper = inputField.get('.wrapper');
    expect(inputFieldWrapper.exists()).toBeTruthy();

    const selectField = inputFieldWrapper.get('.select');
    expect(selectField.exists()).toBeTruthy();

    const selectedList = selectField.get('.selected-list');
    expect(selectedList.exists()).toBeTruthy();

    const selected = selectedList.findAll('.selected');
    expect(selected.length).toBe(2);

    const sgSelected = selected[0];
    const sgSelectedTag = sgSelected.get('.closeable-tag');
    expect(sgSelectedTag.text()).toBe('Singapore');

    const mySelected = selected[1];
    const mySelectedTag = mySelected.get('.closeable-tag');
    expect(mySelectedTag.text()).toBe('Malaysia');

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');
    expect(cleanToggle.exists()).toBeTruthy();

    const errorMessage = inputControl.find('.input-error');
    expect(errorMessage.exists()).toBeFalsy();
  });

  test('when toggle select field should render table dialog', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: [
          { value: 'SG', label: 'Singapore' },
          { value: 'MY', label: 'Malaysia' },
        ],
        label: 'Country',
        name: 'Countries',
        optionsLength: 5,
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
        size: 'lg',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.classes('lg')).toBeTruthy();

    const inputField = inputControl.get('.input-field');

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();

    await inputField.trigger('click');

    await flushPromises();

    let tableDialog;

    tableDialog = inputControl.getComponent(TDialog);
    expect(tableDialog.exists()).toBeTruthy();

    const optionsTable = tableDialog.getComponent(TTable);
    expect(optionsTable.exists()).toBeTruthy();
    expect(optionsTable.props()).toEqual(expect.objectContaining({
      name: 'Countries',
      headers: [
        { key: 'value', type: 'text', label: 'Value' },
        { key: 'label', type: 'text', label: 'Label' },
        { key: 'selected', type: 'text', label: '' },
      ],
      data: [
        { value: 'MY', label: 'Malaysia' },
        { value: 'PH', label: 'Philippines' },
        { value: 'SG', label: 'Singapore' },
        { value: 'TH', label: 'Thailand' },
        { value: 'VN', label: 'Vietnam' },
      ],
      actions: [],
      rowAction: expect.anything(),
      loading: false,
      totalData: 5,
      pagination: {
        offset: 0,
        limit: 5,
        client: true,
      },
    }));

    const optionsTableBody = optionsTable.get('.body');
    const optionsTableRows = optionsTableBody.findAll('tr');
    expect(optionsTableRows.length).toBe(5);

    const myRow = optionsTableRows[0];
    expect(myRow.html()).toContain('Malaysia');
    const myCheckbox = myRow.find('.checkbox');
    expect(myCheckbox.classes('checked')).toBeTruthy();

    const phRow = optionsTableRows[1];
    expect(phRow.html()).toContain('Philippines');
    const phCheckbox = phRow.find('.checkbox');
    expect(phCheckbox.classes('checked')).toBeFalsy();

    const sgRow = optionsTableRows[2];
    expect(sgRow.html()).toContain('Singapore');
    const sgCheckbox = sgRow.find('.checkbox');
    expect(sgCheckbox.classes('checked')).toBeTruthy();

    const thRow = optionsTableRows[3];
    expect(thRow.html()).toContain('Thailand');
    const thCheckbox = thRow.find('.checkbox');
    expect(thCheckbox.classes('checked')).toBeFalsy();

    const vnRow = optionsTableRows[4];
    expect(vnRow.html()).toContain('Vietnam');
    const vnCheckbox = vnRow.find('.checkbox');
    expect(vnCheckbox.classes('checked')).toBeFalsy();

    const vnCol1 = vnRow.findAll('td')[0];

    await vnCol1.trigger('click');

    await flushPromises();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0]).toEqual([[
      { value: 'SG', label: 'Singapore' },
      { value: 'MY', label: 'Malaysia' },
      { value: 'VN', label: 'Vietnam' },
    ]]);

    await tableDialog.vm.$emit('update:modelValue', false);

    await flushPromises();

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();

    await inputField.trigger('click');

    await flushPromises();

    tableDialog = inputControl.getComponent(TDialog);
    expect(tableDialog.exists()).toBeTruthy();

    await tableDialog.trigger('keydown.esc');

    await flushPromises();

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();
  });

  test('when click on selected row should unselect option', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: [
          { value: 'SG', label: 'Singapore' },
          { value: 'MY', label: 'Malaysia' },
        ],
        label: 'Country',
        name: 'Countries',
        optionsLength: 5,
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
        size: 'sm',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.classes('sm')).toBeTruthy();

    const inputField = inputControl.get('.input-field');

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();

    await inputField.trigger('click');

    await flushPromises();

    const tableDialog = inputControl.getComponent(TDialog);
    expect(tableDialog.exists()).toBeTruthy();

    const optionsTable = tableDialog.getComponent(TTable);
    const optionsTableBody = optionsTable.get('.body');
    const optionsTableRows = optionsTableBody.findAll('tr');

    const myRow = optionsTableRows[0];

    const myCol1 = myRow.findAll('td')[0];

    await myCol1.trigger('click');

    await flushPromises();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0]).toEqual([[
      { value: 'SG', label: 'Singapore' },
    ]]);

    const dialogCloseButton = tableDialog.getComponent(TButton);
    expect(dialogCloseButton.exists()).toBeTruthy();

    await dialogCloseButton.trigger('click');

    await flushPromises();

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();
  });

  test('when only allow single selected option should only select one option', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: [
          { value: 'SG', label: 'Singapore' },
        ],
        label: 'Country',
        name: 'Countries',
        optionsLength: 5,
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
        multiple: false,
        size: null,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.classes('md')).toBeFalsy();

    const inputField = inputControl.get('.input-field');

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();

    await inputField.trigger('click');

    await flushPromises();

    const tableDialog = inputControl.getComponent(TDialog);
    expect(tableDialog.exists()).toBeTruthy();

    const optionsTable = tableDialog.getComponent(TTable);
    const optionsTableBody = optionsTable.get('.body');
    const optionsTableRows = optionsTableBody.findAll('tr');
    expect(optionsTableRows.length).toBe(5);

    const myRow = optionsTableRows[0];
    expect(myRow.html()).toContain('Malaysia');
    const myCheckbox = myRow.find('.checkbox');
    expect(myCheckbox.classes('checked')).toBeFalsy();

    const phRow = optionsTableRows[1];
    expect(phRow.html()).toContain('Philippines');
    const phCheckbox = phRow.find('.checkbox');
    expect(phCheckbox.classes('checked')).toBeFalsy();

    const sgRow = optionsTableRows[2];
    expect(sgRow.html()).toContain('Singapore');
    const sgCheckbox = sgRow.find('.checkbox');
    expect(sgCheckbox.classes('checked')).toBeTruthy();

    const thRow = optionsTableRows[3];
    expect(thRow.html()).toContain('Thailand');
    const thCheckbox = thRow.find('.checkbox');
    expect(thCheckbox.classes('checked')).toBeFalsy();

    const vnRow = optionsTableRows[4];
    expect(vnRow.html()).toContain('Vietnam');
    const vnCheckbox = vnRow.find('.checkbox');
    expect(vnCheckbox.classes('checked')).toBeFalsy();

    const thCol1 = thRow.findAll('td')[0];
    await thCol1.trigger('click');

    await flushPromises();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0]).toEqual([[{ value: 'TH', label: 'Thailand' }]]);

    const dialogCloseButton = tableDialog.getComponent(TButton);

    await dialogCloseButton.trigger('keydown.enter');

    await flushPromises();

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();
  });

  test('when no selected options should render empty field', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: null,
        label: 'Country',
        optionsLength: 5,
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
        errorMessage: 'Field is required',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const selectField = inputFieldWrapper.get('.select');
    const selectedList = selectField.get('.selected-list');
    const selected = selectedList.findAll('.selected');
    expect(selected.length).toBe(0);

    await inputField.trigger('click');

    await flushPromises();

    const tableDialog = inputControl.getComponent(TDialog);
    expect(tableDialog.exists()).toBeTruthy();

    const optionsTable = tableDialog.getComponent(TTable);
    const optionsTableBody = optionsTable.get('.body');
    const optionsTableRows = optionsTableBody.findAll('tr');

    const myRow = optionsTableRows[0];
    expect(myRow.html()).toContain('Malaysia');
    const myCheckbox = myRow.find('.checkbox');
    expect(myCheckbox.classes('checked')).toBeFalsy();

    const phRow = optionsTableRows[1];
    expect(phRow.html()).toContain('Philippines');
    const phCheckbox = phRow.find('.checkbox');
    expect(phCheckbox.classes('checked')).toBeFalsy();

    const sgRow = optionsTableRows[2];
    expect(sgRow.html()).toContain('Singapore');
    const sgCheckbox = sgRow.find('.checkbox');
    expect(sgCheckbox.classes('checked')).toBeFalsy();

    const thRow = optionsTableRows[3];
    expect(thRow.html()).toContain('Thailand');
    const thCheckbox = thRow.find('.checkbox');
    expect(thCheckbox.classes('checked')).toBeFalsy();

    const vnRow = optionsTableRows[4];
    expect(vnRow.html()).toContain('Vietnam');
    const vnCheckbox = vnRow.find('.checkbox');
    expect(vnCheckbox.classes('checked')).toBeFalsy();

    await inputField.trigger('click');

    await flushPromises();

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();

    const errorMessage = inputControl.get('.input-error');
    expect(errorMessage.exists()).toBeTruthy();
  });

  test('when options table offset change should new options', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: [
          { value: 'SG', label: 'Singapore' },
          { value: 'MY', label: 'Malaysia' },
        ],
        label: 'Country',
        optionsLength: 8,
        options: [
          { value: 'AU', label: 'Australia' },
          { value: 'CA', label: 'Canada' },
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'US', label: 'United States' },
          { value: 'VN', label: 'Vietnam' },
        ],
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');

    await inputField.trigger('click');

    await flushPromises();

    const tableDialog = inputControl.getComponent(TDialog);
    const optionsTable = tableDialog.getComponent(TTable);

    await optionsTable.vm.$emit('offsetChange', 5);

    await flushPromises();

    const offsetEvents = wrapper.emitted().offsetChange;
    expect(offsetEvents.length).toBe(1);
    expect(offsetEvents[0]).toEqual([5]);
  });

  test('when keydown enter clean toggle should reset field', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: [
          { value: 'SG', label: 'Singapore' },
          { value: 'MY', label: 'Malaysia' },
        ],
        label: 'Country',
        optionsLength: 5,
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');

    await cleanToggle.trigger('keydown.enter');

    await flushPromises();

    const removeEvents = wrapper.emitted()['update:modelValue'];
    expect(removeEvents.length).toBe(1);
    expect(removeEvents[0]).toEqual([[]]);
  });

  test('when keydown backspace input field should reset field', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: [
          { value: 'SG', label: 'Singapore' },
          { value: 'MY', label: 'Malaysia' },
        ],
        label: 'Country',
        optionsLength: 5,
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');

    await inputField.trigger('keydown.backspace');

    await flushPromises();

    const removeEvents = wrapper.emitted()['update:modelValue'];
    expect(removeEvents.length).toBe(1);
    expect(removeEvents[0]).toEqual([[]]);
  });

  test('when click clean toggle should reset field', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: [
          { value: 'SG', label: 'Singapore' },
          { value: 'MY', label: 'Malaysia' },
        ],
        label: 'Country',
        optionsLength: 5,
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');

    await cleanToggle.trigger('click');

    await flushPromises();

    const removeEvents = wrapper.emitted()['update:modelValue'];
    expect(removeEvents.length).toBe(1);
    expect(removeEvents[0]).toEqual([[]]);
  });

  test('when keydown backspace on selected tag should emit updated value', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: [
          { value: 'SG', label: 'Singapore' },
          { value: 'MY', label: 'Malaysia' },
        ],
        label: 'Country',
        optionsLength: 5,
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const selectField = inputFieldWrapper.get('.select');
    const selectedList = selectField.get('.selected-list');
    const selected = selectedList.findAll('.selected');

    const sgSelected = selected[0];
    const sgSelectedTag = sgSelected.get('.closeable-tag');
    expect(sgSelectedTag.text()).toBe('Singapore');

    await sgSelectedTag.trigger('keydown.backspace');

    await flushPromises();

    const removeEvents = wrapper.emitted()['update:modelValue'];
    expect(removeEvents.length).toBe(1);
    expect(removeEvents[0]).toEqual([[{ value: 'MY', label: 'Malaysia' }]]);
  });

  test('when click on selected tag remove should emit updated value', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: [
          { value: 'SG', label: 'Singapore' },
          { value: 'MY', label: 'Malaysia' },
        ],
        label: 'Country',
        optionsLength: 5,
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const selectField = inputFieldWrapper.get('.select');
    const selectedList = selectField.get('.selected-list');
    const selected = selectedList.findAll('.selected');

    const mySelected = selected[1];
    const mySelectedTag = mySelected.get('.closeable-tag');
    expect(mySelectedTag.text()).toBe('Malaysia');
    const myRemoveIcon = mySelectedTag.get('i');
    expect(myRemoveIcon.exists()).toBeTruthy();

    await myRemoveIcon.trigger('click');

    await flushPromises();

    const removeEvents = wrapper.emitted()['update:modelValue'];
    expect(removeEvents.length).toBe(1);
    expect(removeEvents[0]).toEqual([[{ value: 'SG', label: 'Singapore' }]]);
  });

  test('when disabled should render disabled field', async() => {
    const wrapper = mount(TSelectTable, {
      props: {
        modelValue: [
          { value: 'SG', label: 'Singapore' },
          { value: 'MY', label: 'Malaysia' },
        ],
        label: 'Country',
        optionsLength: 5,
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
        disabled: true,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.classes('disabled')).toBeTruthy();

    const inputField = inputControl.get('.input-field');

    await inputField.trigger('click');

    await flushPromises();

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();
  });
});
