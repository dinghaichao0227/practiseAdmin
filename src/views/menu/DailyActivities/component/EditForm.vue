<template>
  <div>
    <a-modal
      v-model:visible="visible"
      title="Modal"
      ok-text="确认"
      cancel-text="取消"
      @ok="onSubmit"
      @cancel="onCancel"
    >
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
      >
        <a-form-item
          label="名字："
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="年龄："
          name="age"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input v-model:value="formState.password" />
        </a-form-item>
        <a-form-item
          label="地址："
          name="address"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input v-model:value="formState.password" />
        </a-form-item>
        <a-form-item
          label="手机号："
          name="phone"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input v-model:value="formState.password" />
        </a-form-item>
        <a-form-item
          label="说明："
          name="illustrate"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input v-model:value="formState.password" />
        </a-form-item>

      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";

const props = defineProps ({
  isVisible: {
    type: Boolean,
    default: null
  }
})
const emits = defineEmits(['onChange'])
const visible = ref(false)
const formState = reactive({
    username: '',
    password: '',
    remember: true,
  });
watch(()=>props.isVisible,(newValue)=> {
  visible.value = newValue,
  console.log(visible.value, 33);
})
watch(visible, (val) => {
  if (!val) emits('onChange', val);
});
const onSubmit = () => {
  visible.value = false
}
const onCancel = ()=> {
  // emits('onChange',false)
}
</script>

<style>

</style>