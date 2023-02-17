<script setup lang="ts">
// const localePath = useLocalePath()
definePageMeta({
});

const cubePosition = ref({})
const offset = ref(0)
const x = ref(0)
const y = ref(0)
const z = ref(0)

const moveCube = () => {
    getNextPosition()
    moveCubeSharedScene()
};

const moveCubeSharedScene = () => {
    cubePosition.value = {
        x: -2,
        y: y.value,
        z: z.value
    }
}

const getNextPosition = () => {
    offset.value += 0.5;
    x.value = 0
    y.value = 0 + offset.value
    z.value = 0
};
</script>

<template>
  <LayoutsCommon>
    <v-btn color="primary" flat class="mb-5" @click="moveCube">Move Cube</v-btn>
    <Scene6 :position="cubePosition" />
  </LayoutsCommon>
</template>
