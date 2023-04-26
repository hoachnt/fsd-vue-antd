<template>
  <AButton type="primary" :loading="taskAddStore.loading">
    <slot />
  </AButton>
</template>
<script setup lang="ts">
import { AButton } from "../../../shared/button";
import { taskFeatureAddModel } from "../model";

const taskAddStore = taskFeatureAddModel();
</script>
