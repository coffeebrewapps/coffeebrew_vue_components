import { mount, flushPromises } from '@vue/test-utils';
import TButton from '../../src/js/form/TButton.vue';
import TDateTimePicker from '../../src/js/form/TDateTimePicker.vue';

const mockIntersectionObserver = vi.fn();
const mockObserve = vi.fn(() => null);
const mockUnobserve = vi.fn(() => null);

beforeEach(() => {
  mockIntersectionObserver.mockReturnValue({
    observe: mockObserve,
    unobserve: mockUnobserve,
  });
  window.IntersectionObserver = mockIntersectionObserver;

  vi.useFakeTimers();
  vi.setSystemTime(new Date('2023-01-01T00:00:00.000'));
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe('TDateTimePicker.vue', () => {
  test('should render date picker', async() => {
    const wrapper = mount(TDateTimePicker, {
      props: {
        label: 'DoB',
        modelValue: new Date('2023-04-21T12:34:56.123'),
        alignPickers: 'bottom',
      },
    });

    await flushPromises();

    expect(mockObserve).toHaveBeenCalledTimes(6);

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.exists()).toBeTruthy();
    expect(inputControl.classes('disabled')).toBeFalsy();

    const inputLabel = inputControl.get('.input-label');
    expect(inputLabel.exists()).toBeTruthy();
    expect(inputLabel.text()).toBe('DoB');

    const inputField = inputControl.get('.input-field');
    expect(inputField.exists()).toBeTruthy();
    expect(inputField.classes('bottom-align')).toBeTruthy();
    expect(inputField.classes('collapsed')).toBeTruthy();

    const inputFieldWrapper = inputField.get('.wrapper');
    expect(inputFieldWrapper.exists()).toBeTruthy();

    const selectField = inputFieldWrapper.get('.select');
    expect(selectField.exists()).toBeTruthy();

    const selected = selectField.find('.selected');
    expect(selected.exists()).toBeTruthy();

    const displayInputs = selected.findAll('input');
    expect(displayInputs.length).toBe(6);
    expect(displayInputs[0].element.value).toBe('2023');
    expect(displayInputs[1].element.value).toBe('04');
    expect(displayInputs[2].element.value).toBe('21');
    expect(displayInputs[3].element.value).toBe('12');
    expect(displayInputs[4].element.value).toBe('34');
    expect(displayInputs[5].element.value).toBe('56');

    const errorMessage = inputControl.find('.input-error');
    expect(errorMessage.exists()).toBeFalsy();

    const cleanToggle = inputFieldWrapper.get('.clean-toggle');
    expect(cleanToggle.exists()).toBeTruthy();

    await cleanToggle.trigger('click');

    await flushPromises();

    let updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0]).toEqual([null]);

    const datePickers = inputField.get('.day.pickers');
    expect(datePickers.exists()).toBeTruthy();

    const yearPicker = datePickers.get('.year.picker');
    expect(yearPicker.exists()).toBeTruthy();
    expect(yearPicker.classes('hide')).toBeTruthy();

    const monthPicker = datePickers.get('.month.picker');
    expect(monthPicker.exists()).toBeTruthy();
    expect(monthPicker.classes('hide')).toBeTruthy();

    const dayPicker = datePickers.get('.day.picker');
    expect(dayPicker.exists()).toBeTruthy();
    expect(dayPicker.classes('hide')).toBeTruthy();

    const timePickers = inputField.get('.time.pickers');
    expect(timePickers.exists()).toBeTruthy();

    const hourPicker = timePickers.get('.hour.picker');
    expect(hourPicker.exists()).toBeTruthy();
    expect(hourPicker.classes('hide')).toBeTruthy();

    const minutePicker = timePickers.get('.minute.picker');
    expect(minutePicker.exists()).toBeTruthy();
    expect(minutePicker.classes('hide')).toBeTruthy();

    const secondPicker = timePickers.get('.second.picker');
    expect(secondPicker.exists()).toBeTruthy();
    expect(secondPicker.classes('hide')).toBeTruthy();

    // toggle date pickers
    await selectField.trigger('click');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();
    expect(yearPicker.classes('show')).toBeTruthy();
    expect(monthPicker.classes('hide')).toBeTruthy();
    expect(dayPicker.classes('hide')).toBeTruthy();
    expect(hourPicker.classes('hide')).toBeTruthy();
    expect(minutePicker.classes('hide')).toBeTruthy();
    expect(secondPicker.classes('hide')).toBeTruthy();

    const yearOptionsContainer = yearPicker.get('.options');
    expect(yearOptionsContainer.exists()).toBeTruthy();

    const yearOptions = yearOptionsContainer.findAll('.option');
    expect(yearOptions.length).toBe(201);
    expect(yearOptions[101].text()).toBe('2024');

    // choose year
    await yearOptions[101].trigger('click');

    await flushPromises();

    expect(yearPicker.classes('hide')).toBeTruthy();
    expect(monthPicker.classes('show')).toBeTruthy();

    const monthPickerTitle = monthPicker.get('.title');
    expect(monthPickerTitle.exists()).toBeTruthy();
    expect(monthPickerTitle.text()).toBe('2024');

    const monthOptionsContainer = monthPicker.get('.options');
    expect(monthOptionsContainer.exists()).toBeTruthy();

    const monthOptions = monthOptionsContainer.findAll('.option');
    expect(monthOptions.length).toBe(12);
    expect(monthOptions[10].text()).toBe('Nov');

    // choose month
    await monthOptions[10].trigger('click');

    await flushPromises();

    expect(yearPicker.classes('hide')).toBeTruthy();
    expect(monthPicker.classes('hide')).toBeTruthy();
    expect(dayPicker.classes('show')).toBeTruthy();

    const dayPickerTitle = dayPicker.get('.title');
    expect(dayPickerTitle.exists()).toBeTruthy();
    expect(dayPickerTitle.text()).toBe('Nov 2024');

    const dayOptionsContainer = dayPicker.get('.options');
    expect(dayOptionsContainer.exists()).toBeTruthy();

    const dayOptionsHeadings = dayOptionsContainer.findAll('.option.heading');
    expect(dayOptionsHeadings.length).toBe(7);
    expect(dayOptionsHeadings[0].text()).toBe('M');
    expect(dayOptionsHeadings[1].text()).toBe('T');
    expect(dayOptionsHeadings[2].text()).toBe('W');
    expect(dayOptionsHeadings[3].text()).toBe('T');
    expect(dayOptionsHeadings[4].text()).toBe('F');
    expect(dayOptionsHeadings[5].text()).toBe('S');
    expect(dayOptionsHeadings[6].text()).toBe('S');

    const dayOptions = dayOptionsContainer.findAll('.option.value');
    expect(dayOptions.length).toBe(34);
    expect(dayOptions[3].text()).toBe('');
    expect(dayOptions[4].text()).toBe('1');
    expect(dayOptions[17].text()).toBe('14');

    // choose day
    await dayOptions[17].trigger('click');

    await flushPromises();

    expect(yearPicker.classes('hide')).toBeTruthy();
    expect(monthPicker.classes('hide')).toBeTruthy();
    expect(dayPicker.classes('hide')).toBeTruthy();
    expect(hourPicker.classes('show')).toBeTruthy();
    expect(minutePicker.classes('show')).toBeTruthy();
    expect(secondPicker.classes('show')).toBeTruthy();

    const timePickersTitle = timePickers.get('.title');
    expect(timePickersTitle.exists()).toBeTruthy();
    expect(timePickersTitle.text()).toBe('14 Nov 2024');

    const hourOptionsContainer = hourPicker.get('.options');
    expect(hourOptionsContainer.exists()).toBeTruthy();

    const hourOptions = hourOptionsContainer.findAll('.option');
    expect(hourOptions.length).toBe(24);
    expect(hourOptions[9].text()).toBe('9');
    expect(hourOptions[9].classes('selected')).toBeFalsy();

    const minuteOptionsContainer = minutePicker.get('.options');
    expect(minuteOptionsContainer.exists()).toBeTruthy();

    const minuteOptions = minuteOptionsContainer.findAll('.option');
    expect(minuteOptions.length).toBe(60);
    expect(minuteOptions[27].text()).toBe('27');
    expect(minuteOptions[27].classes('selected')).toBeFalsy();

    const secondOptionsContainer = secondPicker.get('.options');
    expect(secondOptionsContainer.exists()).toBeTruthy();

    const secondOptions = secondOptionsContainer.findAll('.option');
    expect(secondOptions.length).toBe(60);
    expect(secondOptions[49].text()).toBe('49');
    expect(secondOptions[49].classes('selected')).toBeFalsy();

    const hourOptionSpy = vi.spyOn(hourOptions[0].element, 'focus');
    const minuteOptionSpy = vi.spyOn(minuteOptions[0].element, 'focus');
    const secondOptionSpy = vi.spyOn(secondOptions[0].element, 'focus');

    await hourOptions[0].trigger('keydown.right');

    await flushPromises();

    expect(minuteOptionSpy).toHaveBeenCalledTimes(1);

    await minuteOptions[0].trigger('keydown.right');

    await flushPromises();

    expect(secondOptionSpy).toHaveBeenCalled();

    await secondOptions[0].trigger('keydown.left');

    await flushPromises();

    expect(minuteOptionSpy).toHaveBeenCalledTimes(2);

    await minuteOptions[0].trigger('keydown.left');

    await flushPromises();

    expect(hourOptionSpy).toHaveBeenCalled();

    // choose hour
    await hourOptions[9].trigger('click');

    await flushPromises();

    expect(hourPicker.classes('show')).toBeTruthy();
    expect(minutePicker.classes('show')).toBeTruthy();
    expect(secondPicker.classes('show')).toBeTruthy();
    expect(hourOptions[9].classes('selected')).toBeTruthy();

    // choose minute
    await minuteOptions[27].trigger('click');

    await flushPromises();

    expect(hourPicker.classes('show')).toBeTruthy();
    expect(minutePicker.classes('show')).toBeTruthy();
    expect(secondPicker.classes('show')).toBeTruthy();
    expect(minuteOptions[27].classes('selected')).toBeTruthy();

    // choose second
    await secondOptions[49].trigger('click');

    await flushPromises();

    expect(hourPicker.classes('show')).toBeTruthy();
    expect(minutePicker.classes('show')).toBeTruthy();
    expect(secondPicker.classes('show')).toBeTruthy();
    expect(secondOptions[49].classes('selected')).toBeTruthy();

    // go back to previous parts
    await timePickersTitle.trigger('keydown.enter');

    expect(dayPicker.classes('show')).toBeTruthy();

    expect(dayPicker.get('.title').text()).toBe('Nov 2024');

    await flushPromises();

    await dayPickerTitle.trigger('keydown.enter');

    await flushPromises();

    expect(monthPicker.classes('show')).toBeTruthy();

    expect(monthPicker.get('.title').text()).toBe('2024');

    await monthPickerTitle.trigger('keydown.enter');

    await flushPromises();

    expect(yearPicker.classes('show')).toBeTruthy();

    await yearOptions[101].trigger('click');

    await flushPromises();

    expect(monthPicker.classes('show')).toBeTruthy();

    expect(monthPicker.get('.title').text()).toBe('2024');

    await monthOptions[10].trigger('click');

    await flushPromises();

    expect(dayPicker.classes('show')).toBeTruthy();

    expect(dayPicker.get('.title').text()).toBe('Nov 2024');

    await hourOptions[9].trigger('keydown.enter');

    await flushPromises();

    await minuteOptions[27].trigger('keydown.enter');

    await flushPromises();

    await secondOptions[49].trigger('keydown.enter');

    await flushPromises();

    const confirmButton = timePickers.getComponent(TButton);
    expect(confirmButton.exists()).toBeTruthy();

    await confirmButton.trigger('click');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(2);
    expect(updateEvents[0]).toEqual([null]);
    expect(updateEvents[1]).toEqual([new Date('2024-11-14T09:27:49')]);

    await wrapper.unmount();

    await flushPromises();

    expect(mockUnobserve).toHaveBeenCalledTimes(6);
  });

  test('when date changed should emit update event', async() => {
    const wrapper = mount(TDateTimePicker, {
      props: {
        label: 'DoB',
        modelValue: new Date('2023-04-21T12:34:56.123'),
        mondayStart: false,
        hour12: true,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const selectField = inputFieldWrapper.get('.select');
    const selected = selectField.find('.selected');

    const displayInputs = selected.findAll('input');
    expect(displayInputs.length).toBe(7);
    expect(displayInputs[0].element.value).toBe('2023');
    expect(displayInputs[1].element.value).toBe('04');
    expect(displayInputs[2].element.value).toBe('21');
    expect(displayInputs[3].element.value).toBe('12');
    expect(displayInputs[4].element.value).toBe('34');
    expect(displayInputs[5].element.value).toBe('56');
    expect(displayInputs[6].element.value).toBe('PM');

    const datePickers = inputField.get('.day.pickers');
    const yearPicker = datePickers.get('.year.picker');
    const monthPicker = datePickers.get('.month.picker');
    const dayPicker = datePickers.get('.day.picker');
    const timePickers = inputField.get('.time.pickers');
    const hourPicker = timePickers.get('.hour.picker');
    const minutePicker = timePickers.get('.minute.picker');
    const secondPicker = timePickers.get('.second.picker');

    // toggle date pickers
    await selectField.trigger('click');

    await flushPromises();

    const yearOptionsContainer = yearPicker.get('.options');
    const yearOptions = yearOptionsContainer.findAll('.option');
    const yearOptionValue = yearOptions[104].get('.value');
    expect(yearOptionValue.text()).toBe('2027');

    // choose year
    await yearOptionValue.trigger('keydown.enter');

    await flushPromises();

    const monthPickerTitle = monthPicker.get('.title');
    expect(monthPickerTitle.exists()).toBeTruthy();
    expect(monthPickerTitle.text()).toBe('21 Apr 2027');

    const monthOptionsContainer = monthPicker.get('.options');
    const monthOptions = monthOptionsContainer.findAll('.option');
    const monthOptionValue = monthOptions[8].get('.value');
    expect(monthOptionValue.text()).toBe('Sep');

    // choose month
    await monthOptionValue.trigger('keydown.enter');

    await flushPromises();

    const dayPickerTitle = dayPicker.get('.title');
    expect(dayPickerTitle.exists()).toBeTruthy();
    expect(dayPickerTitle.text()).toBe('21 Sep 2027');

    const dayOptionsContainer = dayPicker.get('.options');

    const dayOptionsHeadings = dayOptionsContainer.findAll('.option.heading');
    expect(dayOptionsHeadings.length).toBe(7);
    expect(dayOptionsHeadings[0].text()).toBe('S');
    expect(dayOptionsHeadings[1].text()).toBe('M');
    expect(dayOptionsHeadings[2].text()).toBe('T');
    expect(dayOptionsHeadings[3].text()).toBe('W');
    expect(dayOptionsHeadings[4].text()).toBe('T');
    expect(dayOptionsHeadings[5].text()).toBe('F');
    expect(dayOptionsHeadings[6].text()).toBe('S');

    const dayOptions = dayOptionsContainer.findAll('.option.value');
    expect(dayOptions.length).toBe(33);
    expect(dayOptions[2].text()).toBe('');
    expect(dayOptions[3].text()).toBe('1');
    const dayOptionValue = dayOptions[25].get('.value');
    expect(dayOptionValue.text()).toBe('23');

    // choose day
    await dayOptionValue.trigger('keydown.enter');

    await flushPromises();

    const timePickersTitle = timePickers.get('.title');
    expect(timePickersTitle.exists()).toBeTruthy();
    expect(timePickersTitle.text()).toBe('23 Sep 2027');

    const hourOptionsContainer = hourPicker.get('.options');
    const hourOptions = hourOptionsContainer.findAll('.option');
    expect(hourOptions[9].text()).toBe('9');
    expect(hourOptions[9].classes('selected')).toBeFalsy();

    // choose hour
    await hourOptions[9].trigger('keydown.enter');

    await flushPromises();

    expect(hourOptions[9].classes('selected')).toBeTruthy();

    const minuteOptionsContainer = minutePicker.get('.options');
    const minuteOptions = minuteOptionsContainer.findAll('.option');
    expect(minuteOptions[27].text()).toBe('27');
    expect(minuteOptions[27].classes('selected')).toBeFalsy();

    // choose minute
    await minuteOptions[27].trigger('keydown.enter');

    await flushPromises();

    expect(minuteOptions[27].classes('selected')).toBeTruthy();

    const secondOptionsContainer = secondPicker.get('.options');
    const secondOptions = secondOptionsContainer.findAll('.option');
    expect(secondOptions[49].text()).toBe('49');
    expect(secondOptions[49].classes('selected')).toBeFalsy();

    // choose second
    await secondOptions[49].trigger('keydown.enter');

    await flushPromises();

    expect(secondOptions[49].classes('selected')).toBeTruthy();

    // go back to previous parts
    await timePickersTitle.trigger('click');

    expect(dayPicker.classes('show')).toBeTruthy();

    expect(dayPicker.get('.title').text()).toBe('Sep 2027');

    await flushPromises();

    await dayPickerTitle.trigger('click');

    await flushPromises();

    expect(monthPicker.classes('show')).toBeTruthy();

    expect(monthPicker.get('.title').text()).toBe('2027');

    await monthPickerTitle.trigger('click');

    await flushPromises();

    expect(yearPicker.classes('show')).toBeTruthy();

    await yearOptions[104].trigger('click');

    await flushPromises();

    expect(monthPicker.classes('show')).toBeTruthy();

    expect(monthPicker.get('.title').text()).toBe('2027');

    await monthOptions[8].trigger('click');

    await flushPromises();

    expect(dayPicker.classes('show')).toBeTruthy();

    expect(dayPicker.get('.title').text()).toBe('Sep 2027');

    await hourOptions[9].trigger('keydown.enter');

    await flushPromises();

    await minuteOptions[27].trigger('keydown.enter');

    await flushPromises();

    await secondOptions[49].trigger('keydown.enter');

    await flushPromises();

    const confirmButton = timePickers.getComponent(TButton);

    await confirmButton.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0]).toEqual([new Date('2027-09-23T09:27:49')]);
  });

  test('when do not display time should hide times picker', async() => {
    const wrapper = mount(TDateTimePicker, {
      props: {
        label: 'DoB',
        modelValue: null,
        displayTime: false,
        min: new Date('1923-01-01'),
        max: new Date('2123-12-31'),
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const selectField = inputFieldWrapper.get('.select');
    const selected = selectField.find('.selected');
    const displayInputs = selected.findAll('input');
    expect(displayInputs.length).toBe(3);
    expect(displayInputs[0].element.value).toBe('');
    expect(displayInputs[1].element.value).toBe('');
    expect(displayInputs[2].element.value).toBe('');

    const datePickers = inputField.get('.day.pickers');
    expect(datePickers.exists()).toBeTruthy();

    const yearPicker = datePickers.get('.year.picker');
    const monthPicker = datePickers.get('.month.picker');
    const dayPicker = datePickers.get('.day.picker');

    const timePickers = inputField.get('.time.pickers');
    expect(timePickers.isVisible()).toBeFalsy();

    // toggle date pickers
    await selectField.trigger('click');

    await flushPromises();

    const yearOptionsContainer = yearPicker.get('.options');
    const yearOptions = yearOptionsContainer.findAll('.option');
    expect(yearOptions[100].text()).toBe('2023');

    // choose year
    await yearOptions[100].trigger('click');

    await flushPromises();

    const monthPickerTitle = monthPicker.get('.title');
    expect(monthPickerTitle.exists()).toBeTruthy();
    expect(monthPickerTitle.text()).toBe('2023');

    const monthOptionsContainer = monthPicker.get('.options');
    const monthOptions = monthOptionsContainer.findAll('.option');
    expect(monthOptions[9].text()).toBe('Oct');

    // choose month
    await monthOptions[9].trigger('click');

    await flushPromises();

    const dayPickerTitle = dayPicker.get('.title');
    expect(dayPickerTitle.exists()).toBeTruthy();
    expect(dayPickerTitle.text()).toBe('Oct 2023');

    const dayOptionsContainer = dayPicker.get('.options');
    const dayOptionsHeadings = dayOptionsContainer.findAll('.option.heading');
    expect(dayOptionsHeadings.length).toBe(7);
    expect(dayOptionsHeadings[0].text()).toBe('M');
    expect(dayOptionsHeadings[1].text()).toBe('T');
    expect(dayOptionsHeadings[2].text()).toBe('W');
    expect(dayOptionsHeadings[3].text()).toBe('T');
    expect(dayOptionsHeadings[4].text()).toBe('F');
    expect(dayOptionsHeadings[5].text()).toBe('S');
    expect(dayOptionsHeadings[6].text()).toBe('S');

    const dayOptions = dayOptionsContainer.findAll('.option.value');
    expect(dayOptions.length).toBe(37);
    expect(dayOptions[5].text()).toBe('');
    expect(dayOptions[6].text()).toBe('1');
    expect(dayOptions[17].text()).toBe('12');

    await dayOptions[5].trigger('click');

    await flushPromises();

    expect(dayPicker.classes('show')).toBeTruthy();

    await dayPickerTitle.trigger('click');

    await flushPromises();

    expect(monthPicker.classes('show')).toBeTruthy();

    expect(monthPicker.get('.title').text()).toBe('2023');

    await monthPickerTitle.trigger('click');

    await flushPromises();

    expect(yearPicker.classes('show')).toBeTruthy();

    await yearOptions[101].trigger('click');

    await flushPromises();

    expect(monthPicker.classes('show')).toBeTruthy();

    expect(monthPicker.get('.title').text()).toBe('2024');

    await monthOptions[4].trigger('click');

    await flushPromises();

    expect(dayPicker.classes('show')).toBeTruthy();

    expect(dayPicker.get('.title').text()).toBe('May 2024');

    await dayOptions[17].trigger('click');

    await flushPromises();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(1);
    expect(updateEvents[0]).toEqual([new Date('2024-05-16T00:00:00')]);

    await selectField.trigger('click');

    await flushPromises();

    expect(dayPicker.classes('show')).toBeTruthy();

    await selectField.trigger('click');

    await flushPromises();

    expect(dayPicker.classes('hide')).toBeTruthy();

    await wrapper.unmount();

    await flushPromises();

    expect(mockUnobserve).toHaveBeenCalledTimes(3);
  });

  test('when given error message should render error message', async() => {
    const wrapper = mount(TDateTimePicker, {
      props: {
        label: 'DoB',
        modelValue: null,
        errorMessage: 'Field is required',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');
    const inputFieldWrapper = inputField.get('.wrapper');
    const selectField = inputFieldWrapper.get('.select');
    const selected = selectField.find('.selected');
    const displayInputs = selected.findAll('input');
    expect(displayInputs.length).toBe(6);
    expect(displayInputs[0].element.value).toBe('');
    expect(displayInputs[1].element.value).toBe('');
    expect(displayInputs[2].element.value).toBe('');
    expect(displayInputs[3].element.value).toBe('');
    expect(displayInputs[4].element.value).toBe('');
    expect(displayInputs[5].element.value).toBe('');

    const errorMessage = inputControl.get('.input-error');
    expect(errorMessage.exists()).toBeTruthy();
    expect(errorMessage.text()).toBe('Field is required');

    const timePickers = inputField.get('.time.pickers');

    const confirmButton = timePickers.getComponent(TButton);
    expect(confirmButton.exists()).toBeTruthy();

    await confirmButton.trigger('click');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    expect(wrapper.emitted()['update:modelValue']).toBeUndefined();

    await wrapper.setProps({ modelValue: new Date('2023-05-12T23:42:17.342') });

    await flushPromises();

    expect(displayInputs[0].element.value).toBe('2023');
    expect(displayInputs[1].element.value).toBe('05');
    expect(displayInputs[2].element.value).toBe('12');
    expect(displayInputs[3].element.value).toBe('23');
    expect(displayInputs[4].element.value).toBe('42');
    expect(displayInputs[5].element.value).toBe('17');

    // toggle date pickers
    await selectField.trigger('click');

    await flushPromises();

    const hourPicker = timePickers.get('.hour.picker');
    const hourOptionsContainer = hourPicker.get('.options');
    const hourOptions = hourOptionsContainer.findAll('.option');
    expect(hourOptions[23].text()).toBe('23');
    expect(hourOptions[23].classes('selected')).toBeTruthy();

    const minutePicker = timePickers.get('.minute.picker');
    const minuteOptionsContainer = minutePicker.get('.options');
    const minuteOptions = minuteOptionsContainer.findAll('.option');
    expect(minuteOptions[42].text()).toBe('42');
    expect(minuteOptions[42].classes('selected')).toBeTruthy();

    const secondPicker = timePickers.get('.second.picker');
    const secondOptionsContainer = secondPicker.get('.options');
    const secondOptions = secondOptionsContainer.findAll('.option');
    expect(secondOptions[17].text()).toBe('17');
    expect(secondOptions[17].classes('selected')).toBeTruthy();

    const hourOptionSpy = vi.spyOn(hourOptions[23].element, 'focus');
    const minuteOptionSpy = vi.spyOn(minuteOptions[42].element, 'focus');
    const secondOptionSpy = vi.spyOn(secondOptions[17].element, 'focus');

    await secondOptions[17].trigger('keydown.left');

    await flushPromises();

    expect(minuteOptionSpy).toHaveBeenCalled();

    await minuteOptions[42].trigger('keydown.left');

    await flushPromises();

    expect(hourOptionSpy).toHaveBeenCalled();

    await hourOptions[23].trigger('keydown.right');

    await flushPromises();

    expect(minuteOptionSpy).toHaveBeenCalled();

    await minuteOptions[42].trigger('keydown.right');

    await flushPromises();

    expect(secondOptionSpy).toHaveBeenCalled();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    const datePickers = inputField.get('.day.pickers');

    await datePickers.trigger('keydown.esc');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    const datePickersCloseToggle = datePickers.get('.close-toggle');
    expect(datePickersCloseToggle.exists()).toBeTruthy();

    await datePickersCloseToggle.trigger('click');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    await datePickersCloseToggle.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    await timePickers.trigger('keydown.esc');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    const timePickersCloseToggle = timePickers.get('.close-toggle');
    expect(timePickersCloseToggle.exists()).toBeTruthy();

    await timePickersCloseToggle.trigger('click');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    await timePickersCloseToggle.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    expect(datePickers.find('.shortcuts').exists()).toBeFalsy();

    const dayPicker = datePickers.get('.day.picker');

    expect(dayPicker.classes('hide')).toBeTruthy();

    const timePickersTitle = timePickers.get('.title');
    expect(timePickersTitle.text()).toBe('12 May 2023');

    await timePickersTitle.trigger('click');

    expect(dayPicker.classes('show')).toBeTruthy();

    const dayPickerTitle = dayPicker.get('.title');
    expect(dayPickerTitle.exists()).toBeTruthy();
    expect(dayPickerTitle.text()).toBe('May 2023');

    const datePickersShortcuts = datePickers.get('.shortcuts');
    expect(datePickersShortcuts.exists()).toBeTruthy();

    const shortcuts = datePickersShortcuts.findAll('.shortcut-toggle');
    expect(shortcuts.length).toBe(3);

    const shortcutLeft = shortcuts[0];
    expect(shortcutLeft.html()).toContain('fa-caret-left');

    await shortcutLeft.trigger('click');

    await flushPromises();

    expect(dayPickerTitle.text()).toBe('Apr 2023');

    const shortcutRight = shortcuts[2];
    expect(shortcutRight.html()).toContain('fa-caret-right');

    await shortcutRight.trigger('click');

    await flushPromises();

    expect(dayPickerTitle.text()).toBe('May 2023');

    const shortcutToday = shortcuts[1];
    expect(shortcutToday.html()).toContain('Today');

    await shortcutToday.trigger('click');

    await flushPromises();

    const dayOptionsContainer = dayPicker.get('.options');
    const dayOptions = dayOptionsContainer.findAll('.option.value');
    expect(dayOptions[6].text()).toBe('1');
    expect(dayOptions[6].classes('today')).toBeTruthy();
    expect(dayOptions[6].classes('selected')).toBeTruthy();

    expect(timePickersTitle.text()).toBe('1 Jan 2023');

    expect(hourOptions[0].classes('selected')).toBeTruthy();
    expect(minuteOptions[0].classes('selected')).toBeTruthy();
    expect(secondOptions[0].classes('selected')).toBeTruthy();
  });

  test('when at min or max value should not render shortcut', async() => {
    const wrapper = mount(TDateTimePicker, {
      props: {
        label: 'DoB',
        modelValue: new Date('2023-03-01T00:00:00'),
        min: new Date('2023-01-01T00:00:00'),
        max: new Date('2025-12-31T23:59:59'),
        displayTime: false,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');

    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    const datePickers = inputField.get('.day.pickers');

    const dayPicker = datePickers.get('.day.picker');
    expect(dayPicker.classes('show')).toBeTruthy();

    const dayPickerTitle = dayPicker.get('.title');
    expect(dayPickerTitle.text()).toBe('Mar 2023');

    const datePickersShortcuts = datePickers.get('.shortcuts');

    const shortcuts = datePickersShortcuts.findAll('.shortcut-toggle');
    expect(shortcuts.length).toBe(3);

    const shortcutLeft = shortcuts[0];
    expect(shortcutLeft.classes('show')).toBeTruthy();

    await shortcutLeft.trigger('click');

    await flushPromises();

    expect(shortcutLeft.classes('show')).toBeTruthy();

    expect(dayPickerTitle.text()).toBe('Feb 2023');

    await shortcutLeft.trigger('click');

    await flushPromises();

    expect(shortcutLeft.classes('hide')).toBeTruthy();

    expect(dayPickerTitle.text()).toBe('Jan 2023');

    const monthPicker = datePickers.get('.month.picker');
    expect(monthPicker.classes('hide')).toBeTruthy();

    await dayPickerTitle.trigger('click');

    await flushPromises();

    expect(monthPicker.classes('show')).toBeTruthy();

    const monthPickerTitle = monthPicker.get('.title');
    expect(monthPickerTitle.text()).toBe('2023');

    expect(shortcutLeft.classes('hide')).toBeTruthy();

    const shortcutRight = shortcuts[2];
    expect(shortcutRight.classes('show')).toBeTruthy();

    await shortcutRight.trigger('click');

    await flushPromises();

    expect(monthPickerTitle.text()).toBe('2024');

    expect(shortcutRight.classes('show')).toBeTruthy();

    await shortcutRight.trigger('click');

    await flushPromises();

    expect(monthPickerTitle.text()).toBe('2025');

    expect(shortcutRight.classes('hide')).toBeTruthy();

    expect(shortcutLeft.classes('show')).toBeTruthy();

    await shortcutLeft.trigger('click');

    await flushPromises();

    expect(monthPickerTitle.text()).toBe('2024');

    const monthOptionsContainer = monthPicker.get('.options');
    const monthOptions = monthOptionsContainer.findAll('.option');
    expect(monthOptions[10].text()).toBe('Nov');

    await monthOptions[10].trigger('click');

    await flushPromises();

    expect(dayPicker.classes('show')).toBeTruthy();
    expect(dayPickerTitle.text()).toBe('Nov 2024');

    expect(shortcutRight.classes('show')).toBeTruthy();

    await shortcutRight.trigger('click');

    await flushPromises();

    expect(dayPickerTitle.text()).toBe('Dec 2024');

    expect(shortcutRight.classes('show')).toBeTruthy();

    await monthPickerTitle.trigger('click');

    await flushPromises();

    expect(shortcutRight.classes('show')).toBeTruthy();

    await shortcutRight.trigger('click');

    await flushPromises();

    await monthOptions[11].trigger('click');

    await flushPromises();

    expect(dayPickerTitle.text()).toBe('Dec 2025');

    expect(shortcutRight.classes('hide')).toBeTruthy();

    const shortcutToday = shortcuts[1];
    expect(shortcutToday.html()).toContain('Today');

    await shortcutToday.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();

    const updateEvents = wrapper.emitted()['update:modelValue'];
    expect(updateEvents.length).toBe(2);
    expect(updateEvents[1]).toEqual([new Date('2023-01-01T00:00:00')]);
  });

  test('when today is out of min or max value should not render today shortcut', async() => {
    const wrapper = mount(TDateTimePicker, {
      props: {
        label: 'DoB',
        modelValue: new Date('2020-03-01T00:00:00'),
        min: new Date('2009-01-01T00:00:00'),
        max: new Date('2022-12-31T23:59:59'),
        displayTime: false,
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    const inputField = inputControl.get('.input-field');

    expect(inputField.classes('collapsed')).toBeTruthy();

    await inputField.trigger('keydown.enter');

    await flushPromises();

    expect(inputField.classes('expanded')).toBeTruthy();

    const datePickers = inputField.get('.day.pickers');
    const datePickersShortcuts = datePickers.get('.shortcuts');

    const shortcuts = datePickersShortcuts.findAll('.shortcut-toggle');
    expect(shortcuts.length).toBe(3);

    const shortcutToday = shortcuts[1];
    expect(shortcutToday.classes('hide')).toBeTruthy();
  });

  test('when disabled should render disabled', async() => {
    const wrapper = mount(TDateTimePicker, {
      props: {
        label: 'DoB',
        modelValue: new Date('2023-04-21T12:34:56.123'),
        disabled: true,
        alignPickers: 'top',
      },
    });

    await flushPromises();

    const inputControl = wrapper.get('.input-control');
    expect(inputControl.exists()).toBeTruthy();
    expect(inputControl.classes('disabled')).toBeTruthy();

    const inputField = inputControl.get('.input-field');
    expect(inputField.exists()).toBeTruthy();
    expect(inputField.classes('top-align')).toBeTruthy();
    expect(inputField.classes('collapsed')).toBeTruthy();

    const inputFieldWrapper = inputField.get('.wrapper');
    const selectField = inputFieldWrapper.get('.select');

    await selectField.trigger('click');

    await flushPromises();

    expect(inputField.classes('collapsed')).toBeTruthy();
  });
});
