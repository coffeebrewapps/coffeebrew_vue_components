<script setup>
import { onMounted, computed, ref } from 'vue'

import TDialog from '../dialog/TDialog.vue'
import TInput from './TInput.vue'
import TCheckbox from './TCheckbox.vue'
import TTable from '../table/TTable.vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default() {
      return []
    }
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
  }
})

const emit = defineEmits(['update:modelValue', 'offsetChange'])

const tableDialog = ref(false)
const errorMessage = ref('')

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
  return `input-control ${props.size}`
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
  return props.modelValue
})

const selectedOptionsForDisplay = computed(() => {
  return selectedValues.value.map((selected) => {
    const found = (props.options || []).find(o => o.value === selected) || {}
    return found.label
  })
})

function toggleSelect() {
  tableDialog.value = !tableDialog.value
}

function updateSelected(row) {
  const found = selectedValues.value.findIndex(v => v === row.value)
  let updated = []
  if (found) {
    updated = Array.from(selectedValues.value).splice(found, 1)
  } else {
    updated = Array.from(selectedValues.value).push(row.value)
  }
  emit('update:modelValue', updated)
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
      v-if="errorMessage.length > 0"
      class="input-error"
    >
      {{ errorMessage }}
    </div>

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
    </TDialog>
  </div>
</template>

<style scoped>
.input-control {
  margin: 2px 0 8px 0;
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

.input-field:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-control .input-field .select {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
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
