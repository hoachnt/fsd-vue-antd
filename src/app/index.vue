<script setup lang="ts">
import { useRoute } from "vue-router";
import { Routing } from "../pages";
import { ARadioGroup } from "../shared/ui/radio-group";
import { SwipeGesture } from "../shared/ui/gesture";

const route = useRoute();
</script>

<template>
    <div class="app">
        <SwipeGesture>
            <transition name="from-top">
                <ARadioGroup v-if="!route.path.includes('task')" />
            </transition>
            <Routing />
        </SwipeGesture>
    </div>
</template>

<style>
@import "./style.scss";
</style>
