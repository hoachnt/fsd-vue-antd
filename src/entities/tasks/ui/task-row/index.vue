<template>
  <ListItem>
    <template #actions>
      <Checkbox v-model:checked="item.checked" />
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
import { Checkbox } from "ant-design-vue";
import { ListItem } from "ant-design-vue";
import { ListItemMeta } from "ant-design-vue";

interface IItem {
  title: string;
  description: string;
  checked: boolean;
}

const props = defineProps<{ item: IItem }>();
const item = props.item;
</script>
