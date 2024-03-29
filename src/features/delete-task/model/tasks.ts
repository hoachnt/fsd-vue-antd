import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { defineStore } from "pinia";
import { taskModel } from "../../../entities/tasks";
import { API_URL } from "../../../shared/api";
// import { deleteSound } from "../api";

export const useFeatureDeleteTaskStore = defineStore(
  "tasksDeleteFeature",
  () => {
    const taskStore = taskModel();
    const route = useRoute();
    const router = useRouter();
    const url = API_URL

    async function deleteTask(id: number | undefined) {
      try {
        taskStore.loading = true;

        await axios.delete(`${url}/${id}`);

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

        // playDeleteSound(deleteSound);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    // function playDeleteSound(sound: string): void {
    //   const audio: HTMLAudioElement = new Audio(sound);

    //   audio.play();
    // }

    return { deleteTask };
  }
);
