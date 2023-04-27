<template>
  <ListItem>
    <template #actions>
      <slot name="actions" />
    </template>
    <ListItemMeta>
      <template #title>
        <a href="#">{{ props.item.title }}</a>
      </template>
      <template #description>
        <p>{{ props.item.description }}</p>
        <Tag color="blue">
          {{ new Date(props.item.date_created).toLocaleDateString("en") }}
        </Tag>
      </template>
    </ListItemMeta>
  </ListItem>
</template>
<script setup lang="ts">
import { ListItemMeta, ListItem, Tag } from "ant-design-vue";

interface IItem {
  title: string;
  description: string;
  checked: boolean;
  date_created: string;
}

const props = defineProps<{ item: IItem }>();
</script>
