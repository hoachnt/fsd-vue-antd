<template>
  <Layout :class="styles.root">
    <ATaskList />
  </Layout>
</template>
<script setup lang="ts">
import { Layout } from "ant-design-vue";
import { ATaskList } from "../../widgets/task-list";
import styles from "./styles.module.scss";
</script>
