<template>
    <Modal
        v-model:open="visible"
        :title="props.title"
        :after-close="
            () => {
                funcValidation();
                funcClose(visible);
            }
        "
    >
        <template #footer>
            <slot name="footer"></slot>
        </template>
        <slot></slot>
    </Modal>
</template>
<script setup lang="ts">
import { Modal } from "ant-design-vue";
// import { useFeatureAddTaskStore } from "../../../../features/add-task/model/tasks";
import { ref } from "vue";

const props = defineProps<{
    visible: boolean;
    funcValidation: () => void;
    funcClose: (event: boolean) => void;
    title: string;
}>();

// const addTaskStore = useFeatureAddTaskStore();
const visible = ref(props.visible);
</script>
<style></style>
