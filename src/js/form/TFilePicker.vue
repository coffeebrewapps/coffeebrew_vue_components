<script setup>
import { onMounted, computed, ref } from 'vue'

import TDialog from '../dialog/TDialog.vue'
import TButton from '../form/TButton.vue'

const props = defineProps({
  modelValue: {
    type: File,
    default: null
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
        offset: 0,
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

const file = ref('file')
const selectedFile = ref()
const previewDialog = ref(false)
const rawFileContent = ref()
const previewFileError = ref()

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

function toggleSelect() {
  file.value.showPicker()
}

function handleFileUpload(event) {
  const file = event.target.files[0]
  selectedFile.value = file
  emit('update:modelValue', file)
}

function previewFile() {
  previewDialog.value = false
  rawFileContent.value = null
  previewFileError.value = null

  if (selectedFile.value) {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(selectedFile.value)
    fileReader.onload = () => {
      rawFileContent.value = fileReader.result
      previewDialog.value = true
    }
    fileReader.onerror = (error) => {
      previewFileError.value = JSON.stringify(error, false, 4)
      previewDialog.value = true
    }
  }
}

function closeDialog() {
  previewDialog.value = false
  rawFileContent.value = null
  previewFileError.value = null
}

function resetField() {
  selectedFile.value = null
  emit('update:modelValue', null)
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
      class="input-field"
    >
      <div
        class="select"
        @click="toggleSelect"
      >
        <div
          class="selected"
        >
          <span v-if="selectedFile">
            {{ selectedFile.name }}
          </span>
        </div>

        <div class="toggle">
          <i class="fa-solid fa-file"></i>
        </div>
      </div>

      <input
        type="file"
        ref="file"
        @change="handleFileUpload"
      />

      <div
        v-if="selectedFile"
        class="preview-toggle"
        @click="previewFile"
      >
        <i class="fa-solid fa-eye"></i>
      </div>

      <div
        class="clean-toggle"
        @click="resetField"
      >
        <i class="fa-solid fa-broom"></i>
      </div>
    </div>

    <div
      v-if="errorMessage.length > 0"
      class="input-error"
    >
      {{ errorMessage }}
    </div>

    <Transition name="dialog">
      <TDialog
        v-if="previewDialog"
        v-model="previewDialog"
        title="Preview File"
        :width="800"
        :height="600"
      >
        <template #body>
          <img
            v-if="rawFileContent"
            :src="rawFileContent"
          />

          <div
            v-if="previewFileError"
            class="error-alert"
          >
            {{ previewFileError }}
          </div>
        </template>

        <template #actions>
          <TButton button-type="text" value="Close" icon="fa-solid fa-check" @click="closeDialog()"/>
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
  min-height: 20px;
}

.input-control .input-field .select {
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: center;
  text-align: center;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-sizing: border-box;
  height: 50px;
}

.input-control .input-field .select .selected,
.input-control .input-field .select .selected span {
  font-size: 0.8rem;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.input-field .select:hover,
.input-control .clean-toggle:hover,
.input-control .preview-toggle:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-control.disabled .input-field .select {
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field .select:hover {
  cursor: not-allowed;
}

.input-control .input-field input {
  visibility: hidden;
  width: 0;
}

.input-field .clean-toggle {
  position: absolute;
  top: -20px;
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

.input-field .preview-toggle {
  position: absolute;
  bottom: 2px;
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

.input-control.disabled .clean-toggle,
.input-control.disabled .preview-toggle {
  display: none;
}

.input-error {
  margin-bottom: 8px;
  font-size: 0.8rem;
  color: var(--color-error);
}
</style>
