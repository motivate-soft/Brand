<template>
  <v-app>
    <core-view />
  </v-app>
</template>

<script>
  export default {
    components: {
      CoreView: () => import('@/components/core/View')
    }
  }
</script>
