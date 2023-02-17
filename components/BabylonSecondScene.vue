<script setup lang="ts">
import { createScene } from "../scenes/MySecondScene";

const bjsCanvas = ref(null);

onMounted(() => {
  if (bjsCanvas.value) {
    createScene(bjsCanvas.value);
  }
});
</script>

<template>
  <canvas id="renderCanvas" ref="bjsCanvas" />
</template>

<style type="text/css">
#renderCanvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 540px;
}
</style>
