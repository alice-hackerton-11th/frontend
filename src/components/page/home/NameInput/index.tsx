'use client'

import Typo from '@/components/ui/Typography'
import { Color } from '@/constants/color'
import { HStack, VStack } from '@cottons-kr/react-foundation'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import { getApiUrl } from '@/utils/api'
import { useRouter } from 'next/navigation'

import s from './style.module.scss'

export default function HomeNameInput() {
  const [name, setName] = useState('')
  const [isDuplicate, setIsDuplicate] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onClickStart = async () => {
    if (loading) return
    setLoading(true)

    try {
      const res = await fetch(getApiUrl('member'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
      const { data } = await res.json()
      const { accessToken, memberId } = data as { accessToken: string, memberId: number }

      sessionStorage.setItem('accessToken', accessToken)
      sessionStorage.setItem('memberId', memberId.toString())

      router.push('/rooms')
    } catch (err) {
      if (err instanceof Response && err.status === 409) {
        setIsDuplicate(true)
      }
    } finally {
      setLoading(false)
    }
  }

  return <>
    <VStack gap={9}>
      <HStack gap={19}>
        <input
          className={s.input} placeholder='이름을 입력하세요.'
          value={name} onChange={(e) => setName(e.target.value)}
        />
        <Button
          disabled={loading}
          style={{ width: 189 }}
          onClick={onClickStart}
        >
          <Typo size={18}>시작하기</Typo>
        </Button>
      </HStack>
      {isDuplicate && (
        <Typo size={18} color={Color.NegativeColor}>중복된 이름입니다. 다시 입력해 주세요</Typo>
      )}
    </VStack>
  </>
}
