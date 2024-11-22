export function getApiUrl(path: string, query?: Record<string, string>) {
  const rootUrl = new URL(process.env.API_URL || '')

  rootUrl.pathname = path

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      rootUrl.searchParams.append(key, value)
    }
  }

  return rootUrl.toString()
}
