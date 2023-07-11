import { mount, flushPromises } from '@vue/test-utils';
import TOption from '../../src/js/form/TOption.vue';
import TSelect from '../../src/js/form/TSelect.vue';

beforeEach(() => {
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('TSelect.vue', () => {
  test('should render select field', async() => {
    const wrapper = mount(TSelect, {
      props: {
        modelValue: 'SG',
        label: 'Country',
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
    expect(inputField.classes('collapsed')).toBeTruthy();

    const inputFieldWrapper = inputField.get('.wrapper');
    expect(inputFieldWrapper.exists()).toBeTruthy();

    const selectField = inputFieldWrapper.get('.select');
    expect(selectField.exists()).toBeTruthy();

    const selected = selectField.get('.selected');
    expect(selected.exists()).toBeTruthy();
    expect(selected.text()).toBe('Singapore');

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');
    expect(cleanToggle.exists()).toBeTruthy();

    const searchField = inputControl.find('.search');
    expect(searchField.exists()).toBeFalsy();

    await inputField.trigger('click');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    const optionsContainer = inputControl.find('.options');
    expect(optionsContainer.exists()).toBeTruthy();

    const options = optionsContainer.findAllComponents(TOption);
    expect(options.length).toBe(5);

    const myOption = options[0];
    expect(myOption.props()).toEqual(expect.objectContaining({
      value: 'MY',
      label: 'Malaysia',
      selected: false,
    }));

    const phOption = options[1];
    expect(phOption.props()).toEqual(expect.objectContaining({
      value: 'PH',
      label: 'Philippines',
      selected: false,
    }));

    const sgOption = options[2];
    expect(sgOption.props()).toEqual(expect.objectContaining({
      value: 'SG',
      label: 'Singapore',
      selected: true,
    }));

    const thOption = options[3];
    expect(thOption.props()).toEqual(expect.objectContaining({
      value: 'TH',
      label: 'Thailand',
      selected: false,
    }));

    const vnOption = options[4];
    expect(vnOption.props()).toEqual(expect.objectContaining({
      value: 'VN',
      label: 'Vietnam',
      selected: false,
    }));

    await inputField.trigger('keydown.esc');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('click');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    const errorMessage = inputControl.find('.input-error');
    expect(errorMessage.exists()).toBeFalsy();
  });

  test('when option change should emit event', async() => {
    const wrapper = mount(TSelect, {
      props: {
        modelValue: 'SG',
        label: 'Country',
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
        size: null,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');

    const inputField = inputControl.get('.input-field');
    expect(inputField.classes('collapsed')).toBeTruthy();
    expect(inputField.classes('md')).toBeFalsy();

    await inputField.trigger('click');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    const optionsContainer = inputControl.find('.options');
    const options = optionsContainer.findAllComponents(TOption);

    const phOption = options[1];

    await phOption.vm.$emit('select');

    await flushPromises();

    let selectEvents;

    selectEvents = wrapper.emitted()['update:modelValue'];
    expect(selectEvents.length).toBe(1);
    expect(selectEvents[0]).toEqual(['PH']);
    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    const vnOption = options[4];

    await vnOption.trigger('keydown.enter');

    await flushPromises();

    selectEvents = wrapper.emitted()['update:modelValue'];
    expect(selectEvents.length).toBe(2);
    expect(selectEvents[0]).toEqual(['PH']);
    expect(selectEvents[1]).toEqual(['VN']);
    expect(inputField.classes('collapsed')).toBeTruthy();
  });

  test('when searchable should render search field', async() => {
    const wrapper = mount(TSelect, {
      props: {
        modelValue: 'SG',
        label: 'Country',
        options: [
          { value: 'MY', label: 'Malaysia' },
          { value: 'PH', label: 'Philippines' },
          { value: 'SG', label: 'Singapore' },
          { value: 'TH', label: 'Thailand' },
          { value: 'VN', label: 'Vietnam' },
        ],
        searchable: true,
        size: 'lg',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.classes('lg')).toBeTruthy();

    const inputField = inputControl.get('.input-field');
    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('click');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    const optionsContainer = inputControl.find('.options');
    expect(optionsContainer.exists()).toBeTruthy();

    let options;

    options = optionsContainer.findAllComponents(TOption);
    expect(options.length).toBe(5);

    const searchField = inputControl.get('.search');
    expect(searchField.exists()).toBeTruthy();

    const searchInput = searchField.get('input');
    expect(searchInput.exists()).toBeTruthy();

    await searchInput.setValue('Thai');

    await flushPromises();

    options = optionsContainer.findAllComponents(TOption);
    expect(options.length).toBe(1);
    expect(options[0].props()).toEqual(expect.objectContaining({
      value: 'TH',
      label: 'Thailand',
      selected: false,
    }));

    await searchInput.trigger('keydown.esc');

    await flushPromises();

    options = optionsContainer.findAllComponents(TOption);
    expect(options.length).toBe(5);

    expect(inputField.classes('expanded')).toBeTruthy();

    await searchInput.trigger('keydown.esc');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();
  });

  test('when click clean toggle should clear selected option', async() => {
    const wrapper = mount(TSelect, {
      props: {
        modelValue: 'SG',
        label: 'Country',
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
    const inputFieldWrapper = inputField.get('.wrapper');
    const selectField = inputFieldWrapper.get('.select');

    const selected = selectField.get('.selected');
    expect(selected.text()).toBe('Singapore');

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');

    await cleanToggle.trigger('click');

    await flushPromises();

    const selectEvents = wrapper.emitted()['update:modelValue'];
    expect(selectEvents.length).toBe(1);
    expect(selectEvents[0]).toEqual([null]);
  });

  test('when keydown enter clean toggle should clear selected option', async() => {
    const wrapper = mount(TSelect, {
      props: {
        modelValue: 'SG',
        label: 'Country',
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

    const selected = selectField.get('.selected');
    expect(selected.text()).toBe('Singapore');

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');

    await cleanToggle.trigger('keydown.enter');

    await flushPromises();

    const selectEvents = wrapper.emitted()['update:modelValue'];
    expect(selectEvents.length).toBe(1);
    expect(selectEvents[0]).toEqual([null]);
  });

  test('when keydown backspace input field should clear selected option', async() => {
    const wrapper = mount(TSelect, {
      props: {
        modelValue: 'SG',
        label: 'Country',
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

    const selected = selectField.get('.selected');
    expect(selected.text()).toBe('Singapore');

    await inputField.trigger('keydown.backspace');

    await flushPromises();

    const selectEvents = wrapper.emitted()['update:modelValue'];
    expect(selectEvents.length).toBe(1);
    expect(selectEvents[0]).toEqual([null]);
  });

  test('when disabled should render disabled field', async() => {
    const wrapper = mount(TSelect, {
      props: {
        modelValue: 'SG',
        label: 'Country',
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
    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('click');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();
  });

  test('when given invalid option should render empty selected option', async() => {
    const wrapper = mount(TSelect, {
      props: {
        modelValue: 'IV',
        label: 'Country',
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

    const selected = selectField.get('.selected');
    expect(selected.text()).toBe('');
  });

  test('when given error message should render error message', async() => {
    const wrapper = mount(TSelect, {
      props: {
        modelValue: null,
        label: 'Country',
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

    const errorMessage = inputControl.get('.input-error');
    expect(errorMessage.exists()).toBeTruthy();
    expect(errorMessage.text()).toBe('Field is required');
  });
});
