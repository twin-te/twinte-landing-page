<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '~/assets/scss/reset.scss'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss">
html {
  height: 100%;
  background-color: $base;
}
</style>
