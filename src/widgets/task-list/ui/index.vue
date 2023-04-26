<template>
  <List bordered :data-source="taskStore.listItems">
    <template #renderItem="{ item }">
      <ATaskRow :item="item" />
    </template>
  </List>
</template>
<script setup lang="ts">
import { List } from "ant-design-vue";
import { onMounted } from "vue";
import { ATaskRow, taskModel } from "../../../entities/tasks";

const taskStore = taskModel();
onMounted(() => {
  taskStore.getTaskList();
});
</script>
