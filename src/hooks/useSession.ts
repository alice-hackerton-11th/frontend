import { useEffect, useState } from 'react'

export function useSession() {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  
  const refresh = () => {
    const accessToken = sessionStorage.getItem('accessToken')
    setAccessToken(accessToken)
  }

  useEffect(refresh, [])

  return { accessToken, refresh }
}
