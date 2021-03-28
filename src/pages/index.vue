<template>
  <Link />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Link from "~/organisms/Link.vue";

export default defineComponent({
  name: "Home",
  components: {
    Link,
  },
});
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
</style>
