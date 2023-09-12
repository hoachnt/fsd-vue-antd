<template>
    <div ref="target" :class="styles.swipe_gesture">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { useSwipe } from "@vueuse/core";
import { reactive, ref, watch } from "vue";
import { useRadio } from "../../../../../shared/ui/radio-group";
import { useRouter } from "vue-router";
import styles from "./style.module.scss";
import { Pages } from "../../../../../shared/api";

const target = ref<HTMLElement | null>(null);
const { direction, isSwiping } = useSwipe(target);
const radioStore = useRadio();
const pages = reactive<Pages>({
    1: "/",
    2: "/finished",
    3: "/unfinished",
});
const router = useRouter();
const activeValue = ref<number>(0);
const activePath = ref<string>("");
const minNumber = ref<number>(1);
const maxNumber = ref<number>(Object.keys(pages).length);

// function vibration(pattern: number): void {
//   navigator.vibrate(pattern);
// }

watch([direction, isSwiping], ([direction, isSwiping]) => {
    if (
        direction === "right" &&
        !isSwiping &&
        Number(radioStore.activeValue) > minNumber.value
    ) {
        radioStore.activeValue = String(Number(radioStore.activeValue) - 1);
        activeValue.value = Number(radioStore.activeValue);
        activePath.value = pages[activeValue.value];

        // vibration(200)
        router.push(activePath.value);
    } else if (
        direction === "left" &&
        !isSwiping &&
        Number(radioStore.activeValue) < maxNumber.value
    ) {
        radioStore.activeValue = String(Number(radioStore.activeValue) + 1);
        activeValue.value = Number(radioStore.activeValue);
        activePath.value = pages[activeValue.value];

        // vibration(200)
        router.push(activePath.value);
    }
});
</script>
