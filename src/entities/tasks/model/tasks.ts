import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("tasks", () => {
  const listItems = ref<object[]>([]);
  const loading = ref(false);

  async function getTaskList() {
    try {
      loading.value = true;

      let taskList = await axios.get(`${import.meta.env.VITE_APP_API_URL}`);

      loading.value = false;
      listItems.value = taskList.data.data;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return { listItems, getTaskList, loading };
});
