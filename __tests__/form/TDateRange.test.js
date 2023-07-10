import { defineComponent } from 'vue';
import { mount, flushPromises } from '@vue/test-utils';
import TDatePicker from '../../src/js/form/TDatePicker.vue';
import TDateRange from '../../src/js/form/TDateRange.vue';

vi.mock('../../src/js/form/TDatePicker.vue');

beforeEach(() => {
});

afterEach(() => {
  vi.restoreAllMocks();
});

const MockDatePicker = defineComponent({
  props: {
    modelValue: {
      type: Date,
      default: null,
    },
    min: {
      type: Date,
      default: null,
    },
    max: {
      type: Date,
      default: null,
    },
    label: {
      type: String,
      default: 'Input',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    alignPickers: {
      type: String,
      default: 'center',
    },
  },
  template: '<div class="date"></div>',
});

const stubs = {
  TDatePicker: MockDatePicker,
};

describe('TDateRange.vue', () => {
  test('should render date range', async() => {
    const wrapper = mount(TDateRange, {
      global: {
        stubs,
      },
      props: {
        label: 'Effective Range',
        startDate: new Date('2023-04-01T00:00:00.000Z'),
        endDate: new Date('2023-04-30T23:59:59.999Z'),
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.exists()).toBeTruthy();

    const inputLabel = inputControl.get('.input-label');
    expect(inputLabel.exists()).toBeTruthy();
    expect(inputLabel.text()).toBe('Effective Range');

    const inputField = inputControl.get('.input-field');
    expect(inputField.exists()).toBeTruthy();

    const datePickerComps = inputField.findAllComponents(TDatePicker);
    expect(datePickerComps.length).toBe(2);

    const startDatePickerComp = datePickerComps[0];
    expect(startDatePickerComp.props()).toEqual(expect.objectContaining({
      modelValue: new Date('2023-04-01T00:00:00.000Z'),
      label: '',
      disabled: false,
      min: null,
      max: null,
      alignPickers: 'top',
    }));

    const endDatePickerComp = datePickerComps[1];
    expect(endDatePickerComp.props()).toEqual(expect.objectContaining({
      modelValue: new Date('2023-04-30T23:59:59.999Z'),
      label: '',
      disabled: false,
      min: null,
      max: null,
      alignPickers: 'top',
    }));

    const errorMessage = inputControl.find('.input-error');
    expect(errorMessage.exists()).toBeFalsy();

    await startDatePickerComp.vm.$emit('update:modelValue', new Date('2023-05-01T00:00:00.000Z'));

    const updateStartDateEvents = wrapper.emitted()['update:startDate'];
    expect(updateStartDateEvents.length).toBe(1);
    expect(updateStartDateEvents[0]).toEqual([new Date('2023-05-01T00:00:00.000Z')]);

    await endDatePickerComp.vm.$emit('update:modelValue', new Date('2023-05-31T23:59:59.999Z'));

    const updateEndDateEvents = wrapper.emitted()['update:endDate'];
    expect(updateEndDateEvents.length).toBe(1);
    expect(updateEndDateEvents[0]).toEqual([new Date('2023-05-31T23:59:59.999Z')]);
  });

  test('when given error message should render error message', async() => {
    const wrapper = mount(TDateRange, {
      global: {
        stubs,
      },
      props: {
        label: 'Effective Range',
        startDate: null,
        endDate: null,
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
