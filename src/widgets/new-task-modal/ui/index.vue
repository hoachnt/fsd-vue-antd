<template>
    <AButton
        @click="modalStore.showModal"
        size="large"
        type="primary"
        :class="styles.add_task_modal"
    >
        <plus-outlined />
    </AButton>
    <transition name="fade">
        <LazyModal
            v-if="modalStore.visible"
            v-model:visible="modalStore.visible"
            :title="'Create a task'"
            :func-validation="() => (addTaskStore.validation = false)"
            :func-close="modalStore.closeModal"
        >
            <template #footer>
                <a-button key="back" @click="modalStore.closeModal"
                    >Cancel</a-button
                >
                <AddTask @click="addTaskStore.addTask(modalStore.newTask)"
                    >Create</AddTask
                >
            </template>
            <Input
                size="large"
                v-model:value="modalStore.newTask.title"
                placeholder="Title"
                :class="styles.input"
            />
            <Input
                size="large"
                :class="styles.input"
                v-model:value="modalStore.newTask.description"
                placeholder="Description"
            />
            <DatePicker
                v-if="
                    modalStore.newTask.date === undefined ||
                    modalStore.newTask.date === null
                "
                v-model:value="modalStore.newTask.date_time"
                show-time
                :class="styles.input"
                size="large"
            />
            <RangePicker
                v-if="
                    modalStore.newTask.date_time === undefined ||
                    modalStore.newTask.date_time === null
                "
                v-model:value="modalStore.newTask.date"
                show-time
                :class="styles.input"
                size="large"
            />
            <Alert
                v-if="addTaskStore.validation"
                message="Title is empty"
                type="error"
                show-icon
                :class="styles.error_alert"
            />
        </LazyModal>
    </transition>
</template>
<script setup lang="ts">
import { Input, Alert, RangePicker, DatePicker } from "ant-design-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import { AddTask, taskFeatureAddModel } from "../../../features/add-task";
import { AButton } from "../../../shared/ui/button";
import { modalModel } from "../../new-task-modal";
import styles from "./styles.module.scss";

const addTaskStore = taskFeatureAddModel();
const modalStore = modalModel();
</script>
