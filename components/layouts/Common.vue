<script setup lang="ts">
import { BreadCrumbsItem } from "~/types/test";

interface PropType {
  items?: BreadCrumbsItem[];
}

withDefaults(defineProps<PropType>(), {
  items: () => [],
});
</script>

<template>
  <div>
    <BreadCrumbs :items="items" v-if="items.length > 0"></BreadCrumbs>
    <v-container class="my-5">
      <slot></slot>
    </v-container>
  </div>
</template>
