<template>
  <Card hoverable>
    <template #actions>
      <SettingOutlined />
      <EditOutlined />
      <EllipsisOutlined />
    </template>
    <CardMeta>
      <template #title>
        {{ props.cardItem.title }}
      </template>
      <template #description>
        <p>{{ props.cardItem.description }}</p>
        <div
          v-if="
            props.cardItem.date_start !== null &&
            props.cardItem.date_end !== null
          "
        >
          <Tag color="blue">
            {{ new Date(props.cardItem.date_start).toLocaleString("en") }}
          </Tag>
          <Tag color="blue">
            {{ new Date(props.cardItem.date_end).toLocaleString("en") }}
          </Tag>
        </div>
      </template>
    </CardMeta>
  </Card>
</template>

<script setup lang="ts">
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { Card, CardMeta, Tag } from "ant-design-vue";

interface ICardItem {
  title: string;
  description: string;
  checked: boolean;
  date_start: string;
  date_end: string;
}

const props = defineProps<{ cardItem: ICardItem }>();
console.log(props.cardItem);
</script>
