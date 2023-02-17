<script setup lang="ts">
// const localePath = useLocalePath()
definePageMeta({});

const cubePosition = ref({});
const offset = ref(0);
const x = ref(0);
const y = ref(0);
const z = ref(0);

const bjsPositionVector = ref<Vector3>();
const bjsRotationVector = ref<Vector3>();

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

const bjsPositionVectorReceived = (bjsPositionVector_: Vector3) => {
  bjsPositionVector.value = bjsPositionVector_;
};

const bjsRotationVectorReceived = (bjsRotationVector_: Vector3) => {
  bjsRotationVector.value = bjsRotationVector_;
};

const moveCube = () => {
  getNextPosition();
  // moveCubeTheRightWay()
  moveCubeSharedVector();
};

const moveCubeSharedVector = () => {
  if (bjsPositionVector.value) {
    // this.bjsPositionVector = new Vector3(0, this.y, this.z);
    // the line above will not work, you must not create a new object
    // but you have to modify the existing one's properties
    bjsPositionVector.value.y = y.value;
  }
};

const getNextPosition = () => {
  offset.value += 0.5;
  x.value = 0;
  y.value = 0 + offset.value;
  z.value = 0;
};
</script>

<template>
  <LayoutsCommon>
    <ul>
      <li v-if="bjsRotationVector">
        Green Rotation Y: {{ bjsRotationVector.y }}
      </li>
      <li v-if="bjsPositionVector">Yellow Position:{{ bjsPositionVector }}</li>
    </ul>
    <v-btn color="primary" flat class="mb-5" @click="moveCube"
      >Move Yellow Cube</v-btn
    >
    <Scene5
      @bjsPositionVector="bjsPositionVectorReceived"
      @bjsRotationVector="bjsRotationVectorReceived"
      :position="cubePosition"
    />
  </LayoutsCommon>
</template>
