<template>
  <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
      size="small"
    />
</template>

<script setup lang="ts">
import {ref, defineEmits} from "vue"
const value = ref('');
const emit = defineEmits(['onChange'])
const onSearch = (value) => {
  console.log('or use this.value', value.value);
  emit('onChange', value)
};
</script>

<style>

</style>