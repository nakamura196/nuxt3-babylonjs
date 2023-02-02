<script setup lang="ts">

interface PropType {
  items?: any[];
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
