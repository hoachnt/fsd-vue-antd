<template>
    <ListItem @dblclick="$router.push(`/task/${props.item.id}`)"
        :class="[styles.list_item, { [styles.completed]: item.checked }]">
        <template #actions>
            <slot name="actions" />
        </template>
        <ListItemMeta>
            <template #title>
                <a>{{ props.item.title }}</a>
            </template>
        </ListItemMeta>
    </ListItem>
</template>
<script setup lang="ts">
import { ListItemMeta, ListItem } from "ant-design-vue";
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
</script>
