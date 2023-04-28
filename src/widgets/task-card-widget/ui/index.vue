<template>
  <Spin tip="Loading..." :spinning="taskStore.loading">
    <TaskCardPage :cardItem="props.cardItem"></TaskCardPage>
  </Spin>
</template>

<script setup lang="ts">
import { TaskCardPage, taskModel } from "@/entities/tasks";
import { Spin } from "ant-design-vue";

const taskStore = taskModel();

interface ICardItem {
  title: string;
  description: string;
  checked: boolean;
  date_start: string;
  date_end: string;
}

const props = defineProps<{ cardItem: ICardItem }>();
</script>
