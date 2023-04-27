import axios from "axios";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import { taskModel } from "../../../entities/tasks";

export const useFeatureCheckedTaskStore = defineStore(
  "tasksCheckedFeature",
  () => {
    const taskStore = taskModel();
    const route = useRoute();

    async function checkedTask(checkedTask: any) {
      try {
        await axios({
          method: "patch",
          url: `${import.meta.env.VITE_APP_API_URL}/${checkedTask.id}`,
          data: {
            checked: !checkedTask.checked,
          },
        });

        if (route.path === "/") {
          await taskStore.getTaskList();
        } else {
          await taskStore.getFinishedTaskList();
        }
      } catch (error: any) {
        console.log(error.message);
      }
    }

    return { checkedTask };
  }
);
