<template>
  <List bordered :data-source="taskStore.listItems">
    <template #renderItem="{ item }">
      <ListItem>
        <template #actions>
          <ACheckbox :item="item" />
          <ADeleteTask :id="item.id" />
        </template>
        <ATaskRow :item="item" />
      </ListItem>
    </template>
  </List>
</template>
<script setup lang="ts">
import { List, ListItem } from "ant-design-vue";
import { onMounted } from "vue";
import { ATaskRow, taskModel } from "../../../entities/tasks";
import { ADeleteTask } from "../../../features/delete-task";
import { ACheckbox } from "../../../features/toggle-task";

const taskStore = taskModel();
onMounted(() => {
  taskStore.getTaskList();
});
</script>
