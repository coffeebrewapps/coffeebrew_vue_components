<script setup>
import { onMounted, computed, ref } from 'vue'

import TDialog from '../dialog/TDialog.vue'
import TInput from './TInput.vue'
import TCheckbox from './TCheckbox.vue'
import TTable from '../table/TTable.vue'
import TButton from './TButton.vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default() {
      return []
    }
  },
  multiple: {
    type: Boolean,
    default: true
  },
  name: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md'
  },
  label: {
    type: String,
    default: 'Input'
  },
  optionsLoading: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    default() {
      return []
    }
  },
  optionsLength: {
    type: Number,
    default: 0
  },
  pagination: {
    type: Object,
    default() {
      return {
        limit: 5,
        client: true
      }
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'offsetChange'])

const tableDialog = ref(false)

const tableHeaders = computed(() => {
  return [
    { key: 'value', type: 'text', label: 'Value' },
    { key: 'label', type: 'text', label: 'Label' }
  ]
})

const actions = ref([
  {
    name: 'Select',
    icon: '',
    click: function(row, index) {
      updateSelected(row)
    }
  }
])

const computedInputControlClass = computed(() => {
  const className = []

  className.push(`input-control`)

  if (props.size) {
    className.push(props.size)
  }

  if (props.disabled) {
    className.push(`disabled`)
  }

  return className.join(' ')
})

function checkboxClass(row) {
  const found = selectedValues.value.find(v => v === row.value)
  if (found) {
    return `checkbox checked`
  } else {
    return `checkbox`
  }
}

const selectedValues = computed(() => {
  if (props.modelValue) {
    return props.modelValue.map(v => v.value)
  } else {
    return []
  }
})

const cachedOptionLabel = ref({})

const selectedOptionsForDisplay = computed(() => {
  if (props.modelValue) {
    return props.modelValue.map(v => v.label)
  } else {
    return []
  }
})

function toggleSelect() {
  if (props.disabled) { return; }

  tableDialog.value = !tableDialog.value
}

function closeSelect() {
  tableDialog.value = false
}

function resetField() {
  emit('update:modelValue', [])
}

function updateSelected(row) {
  if (props.multiple) {
    emit('update:modelValue', updateMultipleSelected(row))
  } else {
    emit('update:modelValue', updateSingleSelected(row))
  }
}

function updateMultipleSelected(row) {
  const dup = Array.from(props.modelValue || [])
  const found = selectedValues.value.findIndex(v => v === row.value)
  if (found < 0) { // not exists
    dup.push({ value: row.value, label: row.label })
  } else {
    dup.splice(found, 1)
  }
  return dup
}

function updateSingleSelected(row) {
  const dup = Array.from(props.modelValue || [])
  const found = selectedValues.value.findIndex(v => v === row.value)
  if (found < 0) { // not exists
    return [{ value: row.value, label: row.label }]
  } else {
    return []
  }
}

function updateOffsetAndReload(offset) {
  emit('offsetChange', offset)
}

onMounted(() => {
})
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
      class="input-field"
      @click="toggleSelect"
    >
      <div
        class="select"
      >
        <div
          class="selected"
          v-for="selected in selectedOptionsForDisplay"
        >
          <div class="tag">{{ selected }}</div>
        </div>
      </div>

      <div class="toggle">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>

    <div
      class="clean-toggle"
      @click="resetField"
    >
      <i class="fa-solid fa-broom"></i>
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
      >
        <template #body>
          <TTable
            :name="name"
            :headers="tableHeaders"
            :data="options"
            :actions="actions"
            :loading="optionsLoading"
            :total-data="optionsLength"
            :pagination="pagination"
            @offset-change="updateOffsetAndReload"
          >

            <template #data-action="{ row, action, i }">
              <div
                :class="checkboxClass(row)"
              >
              </div>
            </template>
          </TTable>
        </template>

        <template #actions>
          <TButton button-type="text" value="Done" icon="fa-solid fa-check" @click="closeSelect()"/>
        </template>
      </TDialog>
    </Transition>
  </div>
</template>

<style scoped>
.input-control {
  margin: 2px 8px 8px 0;
}

.input-control.sm {
  width: 100px;
}

.input-control.md {
  width: 200px;
}

.input-control.lg {
  width: 500px;
}

.input-label {
  font-size: 0.8rem;
}

.input-field {
  display: flex;
  align-items: center;
  padding: 12px;
  margin: 2px 0 8px 0;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-sizing: border-box;
}

.input-field:hover,
.input-control .clean-toggle:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-control.disabled .input-field {
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field:hover {
  cursor: not-allowed;
}

.input-control .input-field .select {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
}

.input-control .clean-toggle {
  position: absolute;
  top: 2px;
  right: -12px;
  z-index: 1;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--color-border);
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
