const currencySymbol = new Map().set('vi-VN', 'VND').set('en-US', 'USD').set('ja-JP', 'JPY')

export function useNumber() {
  const { locale, locales } = useI18n()
  const isoCode = locales.value.find((item) => item.code === locale.value)

  const formatCurrency = (value: number): string =>
    Intl.NumberFormat(isoCode?.iso, {
      style: 'currency',
      currency: currencySymbol.get(isoCode?.iso || 'en-US'),
      maximumFractionDigits: isoCode?.code === 'en' ? 0 : 2,
    }).format(value)

  return {
    formatCurrency,
  }
}
