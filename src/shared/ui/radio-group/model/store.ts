import { defineStore } from "pinia";
import { ref } from "vue";

export const useRadio = defineStore("radio", () => {
  const activeValue = ref("/");

  return { activeValue };
});
