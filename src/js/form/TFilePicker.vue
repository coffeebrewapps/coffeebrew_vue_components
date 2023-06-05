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

const file = ref('file')
const selectedFile = computed(() => {
  if (props.multiple) {
    return {
      name: (props.modelValue || []).map(f => f.name).join(', '),
      files: props.modelValue || []
    }
  } else {
    return {
      name: (props.modelValue || {}).name,
      files: [props.modelValue || []].flat()
    }
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
  return selectedFile.value.files.length > 0
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

function toggleSelect() {
  file.value.showPicker()
}

function handleFileUpload(event) {
  if (props.multiple) {
    const length = event.target.files.length
    const files = []
    for (let i = 0; i < length; i++) {
      files.push(event.target.files[i])
    }
    emit('update:modelValue', files)
  } else {
    const file = event.target.files[0]
    emit('update:modelValue', file)
  }
}

function previewFile() {
  previewDialog.value = false
  rawFileContent.value = []
  previewFileError.value = null

  if (selectedFile.value) {
    const promises = selectedFile.value.files.map((file) => {
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
      class="input-field"
    >
      <div
        class="select"
        @click="toggleSelect"
      >
        <div
          class="selected"
        >
          <span v-if="hasSelectedFiles">
            {{ selectedFile.name }}
          </span>
        </div>

        <div class="toggle">
          <i class="fa-solid fa-file"></i>
        </div>

        <div
          v-if="hasSelectedFiles"
          class="filenames"
        >
          <div
            v-for="(filename, i) in selectedFile.name.split(', ')"
            :key="i"
            class="filename"
          >
            {{ filename }}
          </div>
        </div>
      </div>

      <input
        type="file"
        ref="file"
        :accept="accept"
        :multiple="multiple"
        @change="handleFileUpload"
      />

      <div
        v-if="hasSelectedFiles"
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

.input-control .input-field .select .filenames {
  display: none;
  position: absolute;
  top: 60px;
  padding: 0.5rem;
  width: 100%;
}

.input-control.sm .input-field .select .filenames {
  left: 50px;
}

.input-control .input-field .select .filenames,
.input-control.md .input-field .select .filenames {
  left: 100px;
}

.input-control.lg .input-field .select .filenames {
  left: 250px;
}

.input-control .input-field .select:hover .filenames {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-control .input-field .select .filenames .filename {
  padding: 4px;
  font-size: 0.8rem;
  text-align: left;
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
