<script setup lang="ts">
import { RouteMeta, RouterView } from "vue-router";
import { LoaderModal } from "../shared/ui/modal";

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
                    <template #fallback> <LoaderModal /> </template>
                </Suspense>
            </Transition>
        </template>
    </RouterView>
</template>
<style></style>
