<template>
    <ListItem
        @click="$router.push(`/task/${props.item.id}`)"
        :class="[styles.list_item, { [styles.completed]: item.checked }]"
    >
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
import { TaskCardItem } from "../../../../shared/api";

const props = defineProps<{ item: TaskCardItem }>();
</script>
