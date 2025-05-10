<template>
  <main>
    <OrganismsHeaderMenu v-model:in-top="inTop" />
    <OrganismsTop />
    <OrganismsFeature />
    <OrganismsOptionFeatures />
    <OrganismsFaq />
    <OrganismsMember />
    <OrganismsLink />
    <OrganismsBottom />
    <OrganismsFooter />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'Home',
  setup: () => {
    const inTop = ref(false)

    onMounted(async () => {
      const ScrollReveal = (await import('scrollreveal')).default

      ScrollReveal().reveal('.bottom1', {
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 500,
        delay: 0,
        distance: '40px',
        opacity: 0,
        scale: 1,
        viewFactor: 0.1,
      })
      ScrollReveal().reveal('.bottom2', {
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 500,
        delay: 500,
        distance: '40px',
        opacity: 0,
        scale: 1,
        viewFactor: 0.1,
      })
      ScrollReveal().reveal('.bottom3', {
        origin: 'bottom',
        easing: 'ease-in-out',
        duration: 500,
        delay: 750,
        distance: '40px',
        opacity: 0,
        scale: 1,
      })
      ScrollReveal().reveal('.top1', {
        origin: 'top',
        easing: 'ease-in-out',
        duration: 700,
        delay: 350,
        distance: '40px',
        opacity: 0,
        scale: 1,
        viewFactor: 1,
      })
      ScrollReveal().reveal('.opacity1', {
        easing: 'ease-in-out',
        duration: 700,
        delay: 100,
        opacity: 0,
        scale: 1,
        viewFactor: 0.1,
      })
      ScrollReveal().reveal('.opacity2', {
        easing: 'ease-in-out',
        duration: 800,
        delay: 500,
        opacity: 0,
        scale: 1,
        viewFactor: 0.1,
      })
      ScrollReveal().reveal('.opacity3', {
        easing: 'ease-in-out',
        duration: 800,
        delay: 700,
        opacity: 0,
        scale: 1,
        viewFactor: 1,
      })
      ScrollReveal().reveal('.scale', {
        easing: 'ease-in-out',
        duration: 250,
        delay: 100,
        opacity: 0,
        scale: 0.9,
      })
    })

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        watchEffect(() => {
          inTop.value = entries[0].isIntersecting
        })
      })
      const target = document.querySelector('.top')
      observer.observe(target as Element)
    })

    return { inTop }
  },
})
</script>

<style lang="scss" scoped>
</style>
