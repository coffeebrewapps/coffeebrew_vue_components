import { mount, flushPromises } from '@vue/test-utils';
import TOption from '../../src/js/form/TOption.vue';

beforeEach(() => {
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('TOption.vue', () => {
  test('should render option unselected', async() => {
    const wrapper = mount(TOption, {
      props: {
        value: 'SGP',
        label: 'Singapore',
      },
    });

    await flushPromises();

    const option = wrapper.get('.option');
    expect(option.exists()).toBeTruthy();
    expect(option.classes('selected')).toBeFalsy();
    expect(option.text()).toBe('Singapore');
    expect(option.attributes('value')).toBe('SGP');

    await option.trigger('click');

    await flushPromises();

    const selectEvents = wrapper.emitted().select;
    expect(selectEvents.length).toBe(1);
    expect(selectEvents[0]).toEqual(['SGP']);
  });

  test('when selected should render option selected', async() => {
    const wrapper = mount(TOption, {
      props: {
        value: 'SGP',
        label: 'Singapore',
        selected: true,
      },
    });

    await flushPromises();

    const option = wrapper.get('.option');
    expect(option.exists()).toBeTruthy();
    expect(option.classes('selected')).toBeTruthy();
  });
});
