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
        <div
          v-if="props.item.date_start !== null && props.item.date_end !== null"
        >
          <Tag color="blue">
            {{ new Date(props.item.date_start).toLocaleDateString("en") }}
          </Tag>
          <Tag color="blue">
            {{ new Date(props.item.date_end).toLocaleDateString("en") }}
          </Tag>
        </div>
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
  date_start: string;
  date_end: string;
}

const props = defineProps<{ item: IItem }>();
</script>
