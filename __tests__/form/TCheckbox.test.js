import { mount, flushPromises } from '@vue/test-utils';
import TCheckbox from '../../src/js/form/TCheckbox.vue';

beforeEach(() => {
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('TCheckbox.vue', () => {
  test('should render checkbox unchecked', async() => {
    const wrapper = mount(TCheckbox, {
      props: {
        label: 'Agree T&C',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.exists()).toBeTruthy();
    expect(inputControl.classes('sm')).toBeTruthy();

    const inputField = inputControl.get('.input-field');
    expect(inputField.exists()).toBeTruthy();

    const checkbox = inputField.get('.checkbox');
    expect(checkbox.exists()).toBeTruthy();
    expect(checkbox.classes('checked')).toBeFalsy();

    const inputLabel = inputField.get('.input-label');
    expect(inputLabel.exists()).toBeTruthy();
    expect(inputLabel.text()).toBe('Agree T&C');

    const errorMessage = inputControl.find('.input-error');
    expect(errorMessage.exists()).toBeFalsy();

    await inputControl.trigger('click');
  });

  test('when label is between 10 to 30 characters should render md size', async() => {
    const wrapper = mount(TCheckbox, {
      props: {
        label: 'I agree to the terms',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.exists()).toBeTruthy();
    expect(inputControl.classes('md')).toBeTruthy();
  });

  test('when label is more than 30 characters should render lg size', async() => {
    const wrapper = mount(TCheckbox, {
      props: {
        label: 'I agree to the terms and conditions',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.exists()).toBeTruthy();
    expect(inputControl.classes('lg')).toBeTruthy();
  });

  test('when unchecked click on input should emit checked event', async() => {
    const wrapper = mount(TCheckbox, {
      props: {
        label: 'Agree T&C',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');

    await inputControl.trigger('click');

    await flushPromises();

    const checkedEvents = wrapper.emitted()['update:modelValue'];
    expect(checkedEvents.length).toBe(1);
    expect(checkedEvents[0]).toEqual([true]);
  });

  test('when checked click on input should emit unchecked event', async() => {
    const wrapper = mount(TCheckbox, {
      props: {
        modelValue: true,
        label: 'Agree T&C',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');

    await inputControl.trigger('click');

    await flushPromises();

    const checkedEvents = wrapper.emitted()['update:modelValue'];
    expect(checkedEvents.length).toBe(1);
    expect(checkedEvents[0]).toEqual([false]);
  });

  test('when unchecked keydown enter should emit checked event', async() => {
    const wrapper = mount(TCheckbox, {
      props: {
        label: 'Agree T&C',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const checkbox = inputField.get('.checkbox');

    await checkbox.trigger('keydown.enter');

    await flushPromises();

    const checkedEvents = wrapper.emitted()['update:modelValue'];
    expect(checkedEvents.length).toBe(1);
    expect(checkedEvents[0]).toEqual([true]);
  });

  test('when disabled keydown enter should do nothing', async() => {
    const wrapper = mount(TCheckbox, {
      props: {
        label: 'Agree T&C',
        disabled: true,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const checkbox = inputField.get('.checkbox');

    await checkbox.trigger('keydown.enter');

    await flushPromises();

    const checkedEvents = wrapper.emitted()['update:modelValue'];
    expect(checkedEvents).toBeUndefined();
  });

  test('when given error message should render error message', async() => {
    const wrapper = mount(TCheckbox, {
      props: {
        label: 'Agree T&C',
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
