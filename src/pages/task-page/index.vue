<template>
    <div :class="styles.layout">
        <Spin tip="Loading..." :spinning="taskStore.loading">
            <TaskCardDetails
                :cardItem="taskStore.taskItem"
                :class="styles.taskCardDetails"
            >
                <template #actions>
                    <ACheckbox :item="taskStore.taskItem" />
                    <DeleteFilled
                        @click="taskDelete.deleteTask(taskStore.taskItem.id)"
                    />
                </template>
            </TaskCardDetails>
        </Spin>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { taskModel, TaskCardDetails } from "../../entities/tasks";
import { DeleteFilled } from "@ant-design/icons-vue";
import { Spin } from "ant-design-vue";
import { taskFeatureDeleteModel } from "../../features/delete-task";
import { ACheckbox } from "../../features/toggle-task";
import styles from "./styles.module.scss";

const taskStore = taskModel();
const taskDelete = taskFeatureDeleteModel();
const route = useRoute();
const id = route.params.id;
onMounted(async () => {
    await taskStore.getTaskById(id);
});
</script>
