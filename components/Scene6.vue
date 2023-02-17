<script setup lang="ts">
import { Vector3, Scene, Engine } from "@babylonjs/core";
import { createScene } from "../scenes/Scene6";

const bjsCanvas = ref(null);

const scene = ref<Scene>();
const engine = ref<Engine>();

const props = defineProps({
  position: {
    type: Object,
    default() {
      return { x: 0, y: 0, z: 0 };
    },
  },
});

watch(
  () => props.position,
  (val) => {
    if (val) {
      const box = scene.value?.getMeshByName("box-red");
      const position = new Vector3(val.x, val.y, val.z);
      if (box) {
        box.position = position;
      }
    }
  }
);

onMounted(() => {
  if (bjsCanvas.value) {
    const { engine_, scene_ } = createScene(bjsCanvas.value);
    engine.value = engine_;
    scene.value = scene_;
  }
});
</script>
<template>
  <div>
    <canvas ref="bjsCanvas" width="500" height="500" />
  </div>
</template>
