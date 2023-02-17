<script setup lang="ts">
import { createScene } from "../scenes/MyThirdScene";

const bjsCanvas = ref(null);

interface Emits {
  fps: (fps: number) => void;
}

const emits = defineEmits<Emits>();

onMounted(() => {
  if (bjsCanvas.value) {
    const fpsCallback = (fps) => {
      emits("fps", fps);
    };
    createScene(bjsCanvas.value, fpsCallback);
  }
});
</script>
<template>
  <div>
    <canvas ref="bjsCanvas" width="500" height="500" />
  </div>
</template>
