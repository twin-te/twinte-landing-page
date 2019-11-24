<template>
  <div
    class="card column subsection"
    laxxx-opacity="(vh*0.5) 1, (vh*0.75) 0"
    laxxx-anchor="self"
  >
    <div class="card-content title">
      {{ title }}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component
export default class Index extends Vue {
  @Prop() public title!: string;
}
</script>
<style lang="sass" scoped>
.subsection
  border-radius: 0 15px 15px 0
  width: 90vw
</style>
