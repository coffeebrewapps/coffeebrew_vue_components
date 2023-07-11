import { mount, flushPromises } from '@vue/test-utils';
import TTextarea from '../../src/js/form/TTextarea.vue';

beforeEach(() => {
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('TTextarea.vue', () => {
  test('should render textarea', async() => {
    const wrapper = mount(TTextarea, {
      props: {
        rows: 20,
        cols: 50,
        label: 'Description',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.exists()).toBeTruthy();
    expect(inputControl.classes('disabled')).toBeFalsy();

    const inputLabel = inputControl.get('.input-label');
    expect(inputLabel.exists()).toBeTruthy();
    expect(inputLabel.text()).toBe('Description');

    const inputField = inputControl.get('.input-field');
    expect(inputField.exists()).toBeTruthy();

    const inputFieldWrapper = inputField.get('.wrapper');
    expect(inputFieldWrapper.exists()).toBeTruthy();

    const rawTextarea = inputFieldWrapper.get('textarea');
    expect(rawTextarea.exists()).toBeTruthy();
    expect(rawTextarea.attributes('rows')).toBe('20');
    expect(rawTextarea.attributes('cols')).toBe('50');
    expect(rawTextarea.element.disabled).toBeFalsy();
    expect(rawTextarea.element.value).toBe('');

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');
    expect(cleanToggle.exists()).toBeTruthy();

    const errorMessage = inputControl.find('.input-error');
    expect(errorMessage.exists()).toBeFalsy();
  });

  test('when not given rows and cols should render textarea with defaults', async() => {
    const wrapper = mount(TTextarea, {
      props: {
        rows: null,
        cols: null,
        label: 'Description',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const rawTextarea = inputFieldWrapper.get('textarea');
    expect(rawTextarea.exists()).toBeTruthy();
    expect(rawTextarea.attributes('rows')).toBe('10');
    expect(rawTextarea.attributes('cols')).toBe('100');
  });

  test('when given error message should render input error', async() => {
    const wrapper = mount(TTextarea, {
      props: {
        label: 'Description',
        errorMessage: 'Field is required',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');

    const errorMessage = inputControl.get('.input-error');
    expect(errorMessage.exists()).toBeTruthy();
    expect(errorMessage.text()).toBe('Field is required');
  });

  test('when raw input change should emit changed value', async() => {
    const wrapper = mount(TTextarea, {
      props: {
        label: 'Name',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const rawTextarea = inputFieldWrapper.get('textarea');
    expect(rawTextarea.element.value).toBe('');

    rawTextarea.element.value = 'This is a one-stop software consulting company.';
    await rawTextarea.trigger('input');

    const inputEvents = wrapper.emitted()['update:modelValue'];
    expect(inputEvents.length).toBe(1);
    expect(inputEvents[0]).toEqual(['This is a one-stop software consulting company.']);
  });

  test('when click clean toggle should reset input', async() => {
    const wrapper = mount(TTextarea, {
      props: {
        modelValue: 'Coffee Brew Apps',
        label: 'Name',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');

    await cleanToggle.trigger('click');

    await flushPromises();

    const resetEvents = wrapper.emitted()['update:modelValue'];
    expect(resetEvents.length).toBe(1);
    expect(resetEvents[0]).toEqual([null]);
  });

  test('when clean toggle keydown enter should reset input', async() => {
    const wrapper = mount(TTextarea, {
      props: {
        modelValue: 'Coffee Brew Apps',
        label: 'Name',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');

    await cleanToggle.trigger('keydown.enter');

    await flushPromises();

    const resetEvents = wrapper.emitted()['update:modelValue'];
    expect(resetEvents.length).toBe(1);
    expect(resetEvents[0]).toEqual([null]);
  });

  test('when disabled should render disabled textarea', async() => {
    const wrapper = mount(TTextarea, {
      props: {
        modelValue: 'Coffee Brew Apps',
        label: 'Description',
        disabled: true,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.classes('disabled')).toBeTruthy();

    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const rawTextarea = inputFieldWrapper.get('textarea');
    expect(rawTextarea.exists()).toBeTruthy();
    expect(rawTextarea.element.disabled).toBeTruthy();
    expect(rawTextarea.element.value).toBe('Coffee Brew Apps');
  });
});
