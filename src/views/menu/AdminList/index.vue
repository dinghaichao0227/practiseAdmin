<template>
  <div class="header">
    <a-button type="primary" size="small" class="btn" @click="onCreate">新增数据</a-button>
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
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
            v-for="tag in record.tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'illustrate'">
        <span>
          <a>
            {{ record.illustrate }}
          </a>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span class="action">
          <a class="edit" @click="onEdit(scoped)">编辑</a>
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
  <create-form :is-visible="isVisible" @onChange="onChangeCreate"/>

</template>

<script setup lang="ts">
import filterInput from "../../../components/filterInput/index.vue";
import { ref } from "vue"
import { onReturn } from "../../../util/importXlsx.js"
import CreateForm from "./component/CreateAndEditForm.vue"
const pagination = ref(false)
const pageSizeOptions = ref(['10', '20', '30', '40', '50']);
const current = ref(1);
const pageSizeRef = ref(10);
const total = ref(50);
const isVisible = ref(false)

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
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'illustrate',
    key: 'illustrate',
    dataIndex: 'illustrate',
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
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    illustrate: 'Chasing horses with dreams, living up to youth'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    illustrate: 'Chasing horses with dreams, living up to youth'

  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    illustrate: 'Chasing horses with dreams, living up to youth'

  },
]);
const onEdit = () => {
  isVisible.value = true
}
const onCreate = () => {
  isVisible.value = true
}
const onChangeCreate = (value)=> {
  isVisible.value = value
}
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
  justify-content: space-between;
  margin-top: 20px;
}
</style>