import { mount, flushPromises } from '@vue/test-utils';
import TButton from '../../src/js/form/TButton.vue';

beforeEach(() => {
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('TButton.vue', () => {
  test('should render button with text', async() => {
    const wrapper = mount(TButton, {
      props: {
        value: 'Confirm',
        icon: 'fa-solid fa-check',
      },
    });

    await flushPromises();

    const button = wrapper.get('.button');
    expect(button.exists()).toBeTruthy();
    expect(button.classes('text')).toBeTruthy();
    expect(button.classes('md')).toBeTruthy();
    expect(button.classes('disabled')).toBeFalsy();
    expect(button.text()).toBe('Confirm');

    const icon = button.get('.fa-lg');
    expect(icon.exists()).toBeTruthy();
    expect(icon.classes('fa-solid')).toBeTruthy();
    expect(icon.classes('fa-check')).toBeTruthy();
  });

  test('when set to icon type should render button with only icon', async() => {
    const wrapper = mount(TButton, {
      props: {
        buttonType: 'icon',
        icon: 'fa-solid fa-check',
      },
    });

    await flushPromises();

    const button = wrapper.get('.button');
    expect(button.exists()).toBeTruthy();
    expect(button.classes('icon')).toBeTruthy();
    expect(button.classes('md')).toBeTruthy();
    expect(button.classes('disabled')).toBeFalsy();
    expect(button.text()).toBe('');

    const icon = button.get('.fa-lg');
    expect(icon.exists()).toBeTruthy();
    expect(icon.classes('fa-solid')).toBeTruthy();
    expect(icon.classes('fa-check')).toBeTruthy();
  });

  test('when set to disabled should render button with disabled', async() => {
    const wrapper = mount(TButton, {
      props: {
        icon: 'fa-solid fa-check',
        disabled: true,
      },
    });

    await flushPromises();

    const button = wrapper.get('.button');
    expect(button.exists()).toBeTruthy();
    expect(button.classes('text')).toBeTruthy();
    expect(button.classes('md')).toBeTruthy();
    expect(button.classes('disabled')).toBeTruthy();
    expect(button.text()).toBe('Button');

    const icon = button.get('.fa-lg');
    expect(icon.exists()).toBeTruthy();
    expect(icon.classes('fa-solid')).toBeTruthy();
    expect(icon.classes('fa-check')).toBeTruthy();
  });

  test('when click button should emit click event', async() => {
    const wrapper = mount(TButton, {
      props: {
        value: 'Confirm',
        icon: 'fa-solid fa-check',
      },
    });

    await flushPromises();

    const button = wrapper.get('.button');

    await button.trigger('click');

    await flushPromises();

    const clickEvents = wrapper.emitted().click;
    expect(clickEvents.length).toBe(1);
  });
});
