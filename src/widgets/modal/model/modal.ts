import { SmileOutlined } from "@ant-design/icons-vue";
import { notification } from "ant-design-vue";
import { defineStore } from "pinia";
import { h, reactive, ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const newTask = reactive({
    title: "",
    description: "",
    checked: false,
    date: undefined,
    date_start: "",
    date_end: "",
  });
  const visible = ref(false);

  function closeModal() {
    visible.value = false;
  }
  function showModal() {
    visible.value = true;
  }
  const openNotification = () => {
    notification.open({
      message: "Task created",
      icon: () => h(SmileOutlined, { style: "color: #6abe39" }),
    });
  };

  return { newTask, visible, closeModal, showModal, openNotification };
});
