<template>
  <Checkbox
    v-model:checked="item.checked"
    @click="taskStore.checkedTask(item)"
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
const item = props.item;
</script>
