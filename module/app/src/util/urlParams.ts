export function urlParam(param: string): string | null {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  return urlParams.get(param)
}
