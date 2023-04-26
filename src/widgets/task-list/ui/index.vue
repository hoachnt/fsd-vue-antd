<template>
  <List bordered :data-source="taskStore.listItems">
    <template #renderItem="{ item }">
      <ATaskCard :item="item">
        <template #actions>
          <ACheckbox :item="item" />
          <ADeleteTask :id="item.id" />
        </template>
      </ATaskCard>
    </template>
  </List>
</template>
<script setup lang="ts">
import { List } from "ant-design-vue";
import { onMounted } from "vue";
import { ATaskCard, taskModel } from "../../../entities/tasks";
import { ADeleteTask } from "../../../features/delete-task";
import { ACheckbox } from "../../../features/toggle-task";

const taskStore = taskModel();
onMounted(() => {
  taskStore.getTaskList();
});
</script>
