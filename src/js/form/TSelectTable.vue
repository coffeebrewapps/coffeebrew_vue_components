<script setup>
import { computed, ref } from 'vue';

import TDialog from '../dialog/TDialog.vue';
import TTable from '../table/TTable.vue';
import TButton from './TButton.vue';

const props = defineProps({
  modelValue: {
    type: Array,
    default() {
      return [];
    },
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
  label: {
    type: String,
    default: 'Input',
  },
  optionsLoading: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    default() {
      return [];
    },
  },
  optionsLength: {
    type: Number,
    default: 0,
  },
  pagination: {
    type: Object,
    default() {
      return {
        offset: 0,
        limit: 5,
        client: true,
      };
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'offsetChange']);

const inputField = ref('inputField');
const selectField = ref('selectField');
const cleanToggle = ref('cleanToggle');
const tableDialog = ref(false);

const tableHeaders = computed(() => {
  return [
    { key: 'value', type: 'text', label: 'Value' },
    { key: 'label', type: 'text', label: 'Label' },
    { key: 'selected', type: 'text', label: '' },
  ];
});

const actions = ref([
]);

const computedInputControlClass = computed(() => {
  const className = [];

  className.push(`input-control`);

  if (props.size) {
    className.push(props.size);
  }

  if (props.disabled) {
    className.push(`disabled`);
  }

  return className.join(' ');
});

function checkboxClass(row) {
  const found = selectedValues.value.find(v => v === row.value);
  if (found) {
    return `checkbox checked`;
  } else {
    return `checkbox`;
  }
}

const selectedValues = computed(() => {
  return (props.modelValue ?? []).map(v => v.value);
});

const selectedOptionsForDisplay = computed(() => {
  return (props.modelValue ?? []).map(v => v.label);
});

function toggleSelect(event) {
  if (props.disabled) { return; }

  event.preventDefault();
  event.stopImmediatePropagation();

  tableDialog.value = !tableDialog.value;
}

function closeSelect(event) {
  if (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  tableDialog.value = false;
}

function removeSelected(index, event) {
  if (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  const row = props.modelValue[index];
  updateSelected(row);
}

function resetField(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  emit('update:modelValue', []);
}

function updateSelected(row) {
  if (props.multiple) {
    emit('update:modelValue', updateMultipleSelected(row));
  } else {
    emit('update:modelValue', updateSingleSelected(row));
  }
}

function updateMultipleSelected(row) {
  const dup = Array.from(props.modelValue);
  const found = selectedValues.value.findIndex(v => v === row.value);
  if (found < 0) { // not exists
    dup.push({ value: row.value, label: row.label });
  } else {
    dup.splice(found, 1);
  }
  return dup;
}

function updateSingleSelected(row) {
  return [{ value: row.value, label: row.label }];
}

function updateOffsetAndReload(offset) {
  emit('offsetChange', offset);
}
</script>

<template>
  <div
    :class="computedInputControlClass"
  >
    <div
      class="input-label"
    >
      {{ label }}
    </div>

    <div
      ref="inputField"
      tabindex="0"
      class="input-field"
      @click="toggleSelect"
      @keydown.enter="toggleSelect"
      @keydown.esc="closeSelect"
      @keydown.backspace="resetField"
    >
      <div class="wrapper">
        <div
          ref="selectField"
          class="select"
        >
          <div class="selected-list">
            <div
              v-for="(selected, i) in selectedOptionsForDisplay"
              :key="i"
              class="selected"
            >
              <div
                tabindex="0"
                class="closeable-tag"
                @keydown.backspace="removeSelected(i, $event)"
              >
                <span>{{ selected }}</span>
                <i
                  class="fa-solid fa-xmark"
                  @click="removeSelected(i)"
                />
              </div>
            </div>
          </div>

          <div class="toggle">
            <i class="fa-solid fa-magnifying-glass" />
          </div>
        </div>

        <div
          ref="cleanToggle"
          tabindex="0"
          class="clean-toggle"
          @click="resetField"
          @keydown.enter="resetField"
        >
          <i class="fa-solid fa-circle-xmark" />
        </div>
      </div> <!-- wrapper -->
    </div>

    <div
      v-if="errorMessage.length > 0"
      class="input-error"
    >
      {{ errorMessage }}
    </div>

    <Transition name="dialog">
      <TDialog
        v-if="tableDialog"
        v-model="tableDialog"
        title="Select"
        :width="800"
        :height="600"
        class="options-dialog"
        @keydown.esc="closeSelect"
      >
        <template #body>
          <TTable
            :name="name"
            :headers="tableHeaders"
            :data="options"
            :actions="actions"
            :row-action="updateSelected"
            :loading="optionsLoading"
            :total-data="optionsLength"
            :pagination="pagination"
            @offset-change="updateOffsetAndReload"
          >
            <template #[`data-col.selected`]="{ row }">
              <div
                :class="checkboxClass(row)"
              />
            </template>
          </TTable>
        </template>

        <template #actions>
          <TButton
            button-type="text"
            value="Done"
            icon="fa-solid fa-check"
            @click="closeSelect"
            @keydown.enter="closeSelect"
          />
        </template>
      </TDialog>
    </Transition>
  </div>
</template>

<style scoped>
.input-control {
  margin: 2px 0 0 0;
}

.input-control.sm {
  width: 150px;
}

.input-control.md {
  width: 250px;
}

.input-control.lg {
  width: 500px;
}

.input-label {
  font-size: 0.8rem;
  min-height: 20px;
}

.input-field:focus {
  outline: none;
}

.input-field .wrapper {
  display: grid;
  grid-template-columns: auto 26px;
  align-items: center;
  margin: 2px 0 8px 0;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.input-field .select {
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: center;
  text-align: center;
  padding: 12px;
  margin: 0;
  box-sizing: border-box;
  min-height: 50px;
}

.input-field .wrapper:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-field:focus .wrapper,
.input-control .clean-toggle:focus,
.checkbox:focus {
  outline: 3px solid var(--color-border-hover);
}

.input-control.disabled .input-field .wrapper {
  grid-template-columns: auto;
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field .wrapper:hover {
  cursor: not-allowed;
}

.input-field .select .selected-list {
  display: flex;
  flex-wrap: wrap;
}

.input-field .select .selected-list .closeable-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  min-height: 20px;
  text-align: center;
  margin: 4px;
  padding: 0.4rem 0.8rem;
  gap: 8px;
  border-radius: 4px;
  background-color: var(--color-background-soft);
  color: var(--color-text);
}

.input-field .select .selected-list .closeable-tag:focus {
  outline: 3px solid var(--color-border-hover);
}

.input-field .select .selected-list .closeable-tag i:hover {
  color: var(--color-border-hover);
}

.input-control.disabled .input-field .select .selected-list .closeable-tag i:hover {
  color: var(--color-text);
  cursor: not-allowed;
}

.input-control .clean-toggle {
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
}

.input-control .clean-toggle:hover {
  cursor: pointer;
  color: var(--color-background);
}

.input-control.disabled .clean-toggle {
  display: none;
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}

.options-dialog .checkbox {
  display: grid;
  align-items: center;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid var(--color-border);
}

.options-dialog .checkbox.checked {
  background-color: var(--color-border-hover);
}
</style>
