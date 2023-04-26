import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const newTask = reactive({
    title: "",
    description: "",
    checked: false,
  });
  const visible = ref(false);

  function closeModal() {
    visible.value = false;
  }
  function showModal() {
    visible.value = true;
  }

  return { newTask, visible, closeModal, showModal };
});
