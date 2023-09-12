<template>
    <Layout :class="styles.root">
        <RadioGroup
            v-model:value="radioStore.activeValue"
            :class="styles.radio_group"
            button-style="solid"
        >
            <RadioButton
                :value="Object.keys(pages)[0]"
                @click="$router.push('/')"
                >All Taks</RadioButton
            >
            <RadioButton
                :value="Object.keys(pages)[1]"
                @click="$router.push('/finished')"
                >Finished Tasks</RadioButton
            >
            <RadioButton
                :value="Object.keys(pages)[2]"
                @click="$router.push('/unfinished')"
                >Unfinished Tasks</RadioButton
            >
        </RadioGroup>
    </Layout>
</template>
<script setup lang="ts">
import { RadioGroup, RadioButton, Layout } from "ant-design-vue";
import { useRoute } from "vue-router";
import { useRadio } from "../../../radio-group";
import styles from "./styles.module.scss";
import { onMounted, reactive, watch } from "vue";
import { Pages } from "../../../../api";

const radioStore = useRadio();
const route = useRoute();
const pages = reactive<Pages>({
    1: "/",
    2: "/finished",
    3: "/unfinished",
});
onMounted(() => {
    window.onload = () => {
        if (route.path === "/") {
            radioStore.activeValue = Object.keys(pages)[0];
        }
    };
});
watch(
    () => route.path,
    (newPath) => {
        if (newPath === "/") {
            radioStore.activeValue = Object.keys(pages)[0];
        } else if (newPath === "/finished") {
            radioStore.activeValue = Object.keys(pages)[1];
        } else if (newPath === "/unfinished") {
            radioStore.activeValue = Object.keys(pages)[2];
        }
    }
);
</script>
