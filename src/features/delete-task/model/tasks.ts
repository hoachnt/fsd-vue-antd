import { useRoute } from "vue-router";
import axios from "axios";
import { defineStore } from "pinia";
import { taskModel } from "../../../entities/tasks";

export const useFeatureDeleteTaskStore = defineStore(
  "tasksDeleteFeature",
  () => {
    const taskStore = taskModel();
    const route = useRoute();

    async function deleteTask(id: number | undefined) {
      try {
        await axios.delete(`${import.meta.env.VITE_APP_API_URL}/${id}`);

        if (route.path === "/") {
          await taskStore.getTaskList();
        } else {
          await taskStore.getFinishedTaskList();
        }
      } catch (error: any) {
        console.log(error.message);
      }
    }

    return { deleteTask };
  }
);
