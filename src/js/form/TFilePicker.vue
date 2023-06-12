<script setup>
import { onMounted, computed, ref } from 'vue'

import TDialog from '../dialog/TDialog.vue'
import TButton from '../form/TButton.vue'

const props = defineProps({
  modelValue: {
    type: [File, Array],
    default: null
  },
  multiple: {
    type: Boolean,
    default: false
  },
  accept: {
    type: String,
    default: 'image/*,.pdf'
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

const selectField = ref('selectField')
const file = ref('file')
const removeFileInput = ref('removeFileInput')
const previewFileInput = ref('previewFileInput')
const resetFieldInput = ref('resetFieldInput')

const selectedFiles = computed(() => {
  if (props.multiple) {
    return props.modelValue || []
  } else {
    return [props.modelValue || []].flat()
  }
})

const previewDialog = ref(false)
const rawFileContent = ref([])
const previewFileError = ref()

const previewDialogTitle = computed(() => {
  if (props.multiple) {
    return `Preview Files`
  } else {
    return `Preview File`
  }
})

const hasSelectedFiles = computed(() => {
  return selectedFiles.value.length > 0
})

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

const computedInputFieldClass = computed(() => {
  const className = []

  className.push(`input-field`)

  if (hasSelectedFiles.value) {
    className.push(`previewable`)
  }

  return className.join(' ')
})

function toggleSelect(event) {
  if (
    event instanceof KeyboardEvent &&
    (
      event.target === removeFileInput.value ||
      event.target === previewFileInput.value ||
      event.target === resetFieldInput.value
    )
  ) { return }

  if (props.disabled) { return }

  file.value.showPicker()
}

function handleFileUpload(event) {
  const length = event.target.files.length
  for (let i = 0; i < length; i++) {
    selectedFiles.value.push(event.target.files[i])
  }

  if (props.multiple) {
    emit('update:modelValue', selectedFiles.value)
  } else {
    const file = selectedFiles.value[0]
    emit('update:modelValue', file)
  }
}

function removeFile(index) {
  selectedFiles.value.splice(index, 1);
}

function previewFile() {
  previewDialog.value = false
  rawFileContent.value = []
  previewFileError.value = null

  if (selectedFiles.value) {
    const promises = selectedFiles.value.map((file) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        rawFileContent.value.push({ name: file.name, rawData: fileReader.result })
      }
      fileReader.onerror = (error) => {
        previewFileError.value = JSON.stringify(error, false, 4)
      }
      return fileReader
    })

    Promise.all(promises)
      .then((results) => {
        previewDialog.value = true
      })
  }
}

const currentPreviewFile = ref(0)

function viewFile(index) {
  currentPreviewFile.value = index
}

function previewTabStyle(index) {
  if (currentPreviewFile.value === index) {
    return `preview-tab selected`
  } else {
    return `preview-tab`
  }
}

function rawFileContentStyle(index) {
  if (currentPreviewFile.value === index) {
    return `preview-file selected`
  } else {
    return `preview-file`
  }
}

function closeDialog() {
  previewDialog.value = false
  rawFileContent.value = []
  previewFileError.value = null
  currentPreviewFile.value = 0
}

function resetField() {
  if (props.multiple) {
    emit('update:modelValue', [])
  } else {
    emit('update:modelValue', null)
  }
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
      tabindex="0"
      :class="computedInputFieldClass"
      @keydown.enter="toggleSelect"
      @keydown.backspace="resetField"
    >
      <div class="wrapper">
        <div
          class="select"
          ref="selectField"
          @click="toggleSelect"
        >
          <div class="selected-list">
            <div
              tabindex="0"
              class="closeable-tag"
              v-for="(selected, i) in selectedFiles"
              :key="i"
              @keydown.esc="removeFile(i)"
            >
              <div>{{ selected.name }}</div>
              <i
                ref="removeFileInput"
                class="fa-solid fa-xmark"
                @click="removeFile(i)"
              ></i>
            </div>
          </div>

          <div class="toggle">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>

          <input
            type="file"
            ref="file"
            :accept="accept"
            :multiple="multiple"
            @change="handleFileUpload"
          />
        </div>

        <div
          tabindex="0"
          ref="previewFileInput"
          v-if="hasSelectedFiles"
          class="preview-toggle"
          @click="previewFile"
          @keydown.enter="previewFile"
        >
          <i class="fa-solid fa-circle-info"></i>
        </div>

        <div
          tabindex="0"
          ref="resetFieldInput"
          class="clean-toggle"
          @click="resetField"
          @keydown.enter="resetField"
        >
          <i class="fa-solid fa-circle-xmark"></i>
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
        v-if="previewDialog"
        v-model="previewDialog"
        class="preview-dialog"
        :title="previewDialogTitle"
        :width="1000"
        :height="700"
      >
        <template #body>
          <div
            v-if="!previewFileError"
            class="preview-tabs"
          >
            <div
              v-for="(rawFile, i) in rawFileContent"
              :key="i"
              :class="previewTabStyle(i)"
              @click="viewFile(i)"
            >
              <div class="filename">{{ rawFile.name }}</div>
            </div>
          </div>

          <div
            v-for="(rawFile, i) in rawFileContent"
            :key="i"
            :class="rawFileContentStyle(i)"
          >
            <iframe
              :src="rawFile.rawData"
            />
          </div>

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
  min-width: 150px;
}

.input-control.md {
  min-width: 250px;
}

.input-control.lg {
  min-width: 500px;
}

.input-label {
  font-size: 0.8rem;
  min-height: 20px;
}

.input-field .wrapper {
  display: grid;
  grid-template-columns: auto 26px;
  align-items: center;
  margin: 2px 0 0 0;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.input-field.previewable .wrapper {
  grid-template-columns: auto 26px 26px;
}

.input-field .wrapper:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
  color: var(--color-text);
}

.input-field:focus {
  outline: none;
}

.input-field:focus .wrapper,
.input-field .select .selected-list .closeable-tag:focus,
.input-control .clean-toggle:focus,
.input-control .preview-toggle:focus {
  outline: 3px solid var(--color-border-hover);
}

.input-control.disabled .input-field .wrapper {
  grid-template-columns: auto;
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field .wrapper:hover {
  cursor: not-allowed;
}

.input-control .input-field .select {
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: center;
  text-align: center;
  padding: 12px;
  margin: 0;
  box-sizing: border-box;
  min-height: 50px;
}

.input-control .clean-toggle:hover,
.input-control .preview-toggle:hover {
  cursor: pointer;
  color: var(--color-border-hover);
}

.input-control.disabled .input-field .select {
  background-color: var(--color-background-mute);
}

.input-control.disabled .input-field .wrapper:hover {
  cursor: not-allowed;
}

.input-control .input-field input {
  position: absolute;
  visibility: hidden;
  width: 0;
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

.input-field .select .selected-list .closeable-tag i:hover {
  color: var(--color-border-hover);
}

.input-control.disabled .input-field .select .selected-list .closeable-tag i:hover {
  color: var(--color-text);
  cursor: not-allowed;
}

.input-field .clean-toggle {
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
}

.input-field .preview-toggle {
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
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

.preview-dialog .preview-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.preview-dialog .preview-tabs .preview-tab {
  padding: 0.5rem;
  font-size: 0.8rem;
}

.preview-dialog .preview-tabs .preview-tab.selected {
  font-weight: 600;
  border-bottom: 3px solid var(--color-border);
}

.preview-dialog .preview-tabs .preview-tab:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
}

.preview-dialog .preview-file {
  display: none;
  width: 100%;
  height: 100%;
}

.preview-dialog .preview-file.selected {
  display: flex;
}

.preview-dialog .preview-file iframe {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}
</style>
