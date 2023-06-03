<template>
<div class="header">
  <a-button type="primary" size="small" class="btn">新增数据</a-button>
  <filter-input @onChange="onChange"></filter-input>
</div>
   <a-table :columns="columns" :data-source="data" :pagination="pagination">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span>
          <smile-outlined />
          Name
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'Age'">
        <span>
          <a>{{ record.age }}</a>
        </span>
      </template>
      <template v-else-if="column.key === 'Monday'">
        <span>
          <a>{{ record.Monday }}</a>
        </span>
      </template>
      <template v-else-if="column.key === 'Tuesday'">
        <span>
          <a>{{ record.Tuesday }}</a>
        </span>
      </template>
      <template v-else-if="column.key === 'Wednesday'">
        <span>
          <a>{{ record.Wednesday }}</a>
        </span>
      </template>
      <template v-else-if="column.key === 'Thursday'">
        <span>
          <a>{{ record.Thursday }}</a>
        </span>
      </template>
      <template v-else-if="column.key === 'Friday'">
        <span>
          <a>{{ record.Friday }}</a>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span class="action">
          <a class="edit">编辑</a>
          <a-dropdown>
            <a>
              <span class="more-icon icon-icon-line-more"></span>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a>
                    <span class="edit-icon icon-icon-line-edit"></span>
                    <span>详情</span>
                    </a>
                </a-menu-item>
                <a-menu-item>
                  <a>
                    <span class="del-icon icon-icon-line-delete"></span>
                   <span>删除</span>
                  </a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </span>
      </template>
    </template>
  </a-table>
  <div class="footer">
    <a-button type="primary" size="small" @click="ReturnTable">导出数据</a-button>
    <a-pagination
      class="pagination"
      v-model:current="current"
      v-model:page-size="pageSize"
      :page-size-options="pageSizeOptions"
      :total="total"
      show-size-changer
      @showSizeChange="onShowSizeChange"
      size="small"
    >
      <template #buildOptionText="props">
        <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
        <span v-else>全部</span>
      </template>
    </a-pagination>
  </div>
</template>

<script setup lang="ts">
import filterInput from "../../../components/filterInput/index.vue";
import { ref } from "vue"
import { onReturn } from "../../../util/importXlsx.js"
const pagination = ref(false)
const pageSizeOptions = ref(['10', '20', '30', '40', '50']);
const current = ref(1);
const pageSizeRef = ref(10);
const total = ref(50);
const onShowSizeChange = () => {
  console.log(current, pageSize);
  pageSizeRef.value = pageSize;
};
  const columns = ref ([
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Monday',
    dataIndex: 'Monday',
    key: 'Monday',
  },
  {
    title: 'Tuesday',
    key: 'Tuesday',
    dataIndex: 'Tuesday',
  },
  {
    title: 'Wednesday',
    key: 'Wednesday',
    dataIndex: 'Wednesday',
  },
   {
    title: 'Thursday',
    key: 'Thursday',
    dataIndex: 'Thursday',
  },
   {
    title: 'Friday',
    key: 'Friday',
    dataIndex: 'Friday',
  },
  {
    title: 'Action',
    key: 'action',
    align: 'center',
  },
]);
const data = ref ([
  {
    key: '1',
    name: 'JoinDing',
    age: 32,
    Monday: '网信办',
    Tuesday: 'sdc',
    Wednesday: '大屏',
    Thursday: 'ui样式调整',
    Friday: '网信办新需求',
  },
  {
    key: '2',
    name: 'dinghaichao',
    age: 35,
    Monday: '网信办',
    Tuesday: 'sdc',
    Wednesday: '大屏',
    Thursday: 'ui样式调整',
    Friday: '网信办新需求',
  },
  {
    key: '3',
    name: 'dinghai',
    age: 32,
    Monday: '网信办',
    Tuesday: 'sdc',
    Wednesday: '大屏',
    Thursday: 'ui样式调整',
    Friday: '网信办新需求',

  },
]);
const ReturnTable = () => {
  onReturn(data.value)
}
const onChange = (value)=> {
  data.value = data.value.filter(item=> item.name === value)
  console.log(value, 77);
}

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.btn {
  font-size: 12px;
  padding: 0px 10px;
  margin-bottom: 15px;
}
.action {
  display: flex;
  justify-content: center;
}
.edit {
  margin-right: 15px;
}
.footer {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
</style>