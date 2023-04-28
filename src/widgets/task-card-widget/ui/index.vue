<template>
  <Spin tip="Loading..." :spinning="taskStore.loading">
    <TaskCardPage :cardItem="props.cardItem">
      <template #actions>
        <ACheckbox :item="cardItem" />
        <DeleteFilled @click="taskDelete.deleteTask(cardItem.id)" />
      </template>
    </TaskCardPage>
  </Spin>
</template>

<script setup lang="ts">
import { TaskCardPage, taskModel } from "@/entities/tasks";
import { taskFeatureDeleteModel } from "@/features/delete-task";
import { ACheckbox } from "@/features/toggle-task";
import { DeleteFilled } from "@ant-design/icons-vue";
import { Spin } from "ant-design-vue";

const taskStore = taskModel();
const taskDelete = taskFeatureDeleteModel();

interface ICardItem {
  id?: number;
  title: string;
  description: string;
  checked: boolean;
  date_start: string;
  date_end: string;
}

const props = defineProps<{ cardItem: ICardItem }>();
</script>
