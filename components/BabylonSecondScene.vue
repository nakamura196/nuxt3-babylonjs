<template>
  <canvas id="renderCanvas" ref="bjsCanvas"/>
</template>

<script>
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "../scenes/MySecondScene";

export default {
  name: "BabylonScene",
  setup() {
    const bjsCanvas = ref(null);

    onMounted(() => {
      if (bjsCanvas.value) {
        createScene(bjsCanvas.value);
      }
    });

    return {
      bjsCanvas,
    };
  },
};
</script>

<style type="text/css">

    #renderCanvas {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 540px;
    }
</style>