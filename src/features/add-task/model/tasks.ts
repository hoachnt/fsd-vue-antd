import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { taskModel } from "../../../entities/tasks";
import { modalModel } from "../../../widgets/modal";

export const useFeatureAddTaskStore = defineStore("tasksAddFeature", () => {
  interface IData {
    title: string;
    description: string;
    date?: string[];
    date_start: string | null;
    date_end: string | null;
  }

  const taskStore = taskModel();
  const modalStore = modalModel();
  const loading = ref(false);
  const validation = ref(false);

  async function addTask(data: IData) {
    const date: any = data.date;

    if (data.date !== undefined) {
      data.date_start = date[0];
      data.date_end = date[1];

      delete data.date;
    } else {
      data.date_start = null;
      data.date_end = null;

      delete data.date;
    }

    try {
      if (data.title.length === 0) return (validation.value = true);

      validation.value = false;
      loading.value = true;

      await axios.post(`${import.meta.env.VITE_APP_API_URL}`, data);
      await taskStore.getTaskList();

      loading.value = false;

      modalStore.closeModal();
      modalStore.openNotification();

      modalStore.newTask = {
        title: "",
        description: "",
        checked: false,
        date: undefined,
        date_start: "",
        date_end: "",
      };
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return { addTask, loading, validation };
});
