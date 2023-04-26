<template>
  <ListItem>
    <template #actions>
      <slot name="actions"/>
    </template>
    <ListItemMeta>
      <template #title>
        <a href="#">{{ item.title }}</a>
      </template>
      <template #description> {{ item.description }} </template>
    </ListItemMeta>
  </ListItem>
</template>
<script setup lang="ts">
import { ListItemMeta, ListItem } from "ant-design-vue";

interface IItem {
  title: string;
  description: string;
  checked: boolean;
}

const props = defineProps<{ item: IItem }>();
const item = props.item;
</script>
