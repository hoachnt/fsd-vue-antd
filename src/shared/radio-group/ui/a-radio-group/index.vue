<template>
  <Layout :class="styles.root">
    <RadioGroup
      v-model:value="radioStore.activeValue"
      :class="styles.radio_group"
      button-style="solid"
    >
      <RadioButton value="1" @click="$router.push('/')">All Taks</RadioButton>
      <RadioButton value="2" @click="$router.push('/finished')"
        >Finished Tasks</RadioButton
      >
      <RadioButton value="3" @click="$router.push('/unfinished')"
        >Unfinished Tasks</RadioButton
      >
    </RadioGroup>
  </Layout>
</template>
<script setup lang="ts">
import { RadioGroup, RadioButton, Layout } from "ant-design-vue";
import { useRadio } from "../../../radio-group";
import styles from "./styles.module.scss";

const radioStore = useRadio();
</script>
