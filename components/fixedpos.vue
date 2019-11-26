<template>
  <div>
    <b-button
      id="btn_1"
      class="is-large is-primary is-hidden-mobile"
      icon-right="github-circle"
      rounded
      tag="a"
      href="https://github.com/twin-te"
      aria-label="Github"
      v-rellax="icon"
    ></b-button>
    <b-button
      id="btn_2"
      class="is-large is-primary is-hidden-mobile"
      icon-right="twitter-circle"
      rounded
      tag="a"
      href="https://twitter.com/te_twin"
      aria-label="Twitter"
      v-rellax="icon"
    ></b-button>
    <!-- 円1 -->
    <transition name="slide2">
      <div
        class="circle top-7 left-3"
        v-rellax="{ speed: -4 }"
        v-if="load"
      ></div>
    </transition>
    <transition name="bounce">
      <img
        src="~/assets/img/iPhone.png"
        class="top-7 is-bold"
        id="images"
        v-if="load"
      />
    </transition>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Index extends Vue {
  public icon: Object = { speed: 8 };
  public load: Boolean = false;
  mounted(): void {
    this.load = true;
  }
}
</script>
<style lang="sass" scoped>
@for $i from 1 through 2
  #btn_#{$i}
    position: absolute
    top: #{$i * 10 + 5}vh
    right: 13vw

.slide2-enter
  transform: translateY(90vh)
.slide2-enter-active
  transition: transform 1s ease-out

.circle
  display: inline-block
  width: 90vw
  height: 90vw
  border-radius: 50%
  -webkit-border-radius: 50%
  -moz-border-radius: 50%
  background-color: #6febe1

.bounce-enter-active
  animation: bounce-in .8s ease

@keyframes bounce-in
  0%
    transform: scale(0)
  50%
    transform: scale(1.2)
  100%
    transform: scale(1)

$pc: 1200px
$tab: 600px
$mobile: 200px

@media (min-width: ($mobile))
  #images
    position: absolute
    right: 0
    top: 50vh
    height: 45vh
    width: auto


@media (min-width: ($tab))
  #images
    position: absolute
    top: 35vh
    right: 10vw
    height: 60vh
    width: auto

@media (min-width: ($pc))
  #images
    position: absolute
    top: 20vh
    right: 25vw
    height: 80vh
    width: auto
</style>
<style lang="scss" scoped>
@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
</style>
