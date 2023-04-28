import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { defineStore } from "pinia";
import { taskModel } from "../../../entities/tasks";

export const useFeatureDeleteTaskStore = defineStore(
  "tasksDeleteFeature",
  () => {
    const taskStore = taskModel();
    const route = useRoute();
    const router = useRouter();

    async function deleteTask(id: number | undefined) {
      try {
        taskStore.loading = true;

        await axios.delete(`${import.meta.env.VITE_APP_API_URL}/${id}`);

        taskStore.loading = false;

        if (route.path === "/") {
          await taskStore.getTaskList();
        } else if (route.path === "/finished") {
          await taskStore.getFinishedTaskList();
        } else if (route.path.includes("task")) {
          await router.push("/");
        } else {
          await taskStore.getUnFinishedTaskList();
        }
      } catch (error: any) {
        console.log(error.message);
      }
    }

    return { deleteTask };
  }
);
