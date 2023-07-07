import { mount, flushPromises } from '@vue/test-utils';
import TProgressBar from '../src/js/TProgressBar.vue';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe('TProgressBar.vue', () => {
  test('should render progress bar', async() => {
    const wrapper = mount(TProgressBar, {
      props: {
        step: 50,
        speed: 50,
        bidirection: false,
        indefinite: false,
      },
    });

    await flushPromises();

    const progressBar = wrapper.get('.progress-bar');
    expect(progressBar.exists()).toBeTruthy();

    const forwardBar = progressBar.get('.forward-bar');
    expect(forwardBar.exists()).toBeTruthy();
    expect(forwardBar.classes('forward')).toBeTruthy();
    expect(forwardBar.attributes('style')).toBe('width: 0%;');

    const reverseBar = progressBar.get('.reverse-bar');
    expect(reverseBar.exists()).toBeTruthy();
    expect(reverseBar.classes('hide')).toBeTruthy();
    expect(reverseBar.attributes('style')).toBe('width: 100%;');
  });

  test('when uni direction definite should increase forward bar width until 100%', async() => {
    const wrapper = mount(TProgressBar, {
      props: {
        step: 50,
        speed: 50,
        bidirection: false,
        indefinite: false,
      },
    });

    await flushPromises();

    const progressBar = wrapper.get('.progress-bar');
    const forwardBar = progressBar.get('.forward-bar');
    expect(forwardBar.exists()).toBeTruthy();
    expect(forwardBar.classes('forward')).toBeTruthy();
    expect(forwardBar.attributes('style')).toBe('width: 0%;');

    const reverseBar = progressBar.get('.reverse-bar');
    expect(reverseBar.exists()).toBeTruthy();
    expect(reverseBar.classes('hide')).toBeTruthy();
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(10);

    expect(forwardBar.attributes('style')).toBe('width: 0%;');
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(40);

    expect(forwardBar.attributes('style')).toBe('width: 50%;');
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(50);

    expect(forwardBar.attributes('style')).toBe('width: 100%;');
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(50);

    expect(forwardBar.attributes('style')).toBe('width: 100%;');
    expect(reverseBar.attributes('style')).toBe('width: 100%;');
  });

  test('when uni direction and indefinite should increase forward bar width until 100% and reset', async() => {
    const wrapper = mount(TProgressBar, {
      props: {
        step: 10,
        speed: 10,
        bidirection: false,
        indefinite: true,
      },
    });

    await flushPromises();

    const progressBar = wrapper.get('.progress-bar');
    const forwardBar = progressBar.get('.forward-bar');
    expect(forwardBar.exists()).toBeTruthy();
    expect(forwardBar.classes('forward')).toBeTruthy();
    expect(forwardBar.attributes('style')).toBe('width: 0%;');

    const reverseBar = progressBar.get('.reverse-bar');
    expect(reverseBar.exists()).toBeTruthy();
    expect(reverseBar.classes('hide')).toBeTruthy();
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(10);

    expect(forwardBar.attributes('style')).toBe('width: 10%;');
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(40);

    expect(forwardBar.attributes('style')).toBe('width: 50%;');
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(50);

    expect(forwardBar.attributes('style')).toBe('width: 100%;');
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(10);

    expect(forwardBar.attributes('style')).toBe('width: 0%;');
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(30);

    expect(forwardBar.attributes('style')).toBe('width: 30%;');
    expect(reverseBar.attributes('style')).toBe('width: 100%;');
  });

  test('when bidirection and definite should increase forward bar width and reduce reverse bar width', async() => {
    const wrapper = mount(TProgressBar, {
      props: {
        step: 10,
        speed: 10,
        bidirection: true,
        indefinite: false,
      },
    });

    await flushPromises();

    const progressBar = wrapper.get('.progress-bar');
    const forwardBar = progressBar.get('.forward-bar');
    expect(forwardBar.exists()).toBeTruthy();
    expect(forwardBar.classes('forward')).toBeTruthy();
    expect(forwardBar.attributes('style')).toBe('width: 0%;');

    const reverseBar = progressBar.get('.reverse-bar');
    expect(reverseBar.exists()).toBeTruthy();
    expect(reverseBar.classes('forward')).toBeTruthy();
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(10);

    expect(forwardBar.attributes('style')).toBe('width: 10%;');
    expect(reverseBar.attributes('style')).toBe('width: 90%;');

    vi.advanceTimersByTime(40);

    expect(forwardBar.attributes('style')).toBe('width: 50%;');
    expect(reverseBar.attributes('style')).toBe('width: 50%;');

    vi.advanceTimersByTime(50);

    expect(forwardBar.attributes('style')).toBe('width: 100%;');
    expect(reverseBar.attributes('style')).toBe('width: 0%;');
  });

  test('when bidirection and indefinite should swing bars width back and forth', async() => {
    const wrapper = mount(TProgressBar, {
      props: {
        step: 10,
        speed: 10,
        bidirection: true,
        indefinite: true,
      },
    });

    await flushPromises();

    const progressBar = wrapper.get('.progress-bar');
    const forwardBar = progressBar.get('.forward-bar');
    expect(forwardBar.exists()).toBeTruthy();
    expect(forwardBar.classes('forward')).toBeTruthy();
    expect(forwardBar.attributes('style')).toBe('width: 0%;');

    const reverseBar = progressBar.get('.reverse-bar');
    expect(reverseBar.exists()).toBeTruthy();
    expect(reverseBar.classes('forward')).toBeTruthy();
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(10);

    expect(forwardBar.attributes('style')).toBe('width: 10%;');
    expect(reverseBar.attributes('style')).toBe('width: 90%;');

    vi.advanceTimersByTime(40);

    expect(forwardBar.attributes('style')).toBe('width: 50%;');
    expect(reverseBar.attributes('style')).toBe('width: 50%;');

    vi.advanceTimersByTime(50);

    expect(forwardBar.attributes('style')).toBe('width: 100%;');
    expect(reverseBar.attributes('style')).toBe('width: 0%;');

    vi.advanceTimersByTime(20);

    expect(forwardBar.attributes('style')).toBe('width: 80%;');
    expect(reverseBar.attributes('style')).toBe('width: 20%;');

    vi.advanceTimersByTime(80);

    expect(forwardBar.attributes('style')).toBe('width: 0%;');
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(30);

    expect(forwardBar.attributes('style')).toBe('width: 30%;');
    expect(reverseBar.attributes('style')).toBe('width: 70%;');

    vi.advanceTimersByTime(70);

    expect(forwardBar.attributes('style')).toBe('width: 100%;');
    expect(reverseBar.attributes('style')).toBe('width: 0%;');

    vi.advanceTimersByTime(10);

    expect(forwardBar.attributes('style')).toBe('width: 90%;');
    expect(reverseBar.attributes('style')).toBe('width: 10%;');
  });

  test('when bidirection and not indefinite should swing bars width back and forth once', async() => {
    const wrapper = mount(TProgressBar, {
      props: {
        step: 10,
        speed: 10,
        bidirection: true,
        indefinite: false,
      },
    });

    await flushPromises();

    const progressBar = wrapper.get('.progress-bar');
    const forwardBar = progressBar.get('.forward-bar');
    expect(forwardBar.exists()).toBeTruthy();
    expect(forwardBar.classes('forward')).toBeTruthy();
    expect(forwardBar.attributes('style')).toBe('width: 0%;');

    const reverseBar = progressBar.get('.reverse-bar');
    expect(reverseBar.exists()).toBeTruthy();
    expect(reverseBar.classes('forward')).toBeTruthy();
    expect(reverseBar.attributes('style')).toBe('width: 100%;');

    vi.advanceTimersByTime(10);

    expect(forwardBar.attributes('style')).toBe('width: 10%;');
    expect(reverseBar.attributes('style')).toBe('width: 90%;');

    vi.advanceTimersByTime(40);

    expect(forwardBar.attributes('style')).toBe('width: 50%;');
    expect(reverseBar.attributes('style')).toBe('width: 50%;');

    vi.advanceTimersByTime(50);

    expect(forwardBar.attributes('style')).toBe('width: 100%;');
    expect(reverseBar.attributes('style')).toBe('width: 0%;');

    vi.advanceTimersByTime(20);

    expect(forwardBar.attributes('style')).toBe('width: 100%;');
    expect(reverseBar.attributes('style')).toBe('width: 0%;');
  });
});
