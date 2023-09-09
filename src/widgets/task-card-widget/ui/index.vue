<template>
    <Spin tip="Loading..." :spinning="taskStore.loading">
        <TaskCardDetails :cardItem="props.cardItem">
            <template #actions>
                <ACheckbox :item="cardItem" />
                <DeleteFilled @click="taskDelete.deleteTask(cardItem.id)" />
            </template>
        </TaskCardDetails>
    </Spin>
</template>

<script setup lang="ts">
import { DeleteFilled } from "@ant-design/icons-vue";
import { Spin } from "ant-design-vue";
import { TaskCardDetails, taskModel } from "../../../entities/tasks";
import { taskFeatureDeleteModel } from "../../../features/delete-task";
import { ACheckbox } from "../../../features/toggle-task";
import { TaskCardItem } from "../../../shared/api";

const taskStore = taskModel();
const taskDelete = taskFeatureDeleteModel();

const props = defineProps<{ cardItem: TaskCardItem }>();
</script>
