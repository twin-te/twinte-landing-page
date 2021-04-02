<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
@import '~/scss/main.scss';
html {
  height: 100%;
  background-color: $base;
}
</style>
