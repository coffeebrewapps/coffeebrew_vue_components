import { mount, flushPromises } from '@vue/test-utils';
import TDialog from '../../src/js/dialog/TDialog.vue';
import TAlert from '../../src/js/dialog/TAlert.vue';

beforeEach(() => {
  vi.spyOn(window.screen, 'width', 'get').mockReturnValue(1980);
  vi.spyOn(window.screen, 'height', 'get').mockReturnValue(1440);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('TAlert.vue', () => {
  test('should render dialog', async() => {
    const wrapper = mount(TAlert, {
      props: {
        modelValue: true,
        width: 1000,
        height: 800,
        title: 'Save Record Error',
        content: 'ID is required',
        fullscreen: false,
      },
    });

    await flushPromises();

    const dialog = wrapper.getComponent(TDialog);
    expect(dialog.exists()).toBeTruthy();
    expect(dialog.props()).toEqual(expect.objectContaining({
      modelValue: true,
      width: 1000,
      height: 800,
      title: 'Save Record Error',
      fullscreen: false,
    }));

    const dialogBody = dialog.get('.body');
    expect(dialogBody.exists()).toBeTruthy();
    expect(dialogBody.text()).toBe('ID is required');
  });

  test('when close dialog should close confirm dialog', async() => {
    const wrapper = mount(TAlert, {
      props: {
        modelValue: true,
        width: 1000,
        height: 800,
        title: 'Save Record Error',
        content: 'ID is required',
        fullscreen: false,
      },
    });

    await flushPromises();

    const dialog = wrapper.getComponent(TDialog);
    expect(dialog.exists()).toBeTruthy();

    await dialog.vm.$emit('update:modelValue', false);

    await flushPromises();

    const modelEvents = wrapper.emitted()['update:modelValue'];
    expect(modelEvents.length).toBe(1);
    expect(modelEvents[0]).toEqual([false]);
  });
});
