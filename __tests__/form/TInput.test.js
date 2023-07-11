import { mount, flushPromises } from '@vue/test-utils';
import TInput from '../../src/js/form/TInput.vue';

beforeEach(() => {
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('TInput.vue', () => {
  test('should render text input', async() => {
    const wrapper = mount(TInput, {
      props: {
        label: 'Name',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.exists()).toBeTruthy();
    expect(inputControl.classes('md')).toBeTruthy();
    expect(inputControl.classes('disabled')).toBeFalsy();

    const inputLabel = inputControl.get('.input-label');
    expect(inputLabel.exists()).toBeTruthy();
    expect(inputLabel.text()).toBe('Name');

    const inputField = inputControl.get('.input-field');
    expect(inputField.exists()).toBeTruthy();
    expect(inputField.classes('text')).toBeTruthy();

    const inputFieldWrapper = inputField.get('.wrapper');
    expect(inputFieldWrapper.exists()).toBeTruthy();

    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.exists()).toBeTruthy();
    expect(rawInput.attributes('type')).toBe('text');
    expect(rawInput.attributes('step')).toBe('1');
    expect(rawInput.element.disabled).toBeFalsy();
    expect(rawInput.element.value).toBe('');

    const numberSpin = inputFieldWrapper.find('.number-spin-button');
    expect(numberSpin.exists()).toBeFalsy();

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');
    expect(cleanToggle.exists()).toBeTruthy();

    const errorMessage = inputControl.find('.input-error');
    expect(errorMessage.exists()).toBeFalsy();
  });

  test('when given error message should render input error', async() => {
    const wrapper = mount(TInput, {
      props: {
        label: 'Name',
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
    const wrapper = mount(TInput, {
      props: {
        label: 'Name',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.element.value).toBe('');

    rawInput.element.value = 'Coffee Brew Apps';
    await rawInput.trigger('input');

    const inputEvents = wrapper.emitted()['update:modelValue'];
    expect(inputEvents.length).toBe(1);
    expect(inputEvents[0]).toEqual(['Coffee Brew Apps']);
  });

  test('when click clean toggle should reset input', async() => {
    const wrapper = mount(TInput, {
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
    const wrapper = mount(TInput, {
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

  test('when disabled should render disabled input', async() => {
    const wrapper = mount(TInput, {
      props: {
        modelValue: 'Coffee Brew Apps',
        label: 'Name',
        disabled: true,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.classes('disabled')).toBeTruthy();

    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.exists()).toBeTruthy();
    expect(rawInput.attributes('type')).toBe('text');
    expect(rawInput.attributes('step')).toBe('1');
    expect(rawInput.element.disabled).toBeTruthy();
    expect(rawInput.element.value).toBe('Coffee Brew Apps');
  });

  test('when number type should render number input', async() => {
    const wrapper = mount(TInput, {
      props: {
        modelValue: 1,
        label: 'Starting Number',
        type: 'number',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');

    const inputField = inputControl.get('.input-field');
    expect(inputField.exists()).toBeTruthy();
    expect(inputField.classes('number')).toBeTruthy();

    const inputFieldWrapper = inputField.get('.wrapper');

    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.exists()).toBeTruthy();
    expect(rawInput.attributes('type')).toBe('number');
    expect(rawInput.attributes('step')).toBe('1');
    expect(rawInput.element.disabled).toBeFalsy();
    expect(rawInput.element.value).toBe('1');

    const numberSpin = inputFieldWrapper.find('.number-spin-button');
    expect(numberSpin.exists()).toBeTruthy();
  });

  test('when number type and input change should render parsed number', async() => {
    const wrapper = mount(TInput, {
      props: {
        modelValue: 1,
        label: 'Starting Number',
        type: 'number',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');

    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.element.value).toBe('1');

    rawInput.element.value = '3462';
    await rawInput.trigger('input');

    const inputEvents = wrapper.emitted()['update:modelValue'];
    expect(inputEvents.length).toBe(1);
    expect(inputEvents[0]).toEqual([3462]);
  });

  test('when increment number should render incremented number', async() => {
    const wrapper = mount(TInput, {
      props: {
        modelValue: 1,
        step: 2,
        label: 'Starting Number',
        type: 'number',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.element.value).toBe('1');

    const numberSpin = inputFieldWrapper.find('.number-spin-button');

    const incrementButton = numberSpin.get('.fa-caret-up');

    await incrementButton.trigger('click');

    const numberEvents = wrapper.emitted()['update:modelValue'];
    expect(numberEvents.length).toBe(1);
    expect(numberEvents[0]).toEqual([3]);
  });

  test('when decrement number should render decremented number', async() => {
    const wrapper = mount(TInput, {
      props: {
        modelValue: 6,
        step: 2,
        label: 'Starting Number',
        type: 'number',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.element.value).toBe('6');

    const numberSpin = inputFieldWrapper.find('.number-spin-button');

    const decrementButton = numberSpin.get('.fa-caret-down');

    await decrementButton.trigger('click');

    const numberEvents = wrapper.emitted()['update:modelValue'];
    expect(numberEvents.length).toBe(1);
    expect(numberEvents[0]).toEqual([4]);
  });

  test('when value is not number and increment number should do nothing', async() => {
    const wrapper = mount(TInput, {
      props: {
        modelValue: 'NaN',
        step: 2,
        label: 'Starting Number',
        type: 'number',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.element.value).toBe('');

    const numberSpin = inputFieldWrapper.find('.number-spin-button');

    const incrementButton = numberSpin.get('.fa-caret-up');

    await incrementButton.trigger('click');

    const numberEvents = wrapper.emitted()['update:modelValue'];
    expect(numberEvents).toBeUndefined();
  });

  test('when value is not number and decrement number should do nothing', async() => {
    const wrapper = mount(TInput, {
      props: {
        modelValue: 'NaN',
        step: 2,
        label: 'Starting Number',
        type: 'number',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.element.value).toBe('');

    const numberSpin = inputFieldWrapper.find('.number-spin-button');

    const decrementButton = numberSpin.get('.fa-caret-down');

    await decrementButton.trigger('click');

    const numberEvents = wrapper.emitted()['update:modelValue'];
    expect(numberEvents).toBeUndefined();
  });

  test('when number type and input change to not a number should render null', async() => {
    const wrapper = mount(TInput, {
      props: {
        modelValue: 1,
        label: 'Starting Number',
        type: 'number',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');

    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.element.value).toBe('1');

    rawInput.element.value = 'NaN';
    await rawInput.trigger('input');

    const inputEvents = wrapper.emitted()['update:modelValue'];
    expect(inputEvents.length).toBe(1);
    expect(inputEvents[0]).toEqual([null]);
  });

  test('when increment and decrement number should render updated number', async() => {
    const wrapper = mount(TInput, {
      props: {
        modelValue: 1,
        step: 2,
        label: 'Starting Number',
        type: 'number',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.element.value).toBe('1');

    const numberSpin = inputFieldWrapper.find('.number-spin-button');

    let numberEvents;

    const incrementButton = numberSpin.get('.fa-caret-up');

    await incrementButton.trigger('click');

    numberEvents = wrapper.emitted()['update:modelValue'];
    expect(numberEvents.length).toBe(1);
    expect(numberEvents[0]).toEqual([3]);

    await wrapper.setProps({ modelValue: 6 });

    const decrementButton = numberSpin.get('.fa-caret-down');

    await decrementButton.trigger('click');

    numberEvents = wrapper.emitted()['update:modelValue'];
    expect(numberEvents.length).toBe(2);
    expect(numberEvents[1]).toEqual([4]);
  });

  test('when value is not number and increment or decrement number should do nothing', async() => {
    const wrapper = mount(TInput, {
      props: {
        modelValue: 'NaN',
        step: 2,
        label: 'Starting Number',
        type: 'number',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    const rawInput = inputFieldWrapper.get('input');
    expect(rawInput.element.value).toBe('');

    const numberSpin = inputFieldWrapper.find('.number-spin-button');

    let numberEvents;

    const incrementButton = numberSpin.get('.fa-caret-up');

    await incrementButton.trigger('click');

    numberEvents = wrapper.emitted()['update:modelValue'];
    expect(numberEvents).toBeUndefined();

    const decrementButton = numberSpin.get('.fa-caret-down');

    await decrementButton.trigger('click');

    numberEvents = wrapper.emitted()['update:modelValue'];
    expect(numberEvents).toBeUndefined();
  });
});
