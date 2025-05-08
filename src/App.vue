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
@use '~/assets/scss/main';
@use '~/assets/scss/variable';

html {
  height: 100%;
  background-color: variable.$base;
}
</style>
