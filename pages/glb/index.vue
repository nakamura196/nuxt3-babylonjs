<script setup lang="ts">
import myScene from "../../scenes/SceneGlb";

const bjsCanvas = ref(null);

onMounted(() => {
  if (bjsCanvas.value) {
    myScene.createScene(bjsCanvas.value);
  }
});
</script>
<template>
  <LayoutsCommon>
    <canvas ref="bjsCanvas" width="500" height="500" />
  </LayoutsCommon>
</template>
