import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { taskModel } from "../../../entities/tasks";
import { modalModel } from "../../../widgets/modal";

export const useFeatureAddTaskStore = defineStore("tasksAddFeature", () => {
  const taskStore = taskModel();
  const modalStore = modalModel();
  const loading = ref(false);

  async function addTask(data: object) {
    try {
      loading.value = true;
      await axios.post(`${import.meta.env.VITE_APP_API_URL}`, data);
      await taskStore.getTaskList();

      loading.value = false;

      modalStore.closeModal();

      modalStore.newTask = { title: "", description: "", checked: false };
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return { addTask, loading };
});
