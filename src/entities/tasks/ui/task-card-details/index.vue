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
import { TaskCardItem } from "../../../../shared/api";

const props = defineProps<{ cardItem: TaskCardItem }>();
const userOffset = new Date().getTimezoneOffset() * 60000; // в миллисекундах

const itemDate = ref<Date | string>("");
const itemStartDate = ref<Date | string>("");
const itemEndDate = ref<Date | string>("");

changeCardItem(
    (itemDate.value = new Date(props.cardItem.date_time)),
    (itemStartDate.value = new Date(props.cardItem.date_start)),
    (itemEndDate.value = new Date(props.cardItem.date_end))
);

watch(props.cardItem, (cardItem) => {
    changeCardItem(
        (itemDate.value = new Date(cardItem.date_time)),
        (itemStartDate.value = new Date(cardItem.date_start)),
        (itemEndDate.value = new Date(cardItem.date_end))
    );
});

function changeCardItem(
    itemDateArgument: Date | string,
    itemStartDateArgument: Date | string,
    itemEndDateArgument: Date | string
): void {
    itemDate.value = new Date(
        (itemDateArgument as Date).getTime() - userOffset
    ).toLocaleString();
    itemStartDate.value = new Date(
        (itemStartDateArgument as Date).getTime() - userOffset
    ).toLocaleString();
    itemEndDate.value = new Date(
        (itemEndDateArgument as Date).getTime() - userOffset
    ).toLocaleString();
}
</script>
