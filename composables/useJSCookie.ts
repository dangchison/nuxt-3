import Cookies from 'js-cookie'
import { APP_STORAGE_KEY } from '~/enums/app.enum'

export function useJSCookie() {
  const {
    public: { domain },
  } = useRuntimeConfig()
  const set = (key: string, value: string, options?: Cookies.CookieAttributes | undefined) =>
    Cookies.set(key, value, { expires: 7, domain, ...options })
  const remove = (key: string, options?: Cookies.CookieAttributes | undefined): void => Cookies.remove(key, options)
  const setToken = (token: string) => set(APP_STORAGE_KEY.TOKEN_NAME, token, { sameSite: 'strict', path: '/api' })
  const getToken = () => Cookies.get(APP_STORAGE_KEY.TOKEN_NAME)

  return {
    set,
    remove,
    setToken,
    getToken,
  }
}
