<template>
  <Layout :class="styles.root">
    <ATaskList :listItems="taskStore.listItemsFinished" />
  </Layout>
</template>
<script setup lang="ts">
import { Layout } from "ant-design-vue";
import { onMounted } from "vue";
import { taskModel } from "../../entities/tasks";
import { ATaskList } from "../../widgets/task-list";
import styles from "./styles.module.scss";

const taskStore = taskModel();

onMounted(() => {
  taskStore.getFinishedTaskList();
});
</script>
