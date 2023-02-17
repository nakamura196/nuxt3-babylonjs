<script setup lang="ts">
import { createScene } from "../scenes/Scene8";

const bjsCanvas = ref(null);

const pickedMeshName = ref("");

onMounted(() => {
  if (bjsCanvas.value) {
    const fpsCallback = (val: string) => {
      pickedMeshName.value = val;
    };
    createScene(bjsCanvas.value, fpsCallback);
  }
});
</script>
<template>
  <div>
    <p class="mb-5">
      <label>選択されたmesh: {{ pickedMeshName }}</label>
    </p>
    <canvas ref="bjsCanvas" width="500" height="500" />
  </div>
</template>
