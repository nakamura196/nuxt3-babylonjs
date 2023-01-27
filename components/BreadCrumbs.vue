<script setup lang="ts">
import {mdiChevronRight} from '@mdi/js'


interface PropType {
  items?: any[];
}

withDefaults(defineProps<PropType>(), {
  items: () => [],
});
</script>

<template>
  <v-sheet style="background-color: #f6f4ec"> <!-- class="bg-grey-lighten-2" -->
    <v-container fluid class="py-2">
      <v-breadcrumbs class="py-0 mx-0 px-0" :items="items">
        <template v-slot:divider>
          <v-icon :icon="mdiChevronRight"></v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>
  </v-sheet>
</template>
