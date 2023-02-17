<script setup lang="ts">
import myScene from "../scenes/Scene5";

const bjsCanvas = ref(null);

onMounted(() => {
  if (bjsCanvas.value) {
    myScene.createScene(bjsCanvas.value);

    emitPositionVector();
    emitRotationVector();
  }
});

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

interface Emits {
  bjsPositionVector: (bjsPositionVector: Vector3) => void;
  bjsRotationVector: (bjsRotationVector: Vector3) => void;
}

const emits = defineEmits<Emits>();

const emitPositionVector = () => {
  const bjsPositionVector = myScene.getPosition(
    "box-yellow",
    /*this.scene*/ myScene.scene
  );
  // this.$emit("bjsPositionVector", bjsPositionVector);
  emits("bjsPositionVector", bjsPositionVector);
};

const emitRotationVector = () => {
  const bjsRotationVector = myScene.getRotation(
    "box-green",
    /*this.scene*/ myScene.scene
  );
  // this.$emit("bjsRotationVector", bjsRotationVector);
  emits("bjsRotationVector", bjsRotationVector);
};
</script>
<template>
  <div>
    <canvas ref="bjsCanvas" width="500" height="500" />
  </div>
</template>
