import axios from "axios";
import { defineStore } from "pinia";
import { taskModel } from "../../../entities/tasks";

export const useFeatureDeleteTaskStore = defineStore(
  "tasksDeleteFeature",
  () => {
    const taskStore = taskModel();

    async function deleteTask(id: number | undefined) {
      try {
        await axios.delete(`${import.meta.env.VITE_APP_API_URL}/${id}`);
        await taskStore.getTaskList();
      } catch (error: any) {
        console.log(error.message);
      }
    }

    return { deleteTask };
  }
);
