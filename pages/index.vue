<script setup lang="ts">
const localePath = useLocalePath();

const items = [
  {
    name: "Cube",
    path: "/first",
  },
  {
    name: "THE MATRIX（Japanese ver.）",
    path: "/second",
  },
  {
    name: "Passing data from BabylonJS to Vue using an exposed Engine object",
    path: "/third",
  },
  {
    name: "Sending data from Vue to BabylonJS with loose coupling and without exposing the BabylonJS objects to Vue",
    path: "/4",
  },
  {
    name: "Sending data from Vue to BabylonJS and vice versa with an exposed BabylonJS Vector3 object",
    path: "/5",
  },
  {
    name: "Sending data from Vue to BabylonJS with an exposed BabylonJS Engine and Scene object",
    path: "/6",
  },
  {
    name: "click event (watch scene)",
    path: "/7",
  },
  {
    name: "click event (callback)",
    path: "/8",
  },
  {
    name: "VueとBabylon.jsの双方向やりとり",
    path: "/9",
    image: "./images/9.png"
  },
  {
    name: ".glbファイルのロード",
    path: "/glb",
    image: "./images/glb.png"
  },
  {
    name: "meshを追加・削除する",
    path: "/10",
    image: "./images/10.png"
  },
];
</script>
<template>
  <v-container fluid>
    <h1 class="text-center mt-5 mb-10">
      Nuxt3・Vuetify・Babylon.jsを用いた試験サイト
    </h1>

    <v-row>
      <v-col v-for="item in items.reverse()" cols="6" sm="4">
        <v-card variant="outlined">
          <v-img v-if="item.image" :src="item.image" height="150px" class="bg-grey-lighten-4"></v-img>
          <div class="pa-4">
            <nuxt-link :to="localePath(item.path)">{{ item.name }}</nuxt-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
