<script setup lang="ts">
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localeOptions = computed(() => locales.value.map((x) => (typeof x === 'string' ? { code: x, name: x } : x)))
</script>

<template>
  <NuxtLink
    v-for="locale in localeOptions"
    :key="locale.code"
    class="locale-item inline-flex items-center justify-center gap-1"
    :to="switchLocalePath(locale.code)"
  >
    <div :class="`flag-box flag-box__${locale.code}`">
      <span :class="`flag-item flag-${locale.code}`"></span>
    </div>
    {{ locale.name }}
  </NuxtLink>

  <div class="flex gap-1.5 items-center">
    <NuxtLinkLocale to="/">Home Page</NuxtLinkLocale>
    <NuxtLinkLocale to="/product">Product Page</NuxtLinkLocale>
  </div>
</template>

<style lang="scss" scoped>
.locale-item {
  &.router-link-active {
    font-weight: 700;
    pointer-events: none;
  }
}
</style>
