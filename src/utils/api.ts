export function getApiUrl(path: string) {
  const rootUrl = new URL(process.env.API_URL || '')
  return new URL(path, rootUrl).toString()
}
