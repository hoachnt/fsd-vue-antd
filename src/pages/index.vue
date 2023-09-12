<script setup lang="ts">
import { Spin } from "ant-design-vue";
import { RouteMeta, RouterView } from "vue-router";

const getTransitionName = (transitionMeta: RouteMeta) => {
    if (
        transitionMeta &&
        typeof transitionMeta === "object" &&
        transitionMeta.transition &&
        typeof transitionMeta.transition === "string"
    ) {
        return transitionMeta.transition;
    }
    return "fade";
};
</script>

<template>
    <RouterView v-slot="{ Component, route }">
        <Transition :name="getTransitionName(route.meta)">
            <Suspense>
                <template #default>
                    <component :is="Component" />
                </template>
                <template #fallback> <Spin /> </template>
            </Suspense>
        </Transition>
    </RouterView>
</template>
<style></style>
