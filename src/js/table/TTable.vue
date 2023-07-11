<script setup>
import { computed, ref } from 'vue';

import TProgressBar from '../TProgressBar.vue';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  headers: {
    type: Array,
    default() {
      return [];
    },
  },
  data: {
    type: Array,
    default() {
      return [];
    },
  },
  totalData: {
    type: Number,
    default: 0,
  },
  actions: {
    type: Array,
    default() {
      return [];
    },
  },
  tableActions: {
    type: Object,
    default() {
      return {};
    },
  },
  rowAction: {
    type: Function,
    default: null,
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
  loading: {
    type: Boolean,
    default: true,
  },
  dense: {
    type: Boolean,
    default: true,
  },
  noDataText: {
    type: String,
    default: 'No data',
  },
});

const emit = defineEmits([
  'offsetChange',
]);

const tableContainer = ref('tableContainer');
const pagerLeft = ref('pagerLeft');
const pagerRight = ref('pagerRight');

const offset = computed(() => {
  return props.pagination.offset;
});

const limit = computed(() => {
  return props.pagination.limit;
});

const computedLoading = computed(() => {
  if (props.pagination.client) {
    return false;
  } else {
    return props.loading;
  }
});

const computedLoadingSpan = computed(() => {
  return props.headers.length + (props.actions.length > 0 ? 1 : 0);
});

const computedTableNameClass = computed(() => {
  if (props.name && props.name.length > 0) {
    return `table-name show`;
  } else {
    return `table-name hide`;
  }
});

const computedTableClass = computed(() => {
  if (props.dense) {
    return `table dense`;
  } else {
    return `table`;
  }
});

function currentRowClass(i) {
  const className = [];
  className.push(`row`);

  if (i % 2 === 0) {
    className.push(`even`);
  } else {
    className.push(`odd`);
  }

  if (props.rowAction) {
    className.push(`clickable`);
  }

  return className.join(' ');
}

function clickRow(row, i, event) {
  if (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  if (props.rowAction) {
    props.rowAction(row, i);
  }
}

const computedPaginationClass = computed(() => {
  if (computedTotalData.value > 0) {
    return `pagination show`;
  } else {
    return `pagination hide`;
  }
});

const computedTotalData = computed(() => {
  if (props.pagination.client) {
    return props.data.length;
  } else {
    return props.totalData;
  }
});

const computedPaginatedData = computed(() => {
  if (props.pagination.client) {
    return props.data.slice(offset.value, offset.value + limit.value);
  } else {
    return props.data;
  }
});

const computedCurrentIndexes = computed(() => {
  return {
    start: offset.value + 1,
    end: offset.value + computedPaginatedData.value.length,
  };
});

const computedPagerLeftClass = computed(() => {
  if (computedCurrentIndexes.value.start === 1) {
    return `pager left`;
  } else {
    return `pager left show`;
  }
});

const computedPagerRightClass = computed(() => {
  if (computedCurrentIndexes.value.end === computedTotalData.value) {
    return `pager right`;
  } else {
    return `pager right show`;
  }
});

function pageLeft(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  if (computedCurrentIndexes.value.start === 1) {
    // do nothing
  } else if (offset.value - limit.value < 0) {
    emit('offsetChange', 0);
  } else {
    emit('offsetChange', offset.value - limit.value);
  }
}

function pageRight(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  if (computedCurrentIndexes.value.end !== computedTotalData.value) {
    emit('offsetChange', offset.value + limit.value);
  }
}
</script>

<template>
  <div
    ref="tableContainer"
    tabindex="0"
    class="table-container"
    @keydown.arrow-left="pageLeft"
    @keydown.arrow-right="pageRight"
  >
    <div
      class="table-actions"
    >
      <slot
        name="table-actions"
        v-bind="{ name, actions: tableActions }"
      >
        <div
          :class="computedTableNameClass"
        >
          <slot
            name="table-name"
            v-bind="{ name }"
          >
            {{ name }}
          </slot>
        </div>

        <div
          class="actions"
        >
          <div
            v-for="(action, i) in tableActions"
            :key="i"
            class="action"
            @click="action.click(data)"
          >
            <slot
              name="table-action"
              v-bind="{ action, data }"
            >
              <i :class="action.icon" />
              <span
                class="tooltip"
              >
                {{ action.name }}
              </span>
            </slot> <!-- slot:table-action -->
          </div>
        </div>
      </slot> <!-- slot:table-actions -->
    </div>

    <table
      :class="computedTableClass"
    >
      <thead
        class="header"
      >
        <tr
          class="row"
        >
          <slot
            name="header-row"
            v-bind="{ headers, actions }"
          >
            <th
              v-for="(header, i) in headers"
              :key="i"
              class="col"
            >
              <slot
                :name="`header-col.${header.key}`"
                v-bind="{ header, i }"
              >
                {{ header.label }}
              </slot> <!-- slot:header-col -->
            </th>

            <th
              v-if="actions.length > 0"
              class="col"
            >
              <slot
                name="header-actions"
                v-bind="{ actions }"
              /> <!-- slot:header-actions -->
            </th>
          </slot> <!-- slot:header-row -->
        </tr>

        <tr
          v-if="computedLoading"
          class="loading"
        >
          <slot
            name="progress-bar"
            v-bind="{ headers, actions, span: computedLoadingSpan }"
          >
            <th
              :colspan="computedLoadingSpan"
            >
              <TProgressBar />
            </th>
          </slot> <!-- slot:progress-bar -->
        </tr>
      </thead>

      <tbody
        v-if="computedTotalData === 0"
        class="body"
      >
        <tr
          :class="currentRowClass(0)"
        >
          <td
            class="col center"
            :colspan="computedLoadingSpan"
          >
            {{ noDataText }}
          </td>
        </tr>
      </tbody>

      <tbody
        v-if="computedTotalData > 0"
        class="body"
      >
        <tr
          v-for="(row, i) in computedPaginatedData"
          v-if="!computedLoading"
          :key="i"
          tabindex="0"
          :class="currentRowClass(i)"
          @keydown.enter="clickRow(row, i, $event)"
        >
          <slot
            name="data-row"
            v-bind="{ headers, row, actions, i }"
          >
            <slot
              name="data-content"
              v-bind="{ headers, row, i }"
            >
              <td
                v-for="(header, h) in headers"
                :key="h"
                class="col"
                @click="clickRow(row, i)"
              >
                <slot
                  :name="`data-col.${header.key}`"
                  v-bind="{ header, row, i }"
                >
                  {{ row[header.key] }}
                </slot>
              </td>
            </slot> <!-- slot:data-content -->

            <td
              v-if="actions.length > 0"
              class="col"
            >
              <slot
                name="data-actions"
                v-bind="{ row, actions, i }"
              >
                <div
                  class="actions"
                >
                  <div
                    v-for="(action, a) in actions"
                    :key="a"
                    class="action"
                    @click="action.click(row, i)"
                  >
                    <slot
                      name="data-action"
                      v-bind="{ row, action, i }"
                    >
                      <i :class="action.icon" />
                      <span
                        class="tooltip"
                      >
                        {{ action.name }}
                      </span>
                    </slot> <!-- slot:data-action -->
                  </div>
                </div>
              </slot> <!-- slot:data-actions -->
            </td>
          </slot> <!-- slot:data-row -->
        </tr>
      </tbody>
    </table>

    <div
      :class="computedPaginationClass"
    >
      <slot
        name="pagination"
        v-bind="{ pageLeft, pageRight, start: computedCurrentIndexes.start, end: computedCurrentIndexes.end,
                  total: computedTotalData }"
      >
        <div
          ref="pagerLeft"
          tabindex="0"
          :class="computedPagerLeftClass"
          @click="pageLeft"
          @keydown.enter="pageLeft"
        >
          <slot name="pager-left">
            <i class="fa-solid fa-chevron-left" />
          </slot>
        </div>

        <div class="page-number">
          <slot
            name="page-number"
            v-bind="{ start: computedCurrentIndexes.start, end: computedCurrentIndexes.end, total: computedTotalData }"
          >
            <span
              v-if="computedCurrentIndexes.start !== computedCurrentIndexes.end"
              class="current"
            >
              {{ computedCurrentIndexes.start }}
              -
            </span>
            <span class="current">
              {{ computedCurrentIndexes.end }}
            </span>
            /
            {{ computedTotalData }}
          </slot> <!-- slot:page-number -->
        </div>

        <div
          ref="pagerRight"
          tabindex="0"
          :class="computedPagerRightClass"
          @click="pageRight"
          @keydown.enter="pageRight"
        >
          <slot name="pager-right">
            <i class="fa-solid fa-chevron-right" />
          </slot>
        </div>
      </slot> <!-- slot:pagination -->
    </div>
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.table-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 1rem 0;
}

.table-name {
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.table-name.show {
  visibility: visible;
}

.table-name.hide {
  visibility: hidden;
}

.table-actions .actions {
  position: absolute;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.table-actions .action:hover {
  cursor: pointer;
  color: var(--color-border-hover);
}

.action .tooltip {
  visibility: hidden;
  padding: 4px;
  position: absolute;
  left: 10px;
  bottom: -2rem;
  z-index: 1;
  background-color: var(--color-border-hover);
  color: var(--color-text);
  font-size: 0.8rem;
  border-radius: 4px;
}

.action:hover .tooltip {
  visibility: visible;
}

.table {
  width: 100%;
  border-bottom: 1px solid var(--color-border);
  border-collapse: collapse;
  padding: 4px;
}

.row {
  height: 40px;
}

.header .col {
  font-weight: bold;
  font-size: 0.8rem;
}

.col {
  text-align: left;
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.col.center {
  text-align: center !important;
}

.body .row:focus,
.body .row:hover {
  background-color: var(--color-border-hover);
}

.body .row.clickable:hover {
  cursor: pointer;
}

.body .row:focus,
.body .row.clickable:focus {
  outline: none;
}

.body .row .actions {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
}

.body .row .action:hover {
  cursor: pointer;
}

.table.dense .col {
  padding: 4px !important;
}

.pagination {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
}

.pagination.hide {
  display: none;
}

.pagination .pager {
  width: 30px;
  visibility: hidden;
  text-align: center;
}

.pagination .pager.show:hover {
  cursor: pointer;
}

.table-container:focus,
.pagination .pager:focus    {
  outline: 3px solid var(--color-border);
}

.pagination .pager.show {
  visibility: visible;
}

.pagination .page-number .current {
  font-weight: bold;
}
</style>
