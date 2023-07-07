import { mount, flushPromises } from '@vue/test-utils';
import TDialog from '../../src/js/dialog/TDialog.vue';

beforeEach(() => {
  vi.spyOn(window.screen, 'width', 'get').mockReturnValue(1980);
  vi.spyOn(window.screen, 'height', 'get').mockReturnValue(1440);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('TDialog.vue', () => {
  test('should render dialog', async() => {
    const wrapper = mount(TDialog, {
      props: {
        modelValue: true,
        width: 1000,
        height: 800,
        title: 'View Record',
        fullscreen: false,
      },
      slots: {
        body: {
          template: '<div>Hello world</div>',
        },
        actions: {
          template: '<div class="button">Close</div>',
        },
      },
    });

    await flushPromises();

    const dialog = wrapper.get('.dialog');
    expect(dialog.exists()).toBeTruthy();
    expect(dialog.classes('show')).toBeTruthy();

    const dialogWindow = dialog.get('.window');
    expect(dialogWindow.exists()).toBeTruthy();
    expect(dialogWindow.attributes('style')).toContain('width: 1000px;');
    expect(dialogWindow.attributes('style')).toContain('height: 800px;');

    const closeButton = dialogWindow.get('.close-button');
    expect(closeButton.exists()).toBeTruthy();

    const dialogContainer = dialog.get('.container');
    expect(dialogContainer.exists()).toBeTruthy();

    const dialogHeading = dialogContainer.get('.heading');
    expect(dialogHeading.exists()).toBeTruthy();
    expect(dialogHeading.text()).toBe('View Record');

    const dialogBody = dialogContainer.get('.body');
    expect(dialogBody.exists()).toBeTruthy();
    expect(dialogBody.text()).toBe('Hello world');

    const dialogActions = dialogContainer.get('.actions');
    expect(dialogActions.exists()).toBeTruthy();
    expect(dialogActions.text()).toBe('Close');

    await closeButton.trigger('click');

    await flushPromises();

    const closeEvents = wrapper.emitted()['update:modelValue'];
    expect(closeEvents.length).toBe(1);
    expect(closeEvents[0]).toEqual([false]);
  });

  test('when set to fullscreen should render dialog in fullscreen', async() => {
    const wrapper = mount(TDialog, {
      props: {
        modelValue: true,
        title: 'View Record',
        fullscreen: true,
      },
      slots: {
        body: {
          template: '<div>Hello world</div>',
        },
        actions: {
          template: '<div class="button">Close</div>',
        },
      },
    });

    await flushPromises();

    const dialog = wrapper.get('.dialog');
    expect(dialog.exists()).toBeTruthy();
    expect(dialog.classes('show')).toBeTruthy();

    const dialogWindow = dialog.get('.window');
    expect(dialogWindow.exists()).toBeTruthy();
    expect(dialogWindow.attributes('style')).toContain('width: 100vw;');
    expect(dialogWindow.attributes('style')).toContain('height: 100vh;');
  });

  test('when keydown esc should close dialog', async() => {
    const wrapper = mount(TDialog, {
      props: {
        modelValue: true,
        width: 1000,
        height: 800,
        title: 'View Record',
        fullscreen: false,
      },
      slots: {
        body: {
          template: '<div>Hello world</div>',
        },
        actions: {
          template: '<div class="button">Close</div>',
        },
      },
    });

    await flushPromises();

    const dialog = wrapper.get('.dialog');
    expect(dialog.exists()).toBeTruthy();
    expect(dialog.classes('show')).toBeTruthy();

    await document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Ctrl' }));

    await flushPromises();

    expect(wrapper.emitted()['update:modelValue']).toBeUndefined();

    await document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    await flushPromises();

    const closeEvents = wrapper.emitted()['update:modelValue'];
    expect(closeEvents.length).toBe(1);
    expect(closeEvents[0]).toEqual([false]);
  });

  test('when unmounted should remove event listener', async() => {
    const unregisterSpy = vi.spyOn(document, 'removeEventListener');

    const wrapper = mount(TDialog, {
      props: {
        modelValue: true,
        width: 1000,
        height: 800,
        title: 'View Record',
        fullscreen: false,
      },
      slots: {
        body: {
          template: '<div>Hello world</div>',
        },
        actions: {
          template: '<div class="button">Close</div>',
        },
      },
    });

    await flushPromises();

    wrapper.unmount();

    expect(unregisterSpy).toHaveBeenCalledWith('keydown', expect.anything());
  });
});
