<script setup lang="ts">

import myScene from "../scenes/My4Scene";

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
      myScene.setPosition("box-yellow", val.x, val.y, val.z);
    }
  }
);

const bjsCanvas = ref(null);

onMounted(() => {
  if (bjsCanvas.value) {
    myScene.createScene(bjsCanvas.value);
  }
});

</script>
<template>
  <div>
    <canvas ref="bjsCanvas" width="500" height="500" />
  </div>
</template>