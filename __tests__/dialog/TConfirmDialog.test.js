import { mount, flushPromises } from '@vue/test-utils';
import TDialog from '../../src/js/dialog/TDialog.vue';
import TButton from '../../src/js/form/TButton.vue';
import TConfirmDialog from '../../src/js/dialog/TConfirmDialog.vue';

beforeEach(() => {
  vi.spyOn(window.screen, 'width', 'get').mockReturnValue(1980);
  vi.spyOn(window.screen, 'height', 'get').mockReturnValue(1440);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('TConfirmDialog.vue', () => {
  test('should render dialog', async() => {
    const wrapper = mount(TConfirmDialog, {
      props: {
        modelValue: true,
        width: 1000,
        height: 800,
        title: 'Delete Record',
        primaryText: 'Are you sure you want to delete the record?',
        secondaryText: 'Record ID 1',
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
      title: 'Delete Record',
      fullscreen: false,
    }));

    const dialogBody = dialog.get('.body');
    expect(dialogBody.exists()).toBeTruthy();

    const primaryText = dialogBody.get('.primary-text');
    expect(primaryText.exists()).toBeTruthy();
    expect(primaryText.text()).toBe('Are you sure you want to delete the record?');

    const secondaryText = dialogBody.get('.secondary-text');
    expect(secondaryText.exists()).toBeTruthy();
    expect(secondaryText.text()).toBe('Record ID 1');

    const dialogActions = dialog.get('.actions');
    expect(dialogActions.exists()).toBeTruthy();

    const actionButtons = dialogActions.findAllComponents(TButton);
    expect(actionButtons.length).toBe(2);

    const confirmButton = actionButtons[0];
    expect(confirmButton.props()).toEqual(expect.objectContaining({
      buttonType: 'text',
      value: 'Confirm',
      icon: 'fa-solid fa-check',
    }));

    const cancelButton = actionButtons[1];
    expect(cancelButton.props()).toEqual(expect.objectContaining({
      buttonType: 'text',
      value: 'Cancel',
      icon: 'fa-solid fa-xmark',
    }));
  });

  test('when close dialog should close confirm dialog', async() => {
    const wrapper = mount(TConfirmDialog, {
      props: {
        modelValue: true,
        width: 1000,
        height: 800,
        title: 'Delete Record',
        primaryText: 'Are you sure you want to delete the record?',
        secondaryText: 'Record ID 1',
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

  test('when click confirm button should emit confirm event and close dialog', async() => {
    const wrapper = mount(TConfirmDialog, {
      props: {
        modelValue: true,
        width: 1000,
        height: 800,
        title: 'Delete Record',
        primaryText: 'Are you sure you want to delete the record?',
        secondaryText: 'Record ID 1',
        fullscreen: false,
      },
    });

    await flushPromises();

    const dialog = wrapper.getComponent(TDialog);
    const dialogActions = dialog.get('.actions');
    const actionButtons = dialogActions.findAllComponents(TButton);

    const confirmButton = actionButtons[0];

    await confirmButton.trigger('click');

    await flushPromises();

    const confirmEvents = wrapper.emitted().confirm;
    expect(confirmEvents.length).toBe(1);

    const modelEvents = wrapper.emitted()['update:modelValue'];
    expect(modelEvents.length).toBe(1);
    expect(modelEvents[0]).toEqual([false]);
  });

  test('when confirm button keydown enter should emit confirm event and close dialog', async() => {
    const wrapper = mount(TConfirmDialog, {
      props: {
        modelValue: true,
        width: 1000,
        height: 800,
        title: 'Delete Record',
        primaryText: 'Are you sure you want to delete the record?',
        secondaryText: 'Record ID 1',
        fullscreen: false,
      },
    });

    await flushPromises();

    const dialog = wrapper.getComponent(TDialog);
    const dialogActions = dialog.get('.actions');
    const actionButtons = dialogActions.findAllComponents(TButton);

    const confirmButton = actionButtons[0];

    await confirmButton.trigger('keydown.enter');

    await flushPromises();

    const confirmEvents = wrapper.emitted().confirm;
    expect(confirmEvents.length).toBe(1);

    const modelEvents = wrapper.emitted()['update:modelValue'];
    expect(modelEvents.length).toBe(1);
    expect(modelEvents[0]).toEqual([false]);
  });

  test('when click cancel button should emit cancel event and close dialog', async() => {
    const wrapper = mount(TConfirmDialog, {
      props: {
        modelValue: true,
        width: 1000,
        height: 800,
        title: 'Delete Record',
        primaryText: 'Are you sure you want to delete the record?',
        secondaryText: 'Record ID 1',
        fullscreen: false,
      },
    });

    await flushPromises();

    const dialog = wrapper.getComponent(TDialog);
    const dialogActions = dialog.get('.actions');
    const actionButtons = dialogActions.findAllComponents(TButton);

    const cancelButton = actionButtons[1];

    await cancelButton.trigger('click');

    await flushPromises();

    const cancelEvents = wrapper.emitted().cancel;
    expect(cancelEvents.length).toBe(1);

    const modelEvents = wrapper.emitted()['update:modelValue'];
    expect(modelEvents.length).toBe(1);
    expect(modelEvents[0]).toEqual([false]);
  });

  test('when cancel button keydown enter should emit cancel event and close dialog', async() => {
    const wrapper = mount(TConfirmDialog, {
      props: {
        modelValue: true,
        width: 1000,
        height: 800,
        title: 'Delete Record',
        primaryText: 'Are you sure you want to delete the record?',
        secondaryText: 'Record ID 1',
        fullscreen: false,
      },
    });

    await flushPromises();

    const dialog = wrapper.getComponent(TDialog);
    const dialogActions = dialog.get('.actions');
    const actionButtons = dialogActions.findAllComponents(TButton);

    const cancelButton = actionButtons[1];

    await cancelButton.trigger('keydown.enter');

    await flushPromises();

    const cancelEvents = wrapper.emitted().cancel;
    expect(cancelEvents.length).toBe(1);

    const modelEvents = wrapper.emitted()['update:modelValue'];
    expect(modelEvents.length).toBe(1);
    expect(modelEvents[0]).toEqual([false]);
  });
});
