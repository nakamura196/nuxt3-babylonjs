<script setup lang="ts">
import { Scene, Engine } from "@babylonjs/core";
import { createScene } from "../scenes/Scene7";

const bjsCanvas = ref(null);

const scene = ref<Scene>();
const engine = ref<Engine>();

onMounted(() => {
  if (bjsCanvas.value) {
    const { engine_, scene_ } = createScene(bjsCanvas.value);
    engine.value = engine_;
    scene.value = scene_;
  }
});

const pickedMeshName = ref("");

watch(
  () => scene.value,
  (val) => {
    if (val?.pickedMeshName) {
      pickedMeshName.value = val.pickedMeshName;
    } else {
      pickedMeshName.value = "";
    }
  },
  { deep: true }
);
</script>
<template>
  <div>
    <p class="mb-5">選択されたmesh: {{ pickedMeshName }}</p>

    <canvas ref="bjsCanvas" width="500" height="500" />
  </div>
</template>
