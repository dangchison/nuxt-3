<script setup lang="ts">
const {
  public: { siteName },
} = useRuntimeConfig()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})
useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs?.lang,
    dir: head.value.htmlAttrs?.dir,
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${siteName}` : siteName
  },
  meta: [...(head.value.meta || [])],
})
</script>

<template>
  <nuxt-layout>
    <app-lang-switcher />
    <nuxt-page />
  </nuxt-layout>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 200ms;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
}
</style>
