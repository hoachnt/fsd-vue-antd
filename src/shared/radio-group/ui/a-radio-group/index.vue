<template>
  <Layout :class="styles.root">
    <RadioGroup
      v-model:value="radioStore.activeValue"
      :class="styles.radio_group"
      button-style="solid"
    >
      <div v-if="!route.path.includes('task')">
        <RadioButton value="2" @click="$router.push('/')">All Taks</RadioButton>
        <RadioButton value="3" @click="$router.push('/finished')"
          >Finished Tasks</RadioButton
        >
        <RadioButton value="4" @click="$router.push('/unfinished')"
          >Unfinished Tasks</RadioButton
        >
      </div>
    </RadioGroup>
  </Layout>
</template>
<script setup lang="ts">
import { RadioGroup, RadioButton, Layout } from "ant-design-vue";
import { useRoute } from "vue-router";
import { useRadio } from "../../../radio-group";
import styles from "./styles.module.scss";

const radioStore = useRadio();
const route = useRoute();
</script>
