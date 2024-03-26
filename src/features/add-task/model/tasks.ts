import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { taskModel } from "../../../entities/tasks";
import { modalModel } from "../../../widgets/new-task-modal";
import { API_URL, Task } from "../../../shared/api";

export const useFeatureAddTaskStore = defineStore("tasksAddFeature", () => {
  const taskStore = taskModel();
  const modalStore = modalModel();
  const loading = ref(false);
  const validation = ref(false);
  const url = API_URL

  async function addTask(data: Task) {
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

      await axios.post(`${url}`, data);
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
        date_time: undefined,
      };
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return { addTask, loading, validation };
});
