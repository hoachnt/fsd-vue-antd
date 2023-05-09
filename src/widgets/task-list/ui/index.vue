<template>
  <Spin :spinning="taskStore.loading" tip="Loading...">
    <List bordered :data-source="props.listItems">
      <template #header>
        <Alert type="info" message="Double click to open a task" />
      </template>
      <template #renderItem="{ item }">
        <ATaskCard :item="item">
          <template #actions>
            <ACheckbox :item="item" />
            <ADeleteTask :id="item.id">Delete</ADeleteTask>
          </template>
        </ATaskCard>
      </template>
    </List>
  </Spin>
</template>
<script setup lang="ts">
import { Alert, List, Spin } from "ant-design-vue";
import { ATaskCard, taskModel } from "../../../entities/tasks";
import { ADeleteTask } from "../../../features/delete-task";
import { ACheckbox } from "../../../features/toggle-task";
const taskStore = taskModel();
const props = defineProps({
  listItems: Array,
});
</script>
