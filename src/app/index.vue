<script setup lang="ts">
import { Routing } from "../pages";
import { SwipeProcess } from "../processes";
import { ARadioGroup } from "../shared/ui/radio-group";
</script>

<template>
  <div class="app">
    <SwipeProcess>
      <ARadioGroup />
      <Routing />
    </SwipeProcess>
  </div>
</template>

<style>
@import "./style.scss";
</style>
