<template>
  <Layout :class="styles.root">
    <ATaskList />
    <AModal />
  </Layout>
</template>
<script setup lang="ts">
import { Layout } from "ant-design-vue";
import { AModal } from "../../widgets/modal";
import { ATaskList } from "../../widgets/task-list";
import styles from "./styles.module.scss";
</script>
