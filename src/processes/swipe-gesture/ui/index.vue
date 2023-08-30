<template>
  <div ref="target" :class="styles.swipe_gesture">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useSwipe } from "@vueuse/core";
import { reactive, ref, watch } from "vue";
import { useRadio } from "../../../shared/radio-group";
import { useRouter } from "vue-router";
import styles from "./style.module.scss";

interface IPages {
  [key: number]: string;
}

const target = ref<HTMLElement | null>(null);
const { direction, isSwiping } = useSwipe(target);
const radioStore = useRadio();
const pages = reactive<IPages>({
  1: "/",
  2: "/finished",
  3: "/unfinished",
});
const router = useRouter();
const activeValue = ref<number>(0);
const activePath = ref<string>("");

// function vibration(pattern: number): void {
//   navigator.vibrate(pattern);
// }

watch([direction, isSwiping], ([direction, isSwiping]) => {
  if (
    direction === "right" &&
    !isSwiping &&
    Number(radioStore.activeValue) > 1
  ) {
    radioStore.activeValue = String(Number(radioStore.activeValue) - 1);
    activeValue.value = Number(radioStore.activeValue);
    activePath.value = pages[activeValue.value];

    // vibration(200)
    router.push(activePath.value);
  } else if (
    direction === "left" &&
    !isSwiping &&
    Number(radioStore.activeValue) < 3
  ) {
    radioStore.activeValue = String(Number(radioStore.activeValue) + 1);
    activeValue.value = Number(radioStore.activeValue);
    activePath.value = pages[activeValue.value];

    // vibration(200)
    router.push(activePath.value);
  }
});
</script>
