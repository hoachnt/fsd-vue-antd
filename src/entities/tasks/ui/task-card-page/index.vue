<template>
  <Card hoverable>
    <template #actions :class="styles.actions">
      <LeftOutlined @click="$router.push('/')" />
      <slot name="actions" />
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
            {{ itemStartDate }}
          </Tag>
          <Tag color="blue">
            {{ itemEndDate }}
          </Tag>
        </div>
        <div v-if="props.cardItem.date_time !== null">
          <Tag color="blue">
            {{ itemDate }}
          </Tag>
        </div>
      </template>
    </CardMeta>
  </Card>
</template>

<script setup lang="ts">
import { LeftOutlined } from "@ant-design/icons-vue";
import { Card, CardMeta, Tag } from "ant-design-vue";
import styles from "./styles.module.scss";

interface ICardItem {
  title: string;
  description: string;
  checked: boolean;
  date_start: string;
  date_end: string;
  date_time: string;
}

const props = defineProps<{ cardItem: ICardItem }>();
const userOffset = new Date().getTimezoneOffset() * 60000; // в миллисекундах
let itemDate: Date | string = new Date(props.cardItem.date_time);
let itemStartDate: Date | string = new Date(props.cardItem.date_start);
let itemEndDate: Date | string = new Date(props.cardItem.date_end);

itemDate = new Date(itemDate.getTime() - userOffset).toLocaleString();
itemStartDate = new Date(itemStartDate.getTime() - userOffset).toLocaleString();
itemEndDate = new Date(itemEndDate.getTime() - userOffset).toLocaleString();
</script>
