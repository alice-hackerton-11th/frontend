'use client'

import { Flex, HStack, VStack } from '@cottons-kr/react-foundation'
import Typo from '@/components/ui/Typography'
import Button from '@/components/ui/Button'
import Dropdown from '@/components/ui/Dropdown'
import RangeInput from '@/components/ui/RangeInput'
import { useState } from 'react'
import Link from 'next/link'
import { getApiUrl } from '@/utils/api'
import { getAccessToken } from '@/utils/auth'
import { useRouter } from 'next/navigation'

import s from './page.module.scss'

export default function NewRoomPage() {
  const [subject, setSubject] = useState('')
  const [memberLimit, setMemberLimit] = useState(1)
  const [explanationSeconds, setExplanationSeconds] = useState(30)
  const router = useRouter()

  const onClickCreate = async () => {
    const body = { subject, memberLimit, explanationSeconds }
    const res = await fetch(getApiUrl('/room'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
    },
      body: JSON.stringify(body),
    })
    const { data } = await res.json()
    const { roomId } = data
    
    router.push(`/rooms/${roomId}`)
  }

  return <>
    <Flex
      fullWidth fullHeight
      align='center' justify='center'
    >
      <VStack
        className={s.container}
        align='center' gap={90}
        style={{ width: 1000 }}
      >
        <Flex className={s.title}>
          <Typo size={18} weight={500}>방 설정</Typo>
        </Flex>
        <VStack
          justify='center' gap={20}
          style={{ width: 686 }}
        >
          <HStack align='center' justify='between'>
            <Typo size={24} weight={500}>주제</Typo>
            <Dropdown
              options={[
                { label: '(비상) 통합과학 1단원. 물질과 규칙성', value: '(비상) 통합과학 1단원. 물질과 규칙성' },
                { label: '(비상) 통합과학 2단원. 물질과 규칙성', value: '(비상) 통합과학 2단원. 물질과 규칙성' },
                { label: '(비상) 통합과학 3단원. 물질과 규칙성', value: '(비상) 통합과학 3단원. 물질과 규칙성' },
              ]}
              style={{ width: 550 }}
              onValueChange={setSubject}
            />
          </HStack>
          <HStack align='center' justify='between'>
            <Typo size={24} weight={500}>인원 수</Typo>
            <RangeInput min={1} max={8} onValueChange={setMemberLimit} />
          </HStack>
          <HStack align='center' justify='between'>
            <Typo size={24} weight={500}>설명 시간 (초 단위)</Typo>
            <RangeInput defaultValue={30} onValueChange={setExplanationSeconds} />
          </HStack>
          <HStack align='center' justify='between'>
            <Typo size={24} weight={500}>라운드</Typo>
            <RangeInput min={3} />
          </HStack>
        </VStack>
        <HStack justify='center' gap={20}>
          <Link href='/rooms'>
            <Button style={{ width: 189 }}>
              <Typo size={18}>취소</Typo>
            </Button>
          </Link>
          <Button
            variant='secondary' style={{ width: 189 }}
            onClick={onClickCreate}
          >
            <Typo size={18}>+ 새로 만들기</Typo>
          </Button>
        </HStack>
      </VStack>
    </Flex>
  </>
}
