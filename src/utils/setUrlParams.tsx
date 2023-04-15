/**
 * Sets Search Param to the url using react router setSearchParams() Fn
 * @param key search param key
 * @param value search param value
 * @param searchParams from useSearchParam()
 * @param setSearchParams from useSearchParam()
 */
export const setUrlParams = (
  key: string,
  value: string,
  searchParams: URLSearchParams,
  router: any
) => {
  const params = new URLSearchParams(searchParams.toString())
  params.set(key, value)
  router.replace(router.pathname + '?' + params.toString())
}
