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
import { ref, watch } from "vue";

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

const itemDate = ref<Date | string>("");
const itemStartDate = ref<Date | string>("");
const itemEndDate = ref<Date | string>("");

watch(props.cardItem, (cardItem) => {
  itemDate.value = new Date(Date.parse(cardItem.date_time));
  itemStartDate.value = new Date(Date.parse(cardItem.date_start));
  itemEndDate.value = new Date(Date.parse(cardItem.date_end));

  itemDate.value = new Date(
    (itemDate.value as Date).getTime() - userOffset
  ).toLocaleString();
  itemStartDate.value = new Date(
    (itemStartDate.value as Date).getTime() - userOffset
  ).toLocaleString();
  itemEndDate.value = new Date(
    (itemEndDate.value as Date).getTime() - userOffset
  ).toLocaleString();
});
</script>
