<script setup lang="ts">
import { Routing } from "../pages";
import { ARadioGroup } from "../shared/ui/radio-group";
import { SwipeGesture } from "../shared/ui/swipe-gesture";
</script>

<template>
  <div class="app">
    <SwipeGesture>
      <ARadioGroup />
      <Routing />
    </SwipeGesture>
  </div>
</template>

<style>
@import "./style.scss";
</style>
