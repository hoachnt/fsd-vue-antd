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
        <template v-if="Component">
            <Transition :name="getTransitionName(route.meta)">
                <Suspense>
                    <!-- main content -->
                    <component :is="Component" />

                    <!-- loading state -->
                    <template #fallback> <Spin /> </template>
                </Suspense>
            </Transition>
        </template>
    </RouterView>
</template>
<style></style>
