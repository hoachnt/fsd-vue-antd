<script setup lang="ts">
import { Spin } from "ant-design-vue";
import { RouterView } from "vue-router";
</script>

<template>
    <RouterView v-slot="{ Component }">
        <template v-if="Component">
            <Transition name="fade">
                <KeepAlive>
                    <Suspense>
                        <!-- main content -->
                        <component :is="Component" />

                        <!-- loading state -->
                        <template #fallback> <Spin /> </template>
                    </Suspense>
                </KeepAlive>
            </Transition>
        </template>
    </RouterView>
</template>
<style>
.fade-leave-active {
    transition: var(--page-transition-time) ease;
}
.fade-enter-active {
    transition: var(--page-transition-time) ease;
    transition-delay: var(--page-transition-time);
}
.fade-enter-from {
    opacity: 0;
    transform: translateX(100px);
}
.fade-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}
</style>
