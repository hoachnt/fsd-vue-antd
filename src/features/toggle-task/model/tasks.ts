import axios from "axios";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import { taskModel } from "../../../entities/tasks";
import { API_URL } from "../../../shared/api";
// import { checkedSound } from "../api";

export const useFeatureCheckedTaskStore = defineStore(
  "tasksCheckedFeature",
  () => {
    const taskStore = taskModel();
    const route = useRoute();
    const url = API_URL

    async function checkedTask(checkedTask: any) {
      try {
        taskStore.loading = true;

        await axios({
          method: "patch",
          url: `${url}/${checkedTask.id}`,
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
