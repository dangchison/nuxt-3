import type { DateFormat } from '~/types/app.type'

import dayjs from 'dayjs'
// https://day.js.org/docs/en/i18n/i18n
import 'dayjs/locale/vi'
import 'dayjs/locale/en'
import 'dayjs/locale/ja'

export function useDate() {
  const { locale } = useI18n()

  const _dateLocale = (value: string | Date) => dayjs(value).locale(locale.value)

  const dateISOString = (value: string | Date): string => _dateLocale(value).toISOString()

  const formatDateTime = (value: string | Date, format: DateFormat = 'MMM D, YYYY'): string => _dateLocale(value).format(format)

  const dateFromNow = (value: string | Date, isAgo: boolean = false): string => _dateLocale(value).fromNow(isAgo)

  return {
    dateISOString,
    formatDateTime,
    dateFromNow,
  }
}
