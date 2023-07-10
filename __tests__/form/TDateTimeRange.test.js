import { defineComponent } from 'vue';
import { mount, flushPromises } from '@vue/test-utils';
import TDateTimePicker from '../../src/js/form/TDateTimePicker.vue';
import TDateTimeRange from '../../src/js/form/TDateTimeRange.vue';

vi.mock('../../src/js/form/TDateTimePicker.vue');

beforeEach(() => {
});

afterEach(() => {
  vi.restoreAllMocks();
});

const MockDateTimePicker = defineComponent({
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
      default: '',
    },
    displayTime: {
      type: Boolean,
      default: false,
    },
    hour12: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      defualt: false,
    },
    alignPickers: {
      type: String,
      default: 'center',
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  template: '<div class="datetime"></div>',
});

const stubs = {
  TDateTimePicker: MockDateTimePicker,
};

describe('TDateTimeRange.vue', () => {
  test('should render date range', async() => {
    const wrapper = mount(TDateTimeRange, {
      global: {
        stubs,
      },
      props: {
        label: 'Effective Range',
        startTime: new Date('2023-04-01T00:00:00.000Z'),
        endTime: new Date('2023-04-30T23:59:59.999Z'),
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

    const datePickerComps = inputField.findAllComponents(TDateTimePicker);
    expect(datePickerComps.length).toBe(2);

    const startTimePickerComp = datePickerComps[0];
    expect(startTimePickerComp.props()).toEqual(expect.objectContaining({
      modelValue: new Date('2023-04-01T00:00:00.000Z'),
      label: '',
      disabled: false,
      hour12: false,
      min: null,
      max: null,
      alignPickers: 'top',
    }));

    const endTimePickerComp = datePickerComps[1];
    expect(endTimePickerComp.props()).toEqual(expect.objectContaining({
      modelValue: new Date('2023-04-30T23:59:59.999Z'),
      label: '',
      disabled: false,
      hour12: false,
      min: null,
      max: null,
      alignPickers: 'top',
    }));

    const errorMessage = inputControl.find('.input-error');
    expect(errorMessage.exists()).toBeFalsy();

    await startTimePickerComp.vm.$emit('update:modelValue', new Date('2023-05-01T00:00:00.000Z'));

    const updateStartDateEvents = wrapper.emitted()['update:startTime'];
    expect(updateStartDateEvents.length).toBe(1);
    expect(updateStartDateEvents[0]).toEqual([new Date('2023-05-01T00:00:00.000Z')]);

    await endTimePickerComp.vm.$emit('update:modelValue', new Date('2023-05-31T23:59:59.999Z'));

    const updateEndDateEvents = wrapper.emitted()['update:endTime'];
    expect(updateEndDateEvents.length).toBe(1);
    expect(updateEndDateEvents[0]).toEqual([new Date('2023-05-31T23:59:59.999Z')]);
  });

  test('when given error message should render error message', async() => {
    const wrapper = mount(TDateTimeRange, {
      global: {
        stubs,
      },
      props: {
        label: 'Effective Range',
        startTime: null,
        endTime: null,
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
