<script setup>
import { computed, ref } from 'vue';

import TDialog from './TDialog.vue';
import TButton from '../form/TButton.vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 800,
  },
  height: {
    type: Number,
    default: 600,
  },
  title: {
    type: String,
    default: '',
  },
  primaryText: {
    type: String,
    default: '',
  },
  secondaryText: {
    type: String,
    default: '',
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel']);

const dialog = ref('dialog');
const dialogShow = computed({
  get: () => {
    return props.modelValue;
  },
  set: (val) => {
    emit('update:modelValue', val);
  },
});

function confirm() {
  emit('update:modelValue', false);
  emit('confirm');
}

function cancel() {
  emit('update:modelValue', false);
  emit('cancel');
}
</script>

<template>
  <TDialog
    ref="dialog"
    v-model="dialogShow"
    :width="width"
    :height="height"
    :title="title"
    :fullscreen="fullscreen"
  >
    <template #body>
      <div
        class="primary-text"
      >
        {{ primaryText }}
      </div>

      <div
        class="secondary-text"
      >
        {{ secondaryText }}
      </div>
    </template>

    <template #actions>
      <TButton
        tabindex="0"
        class="confirm-button"
        button-type="text"
        value="Confirm"
        icon="fa-solid fa-check"
        @click="confirm()"
        @keydown.enter="confirm()"
      />

      <TButton
        tabindex="0"
        class="cancel-button"
        button-type="text"
        value="Cancel"
        icon="fa-solid fa-xmark"
        @click="cancel()"
        @keydown.enter="cancel()"
      />
    </template>
  </TDialog>
</template>

<style scoped>
.dialog .container .body .primary-text {
  font-weight: bold;
}

.confirm-button:focus,
.cancel-button:focus {
  outline: 3px solid var(--color-border-hover);
}
</style>
