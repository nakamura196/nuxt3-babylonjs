<script setup lang="ts">
// const localePath = useLocalePath()
definePageMeta({
});

const fps = ref(0);

const fpsReceived = (fpsReceived: number) => {
  fps.value = fpsReceived;
};
</script>

<template>
  <LayoutsCommon>
    <label>{{ fps }}</label>
    <BabylonThirdScene @fps="fpsReceived" />
  </LayoutsCommon>
</template>
