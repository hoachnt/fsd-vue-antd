<template>
    <Layout>
        <Spin tip="Loading..." :spinning="taskStore.loading">
            <TaskCardDetails :cardItem="taskItem">
                <template #actions>
                    <ACheckbox :item="taskItem" />
                    <DeleteFilled @click="taskDelete.deleteTask(taskItem.id)" />
                </template>
            </TaskCardDetails>
        </Spin>
    </Layout>
</template>

<script setup lang="ts">
import { Layout } from "ant-design-vue";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { taskModel, TaskCardDetails } from "../../entities/tasks";
import { DeleteFilled } from "@ant-design/icons-vue";
import { Spin } from "ant-design-vue";
import { taskFeatureDeleteModel } from "../../features/delete-task";
import { ACheckbox } from "../../features/toggle-task";

const taskStore = taskModel();
const taskItem = computed(() => taskStore.taskItem);
const taskDelete = taskFeatureDeleteModel();
const route = useRoute();
const id = route.params.id;

onMounted(() => {
    taskStore.getTaskById(id);
});
</script>
