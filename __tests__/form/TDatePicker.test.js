import { defineComponent } from 'vue';
import { mount, flushPromises } from '@vue/test-utils';
import TDateTimePicker from '../../src/js/form/TDateTimePicker.vue';
import TDatePicker from '../../src/js/form/TDatePicker.vue';

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

describe('TDatePicker.vue', () => {
  test('should render date picker', async() => {
    const wrapper = mount(TDatePicker, {
      global: {
        stubs,
      },
      props: {
        label: 'DoB',
        modelValue: new Date('2023-04-21T12:34:56.123Z'),
      },
    });

    await flushPromises();

    const dateTimeComp = wrapper.getComponent(TDateTimePicker);
    expect(dateTimeComp.exists()).toBeTruthy();
    expect(dateTimeComp.props()).toEqual(expect.objectContaining({
      modelValue: new Date('2023-04-21T12:34:56.123Z'),
      min: null,
      max: null,
      label: 'DoB',
      displayTime: false,
      disabled: false,
      alignPickers: 'center',
      errorMessage: '',
    }));

    await dateTimeComp.vm.$emit('update:modelValue', new Date('2023-05-17T23:12:01.462Z'));

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0]).toEqual([new Date('2023-05-17T23:12:01.462Z')]);
  });
});
