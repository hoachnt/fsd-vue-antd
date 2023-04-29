<template>
  <Layout>
    <TaskCardWidget :cardItem="taskStore.taskItem" />
  </Layout>
</template>

<script setup lang="ts">
import { Layout } from "ant-design-vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { taskModel } from "../../entities/tasks";
import { TaskCardWidget } from "../../widgets/task-card-widget";

const taskStore = taskModel();
const route = useRoute();
const id = route.params.id;

onMounted(() => {
  taskStore.getTaskById(id);
});
</script>
