<template>
  <AButton
    @click="modalStore.showModal"
    :class="taskListPageStyles.add_task_modal"
    >+</AButton
  >
  <Modal
    v-model:visible="modalStore.visible"
    title="Create a task"
    :after-close="() => (addTaskStore.validation = false)"
  >
    <template #footer>
      <a-button key="back" @click="modalStore.closeModal" danger
        >Close</a-button
      >
      <AAddTask @click="addTaskStore.addTask(modalStore.newTask)"
        >Create</AAddTask
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
    <Alert
      v-if="addTaskStore.validation"
      message="Title is empty"
      type="error"
      show-icon
      :class="styles.error_alert"
    />
  </Modal>
</template>
<script setup lang="ts">
import { Modal, Input, Alert } from "ant-design-vue";
import { AAddTask, taskFeatureAddModel } from "../../../features/add-task";
import { AButton } from "../../../shared/button";
import { modalModel } from "../../modal";
import taskListPageStyles from "../../../pages/task-list-page/styles.module.scss";
import styles from "./styles.module.scss";

const addTaskStore = taskFeatureAddModel();
const modalStore = modalModel();
</script>
