<script lang="ts" setup>
const { registerMeta } = useSeo()
const { t } = useI18n()
const { formatDateTime, dateISOString, dateFromNow } = useDate()
const { formatCurrency } = useNumber()

registerMeta(t('head.title.homePage'), 'this is home page')
</script>

<template>
  <main>
    <h1 class="text-3xl text-center">{{ $t('welcome') }}</h1>
    <p class="text-3xl text-center">{{ formatCurrency(1234) }}</p>
    <p class="text-3xl text-center">{{ formatDateTime('2023-12-14') }}</p>
    <p class="text-3xl text-center">{{ dateFromNow('2023-12-14') }}</p>
    <p class="text-3xl text-center">{{ dateISOString('2023-12-14') }}</p>
    <div class="text-center">
      <Icon name="uil:github" />
      <Icon name="mdi:alert-circle-check-outline" />
    </div>
  </main>
</template>
