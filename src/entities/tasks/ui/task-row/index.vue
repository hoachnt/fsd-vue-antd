<template>
  <ListItemMeta>
    <template #title>
      <a href="#">{{ item.title }}</a>
    </template>
    <template #description> {{ item.description }} </template>
  </ListItemMeta>
</template>
<script setup lang="ts">
import { ListItemMeta } from "ant-design-vue";

interface IItem {
  title: string;
  description: string;
  checked: boolean;
}

const props = defineProps<{ item: IItem }>();
const item = props.item;
</script>
