<template>
  <Spin :spinning="taskStore.loading" tip="Loading...">
    <List bordered :data-source="props.listItems">
      <template #renderItem="{ item }">
        <Popover placement="left">
          <template #content>
            <p>Double click to open a task</p>
          </template>
          <ATaskCard :item="item">
            <template #actions>
              <ACheckbox :item="item" />
              <ADeleteTask :id="item.id">Delete</ADeleteTask>
            </template>
          </ATaskCard>
        </Popover>
      </template>
    </List>
  </Spin>
</template>
<script setup lang="ts">
import { List, Popover, Spin } from "ant-design-vue";
import { ATaskCard, taskModel } from "../../../entities/tasks";
import { ADeleteTask } from "../../../features/delete-task";
import { ACheckbox } from "../../../features/toggle-task";
const taskStore = taskModel();
const props = defineProps({
  listItems: Array,
});
</script>
