import axios from "axios";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import { taskModel } from "../../../entities/tasks";
// import { checkedSound } from "../api";

export const useFeatureCheckedTaskStore = defineStore(
  "tasksCheckedFeature",
  () => {
    const taskStore = taskModel();
    const route = useRoute();

    async function checkedTask(checkedTask: any) {
      try {
        taskStore.loading = true;

        await axios({
          method: "patch",
          url: `${import.meta.env.VITE_APP_API_URL}/${checkedTask.id}`,
          data: {
            checked: !checkedTask.checked,
          },
        });

        taskStore.loading = false;

        if (route.path === "/") {
          await taskStore.getTaskList();
        } else if (route.path === "/finished") {
          await taskStore.getFinishedTaskList();
        } else if (route.path.includes("task")) {
          await taskStore.getTaskById(route.params.id);
        } else {
          await taskStore.getUnFinishedTaskList();
        }

        // playCheckedSound(checkedSound);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    // function playCheckedSound(sound: string): void {
    //   const audioPlay: HTMLAudioElement = new Audio(sound);

    //   audioPlay.play();
    // }

    return { checkedTask };
  }
);
