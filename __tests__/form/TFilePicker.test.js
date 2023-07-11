import { mount, flushPromises } from '@vue/test-utils';
import TDialog from '../../src/js/dialog/TDialog.vue';
import TButton from '../../src/js/form/TButton.vue';
import TFilePicker from '../../src/js/form/TFilePicker.vue';

const mockShowPicker = vi.fn();

beforeEach(() => {
  HTMLInputElement.prototype.showPicker = mockShowPicker;
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('TFilePicker.vue', () => {
  test('should render file picker', async() => {
    const wrapper = mount(TFilePicker, {
      props: {
        label: 'Logo',
        modelValue: new File([''], 'logo.png', {
          type: 'image/png',
        }),
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.exists()).toBeTruthy();
    expect(inputControl.classes('md')).toBeTruthy();
    expect(inputControl.classes('disabled')).toBeFalsy();

    const inputLabel = inputControl.get('.input-label');
    expect(inputLabel.exists()).toBeTruthy();
    expect(inputLabel.text()).toBe('Logo');

    const inputField = inputControl.get('.input-field');
    expect(inputField.exists()).toBeTruthy();

    const inputFieldWrapper = inputField.get('.wrapper');
    expect(inputFieldWrapper.exists()).toBeTruthy();

    const selectField = inputFieldWrapper.get('.select');
    expect(selectField.exists()).toBeTruthy();

    const selectedList = selectField.get('.selected-list');
    expect(selectedList.exists()).toBeTruthy();

    const selected = selectedList.findAll('.closeable-tag');
    expect(selected.length).toBe(1);

    const logoSelectedTag = selected[0];
    expect(logoSelectedTag.text()).toBe('logo.png');

    const fileInput = selectField.get('input');
    expect(fileInput.exists()).toBeTruthy();
    expect(fileInput.attributes('accept')).toBe('image/*,.pdf');
    expect(fileInput.attributes('multiple')).toBeFalsy();

    const previewToggle = inputFieldWrapper.get('.preview-toggle');
    expect(previewToggle.exists()).toBeTruthy();

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');
    expect(cleanToggle.exists()).toBeTruthy();

    const errorMessage = inputControl.find('.input-error');
    expect(errorMessage.exists()).toBeFalsy();

    const previewDialog = inputControl.find('.preview-dialog');
    expect(previewDialog.exists()).toBeFalsy();

    await selectField.trigger('click');

    await flushPromises();

    expect(mockShowPicker).toHaveBeenCalled();
  });

  test('when single select should update single file', async() => {
    const wrapper = mount(TFilePicker, {
      props: {
        label: 'Logo',
        modelValue: new File(['logo'], 'logo.png', {
          type: 'image/png',
        }),
        size: 'sm',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.classes('sm')).toBeTruthy();

    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const selectField = inputFieldWrapper.get('.select');
    const selectedList = selectField.get('.selected-list');

    const selected = selectedList.findAll('.closeable-tag');
    expect(selected.length).toBe(1);

    const fileInput = selectField.get('input');

    await fileInput.trigger('change');

    await flushPromises();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0][0]).toBeInstanceOf(File);
  });

  test('when multiple select should update list of files', async() => {
    const wrapper = mount(TFilePicker, {
      props: {
        label: 'Logo',
        modelValue: [
          new File(['logo'], 'logo.png', {
            type: 'image/png',
          }),
          new File(['banner'], 'banner.png', {
            type: 'image/png',
          }),
        ],
        multiple: true,
        size: 'lg',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.classes('lg')).toBeTruthy();

    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    await flushPromises();

    const selectField = inputFieldWrapper.get('.select');
    const selectedList = selectField.get('.selected-list');

    const selected = selectedList.findAll('.closeable-tag');
    expect(selected.length).toBe(2);

    const fileInput = selectField.get('input');

    await fileInput.trigger('change');

    await flushPromises();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0][0].length).toBe(2);
    expect(updateEvents[0][0][0]).toBeInstanceOf(File);
    expect(updateEvents[0][0][1]).toBeInstanceOf(File);
  });

  test('when click remove file should remove file from list', async() => {
    const wrapper = mount(TFilePicker, {
      props: {
        label: 'Logo',
        modelValue: [
          new File(['logo'], 'logo.png', {
            type: 'image/png',
          }),
          new File(['banner'], 'banner.png', {
            type: 'image/png',
          }),
        ],
        multiple: true,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();

    const previewToggle = inputFieldWrapper.get('.preview-toggle');

    await previewToggle.trigger('click');

    await flushPromises();

    const previewDialogComp = inputControl.getComponent(TDialog);
    expect(previewDialogComp.exists()).toBeTruthy();
    expect(previewDialogComp.props()).toEqual(expect.objectContaining({
      title: 'Preview Files',
    }));

    const previewDialogBody = previewDialogComp.get('.preview-tabs');
    expect(previewDialogBody.exists()).toBeTruthy();

    await flushPromises();

    const previewFiles = previewDialogBody.findAll('.preview-tab');
    expect(previewFiles.length).toBe(2);

    const previewLogo = previewFiles[0];
    expect(previewLogo.classes('selected')).toBeTruthy();
    const previewLogoFilename = previewLogo.get('.filename');
    expect(previewLogoFilename.text()).toBe('logo.png');

    const previewBanner = previewFiles[1];
    expect(previewBanner.classes('selected')).toBeFalsy();
    const previewBannerFilename = previewBanner.get('.filename');
    expect(previewBannerFilename.text()).toBe('banner.png');

    await previewBanner.trigger('click');

    await flushPromises();

    const previewContents = previewDialogComp.findAll('.preview-file');
    expect(previewContents.length).toBe(2);

    const previewLogoContent = previewContents[0];
    expect(previewLogoContent.classes('selected')).toBeFalsy();
    const previewLogoIframe = previewLogoContent.get('iframe');
    expect(previewLogoIframe.exists()).toBeTruthy();

    const previewBannerContent = previewContents[1];
    expect(previewBannerContent.classes('selected')).toBeTruthy();
    const previewBannerIframe = previewBannerContent.get('iframe');
    expect(previewBannerIframe.exists()).toBeTruthy();

    const dialogCloseButton = previewDialogComp.getComponent(TButton);

    await dialogCloseButton.trigger('click');

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();

    const selectField = inputFieldWrapper.get('.select');
    const selectedList = selectField.get('.selected-list');

    const selected = selectedList.findAll('.closeable-tag');
    expect(selected.length).toBe(2);

    const bannerSelectedTag = selected[1];
    expect(bannerSelectedTag.text()).toBe('banner.png');

    const removeIcon = bannerSelectedTag.get('i');
    expect(removeIcon.classes('fa-xmark')).toBeTruthy();

    await removeIcon.trigger('click');

    await flushPromises();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0][0].length).toBe(1);
    expect(updateEvents[0][0][0]).toBeInstanceOf(File);
    expect(updateEvents[0][0][0].name).toBe('logo.png');
  });

  test('when keydown backspace on closeable tag should remove file', async() => {
    const wrapper = mount(TFilePicker, {
      props: {
        label: 'Logo',
        modelValue: new File(['logo'], 'logo.png', {
          type: 'image/png',
        }),
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();

    const previewToggle = inputFieldWrapper.get('.preview-toggle');

    await previewToggle.trigger('click');

    await flushPromises();

    const previewDialogComp = inputControl.getComponent(TDialog);
    expect(previewDialogComp.exists()).toBeTruthy();
    expect(previewDialogComp.props()).toEqual(expect.objectContaining({
      title: 'Preview File',
    }));

    const previewDialogBody = previewDialogComp.get('.preview-tabs');
    expect(previewDialogBody.exists()).toBeTruthy();

    await flushPromises();

    const previewFiles = previewDialogBody.findAll('.preview-tab');
    expect(previewFiles.length).toBe(1);

    const previewLogo = previewFiles[0];
    expect(previewLogo.classes('selected')).toBeTruthy();
    const previewLogoFilename = previewLogo.get('.filename');
    expect(previewLogoFilename.text()).toBe('logo.png');

    const previewContents = previewDialogComp.findAll('.preview-file');
    expect(previewContents.length).toBe(1);

    const previewLogoContent = previewContents[0];
    expect(previewLogoContent.classes('selected')).toBeTruthy();
    const previewLogoIframe = previewLogoContent.get('iframe');
    expect(previewLogoIframe.exists()).toBeTruthy();

    await previewDialogComp.vm.$emit('update:modelValue', false);

    expect(inputControl.findComponent(TDialog).exists()).toBeFalsy();

    const selectField = inputFieldWrapper.get('.select');
    const selectedList = selectField.get('.selected-list');

    const selected = selectedList.findAll('.closeable-tag');
    expect(selected.length).toBe(1);

    const logoSelectedTag = selected[0];
    expect(logoSelectedTag.text()).toBe('logo.png');

    await logoSelectedTag.trigger('keydown.backspace');

    await flushPromises();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0]).toEqual([undefined]);
  });

  test('when given error message should render error message', async() => {
    const wrapper = mount(TFilePicker, {
      props: {
        label: 'Logo',
        modelValue: null,
        errorMessage: 'Field is required',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');

    const errorMessage = inputControl.find('.input-error');
    expect(errorMessage.exists()).toBeTruthy();
    expect(errorMessage.text()).toBe('Field is required');
  });

  test('when keydown backspace input field should clear selected files', async() => {
    const wrapper = mount(TFilePicker, {
      props: {
        label: 'Logo',
        modelValue: new File([''], 'logo.png', {
          type: 'image/png',
        }),
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');

    await inputField.trigger('keydown.backspace');

    await flushPromises();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0][0]).toBeNull();
  });

  test('when click clean toggle should clear selected files', async() => {
    const wrapper = mount(TFilePicker, {
      props: {
        label: 'Logo',
        modelValue: new File([''], 'logo.png', {
          type: 'image/png',
        }),
        multiple: true,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const cleanToggle = inputFieldWrapper.get('.clean-toggle');

    await cleanToggle.trigger('click');

    await flushPromises();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0][0]).toEqual([]);
  });

  test('when no value should render empty field', async() => {
    const wrapper = mount(TFilePicker, {
      props: {
        label: 'Logo',
        modelValue: null,
        multiple: true,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');

    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const selectField = inputFieldWrapper.get('.select');
    const selectedList = selectField.get('.selected-list');

    const selected = selectedList.findAll('.closeable-tag');
    expect(selected.length).toBe(0);

    const previewToggle = inputFieldWrapper.find('.preview-toggle');
    expect(previewToggle.exists()).toBeFalsy();
  });

  test('when disabled should render disabled', async() => {
    const wrapper = mount(TFilePicker, {
      props: {
        label: 'Logo',
        modelValue: new File([''], 'logo.png', {
          type: 'image/png',
        }),
        disabled: true,
        size: null,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.classes('disabled')).toBeTruthy();
    expect(inputControl.classes('md')).toBeFalsy();

    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const cleanToggle = inputFieldWrapper.get('.clean-toggle');

    await inputField.trigger('keydown.enter');

    await flushPromises();

    await cleanToggle.trigger('click');

    await flushPromises();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents).toBeUndefined();
  });
});
