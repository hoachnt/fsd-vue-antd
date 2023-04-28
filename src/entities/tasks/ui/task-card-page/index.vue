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
import { LeftOutlined } from "@ant-design/icons-vue";
import { Card, CardMeta, Tag } from "ant-design-vue";
import styles from "./styles.module.scss";

interface ICardItem {
  title: string;
  description: string;
  checked: boolean;
  date_start: string;
  date_end: string;
}

const props = defineProps<{ cardItem: ICardItem }>();
</script>
