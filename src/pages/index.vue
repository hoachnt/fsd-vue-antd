<script setup lang="ts">
import { Spin } from "ant-design-vue";
import { RouterView } from "vue-router";
</script>

<template>
    <RouterView v-slot="{ Component, route }">
        <template v-if="Component">
            <Transition :name="route.meta.transition || 'fade'">
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
