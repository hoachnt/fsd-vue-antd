<template>
  <AButton danger @click="taskStore.deleteTask(props.id)">
    <slot />
  </AButton>
</template>
<script setup lang="ts">
import { AButton } from "../../../shared/ui/button";
import { taskFeatureDeleteModel } from "../model";

const taskStore = taskFeatureDeleteModel();
const props = defineProps({
  id: Number,
});
</script>
../../../shared/ui/button