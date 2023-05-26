<template>
    <Checkbox
        :checked="props.item.checked"
        @click="taskStore.checkedTask(props.item)"
    />
</template>
<script setup lang="ts">
import { Checkbox } from "ant-design-vue";
import { taskFeatureCheckedModel } from "../../toggle-task";

interface IItem {
    title: string;
    description: string;
    checked: boolean;
}

const taskStore = taskFeatureCheckedModel();
const props = defineProps<{ item: IItem }>();
</script>
