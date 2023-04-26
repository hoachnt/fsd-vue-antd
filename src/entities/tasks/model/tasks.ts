import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("tasks", () => {
  const listItems = ref<object[]>([]);

  async function getTaskList() {
    try {
      let taskList = await axios.get(`${import.meta.env.VITE_APP_API_URL}`);

      listItems.value = taskList.data.data;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return { listItems, getTaskList };
});
