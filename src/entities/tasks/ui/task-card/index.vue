<template>
    <ListItem
        @dblclick="$router.push(`/task/${props.item.id}`)"
        :class="[styles.list_item, { [styles.completed]: item.checked }]"
    >
        <template #actions>
            <slot name="actions" />
        </template>
        <ListItemMeta>
            <template #title>
                <a>{{ props.item.title }}</a>
            </template>
            <template #description>
                <p>{{ props.item.description }}</p>
                <div
                    v-if="
                        props.item.date_start !== null &&
                        props.item.date_end !== null
                    "
                >
                    <Tag color="blue">
                        {{ itemStartDate }}
                    </Tag>
                    <Tag color="blue">
                        {{ itemEndDate }}
                    </Tag>
                </div>
                <div v-if="props.item.date_time !== null">
                    <Tag color="blue">
                        {{ itemDate }}
                    </Tag>
                </div>
            </template>
        </ListItemMeta>
    </ListItem>
</template>
<script setup lang="ts">
import { ListItemMeta, ListItem, Tag } from "ant-design-vue";
import styles from "./styles.module.scss";

interface IItem {
    id: number;
    title: string;
    description: string;
    checked: boolean;
    date_start: string;
    date_end: string;
    date_time: string;
}

const props = defineProps<{ item: IItem }>();
const userOffset = new Date().getTimezoneOffset() * 60000; // в миллисекундах
let itemDate: Date | string = new Date(props.item.date_time);
let itemStartDate: Date | string = new Date(props.item.date_start);
let itemEndDate: Date | string = new Date(props.item.date_end);

itemDate = new Date(itemDate.getTime() - userOffset).toLocaleString();
itemStartDate = new Date(itemStartDate.getTime() - userOffset).toLocaleString();
itemEndDate = new Date(itemEndDate.getTime() - userOffset).toLocaleString();
</script>
