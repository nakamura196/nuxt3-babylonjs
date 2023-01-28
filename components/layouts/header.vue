<script setup>
const localePath = useLocalePath();
</script>
<template>
  <v-app-bar color="primary" dense dark flat>
    <v-app-bar-title>
      <nuxt-link
        :to="localePath({ name: 'index' })"
        style="text-decoration: none; color: inherit"
        >{{ "Nuxt3 x Babylon.js" }}
      </nuxt-link>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" :to="localePath({ name: 'test' })"> Test </v-btn>
  </v-app-bar>
</template>
