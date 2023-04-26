import axios from "axios";
import { defineStore } from "pinia";

export const useFeatureCheckedTaskStore = defineStore(
  "tasksCheckedFeature",
  () => {
    async function checkedTask(checkedTask: any) {
      try {
        await axios({
          method: "patch",
          url: `${import.meta.env.VITE_APP_API_URL}/${checkedTask.id}`,
          data: {
            checked: !checkedTask.checked,
          },
        });
      } catch (error: any) {
        console.log(error.message);
      }
    }

    return { checkedTask };
  }
);
