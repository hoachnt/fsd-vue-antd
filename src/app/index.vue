<script setup lang="ts">
import { useRoute } from "vue-router";
import { Routing } from "../pages";
import { ARadioGroup } from "../shared/ui/radio-group";
import { SwipeGesture } from "../shared/ui/swipe-gesture";

const route = useRoute();
</script>

<template>
    <div class="app">
        <SwipeGesture>
            <ARadioGroup v-if="!route.path.includes('task')" />
            <Routing />
        </SwipeGesture>
    </div>
</template>

<style>
@import "./style.scss";
</style>
