import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("tasks", () => {
  const listItems = ref<object[]>([]);
  const listItemsFinished = ref<object[]>([]);
  const listItemsUnFinished = ref<object[]>([]);
  const loading = ref(false);
  const url = `${import.meta.env.VITE_APP_API_URL}`;

  async function getTaskList() {
    try {
      loading.value = true;

      let taskList = await axios.get(url);

      listItems.value = await taskList.data.data;
      loading.value = false;
    } catch (error: any) {
      console.log(error.message);
    }
  }
  async function getFinishedTaskList() {
    try {
      loading.value = true;

      let taskList = await axios.get(url, {
        params: {
          filter: {
            checked: {
              _eq: "true",
            },
          },
        },
      });

      listItemsFinished.value = await taskList.data.data;
      loading.value = false;
    } catch (error: any) {
      console.log(error.message);
    }
  }
  async function getUnFinishedTaskList() {
    try {
      loading.value = true;

      let taskList = await axios.get(url, {
        params: {
          filter: {
            checked: {
              _eq: "false",
            },
          },
        },
      });

      listItemsUnFinished.value = await taskList.data.data;
      loading.value = false;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return {
    listItems,
    listItemsUnFinished,
    getTaskList,
    getFinishedTaskList,
    getUnFinishedTaskList,
    loading,
    listItemsFinished,
  };
});
