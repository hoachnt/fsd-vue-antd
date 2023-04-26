import axios from "axios";
import { defineStore } from "pinia";
import { taskModel } from "../../../entities/tasks";
import { modalModel } from "../../../widgets/modal";

export const useFeatureAddTaskStore = defineStore("tasksAddFeature", () => {
  const taskStore = taskModel();
  const modalStore = modalModel();

  async function addTask(data: object) {
    try {
      await axios.post(`${import.meta.env.VITE_APP_API_URL}`, data);
      await taskStore.getTaskList();
      await modalStore.closeModal();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return { addTask };
});
