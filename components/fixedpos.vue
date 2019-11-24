<template>
  <div>
    <b-button
      id="btn_1"
      class="is-large is-primary is-hidden-mobile"
      icon-right="github-circle"
      rounded
      tag="a"
      href="https://github.com/HikaruEgashira"
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
      <div class="circle top-7 left-3" v-rellax="{ speed: -4 }" v-if="load"></div>
    </transition>
    <transition name="bounce">
      <div class="top-7 is-bold" id="name" v-if="load">Twin:te</div>
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

#name
  font-size: 90px
  position: absolute
  right: 13vw
</style>
