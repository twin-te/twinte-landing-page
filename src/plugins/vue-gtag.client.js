import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'GTM-W65BSBG',
    },
    isEnabled: import.meta.env.PROD,
  })
  trackRouter(useRouter())
})
