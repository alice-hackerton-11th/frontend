'use client'

import { Flex, HStack, IParams, VStack } from '@cottons-kr/react-foundation'
import Typo from '@/components/ui/Typography'
import MemberPreview from '@/components/page/rooms/MemberPreview'
import Button from '@/components/ui/Button'
import { getApiUrl } from '@/utils/api'
import { use } from 'react'
import { getAccessToken } from '@/utils/auth'
import { useRouter } from 'next/navigation'

import s from './page.module.scss'

export default function RoomDetailPage(props: IParams<'id'>) {
  const param = use(props.params)
  const router = useRouter()
  const roomId = param.id

  const onClickLeave = async () => {
    await fetch(getApiUrl(`/room/${roomId}/exit`), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
    router.push('/rooms')
  }

  const onClickStart = async () => {

  }

  return <>
    <VStack align='center' justify='center' gap={76} fullHeight>
      <VStack align='center' justify='center' gap={55}>
        <Flex className={s.roomId} align='center' justify='center'>
          <Typo size={18}>Room : 002</Typo>
        </Flex>
        <HStack
          wrap gap={111}
          style={{ width: 942 }}
        >
          <MemberPreview />
          <MemberPreview />
          <MemberPreview />
          <MemberPreview />
          <MemberPreview />
          <MemberPreview />
          <MemberPreview />
          <MemberPreview />
        </HStack>
      </VStack>

      <HStack justify='center' gap={20}>
        <Button style={{ width: 189 }} onClick={onClickLeave}>
          <Typo size={18}>나가기</Typo>
        </Button>
        <Button variant='secondary' style={{ width: 189 }} onClick={onClickStart}>
          <Typo size={18}>시작하기</Typo>
        </Button>
      </HStack>
    </VStack>
  </>
}
