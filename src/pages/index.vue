<script setup lang="ts">
import { Spin } from "ant-design-vue";
import { RouteMeta, RouterView } from "vue-router";
import { MainLoader } from "../shared/ui/loader/ui/main-loader";

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
                    <template #default>
                        <component :is="Component" />
                    </template>
                    <template #fallback> <Spin /> </template>
                </Suspense>
            </Transition>
        </template>
        <template v-else>
            <MainLoader />
        </template>
    </RouterView>
</template>
<style></style>
