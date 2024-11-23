'use client'

import { HStack } from '@cottons-kr/react-foundation'
import Typo from '@/components/ui/Typography'
import { Color } from '@/constants/color'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { getApiUrl } from '@/utils/api'
import { getAccessToken } from '@/utils/auth'

import s from './style.module.scss'

type RoomsTableItemProps = {
  data: Room
}
export default function RoomsTableItem(props: RoomsTableItemProps) {
  const router = useRouter()

  const onClickJoin = async () => {
    const res = await fetch(getApiUrl(`/room/${props.data.roomId}/enter`), {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`,
      },
    })
    if (res.ok) {
      router.push(`/rooms/${props.data.roomId}`)
    } else {
      alert('입장에 실패했습니다.')
    }
  }

  return <>
    <HStack className={s.item} align='center' justify='between'>
      <Typo size={18} weight={600} color={Color.Gray1}>{props.data.roomId.toString().padStart(3, '0')}</Typo>
      <Typo size={18} weight={600}>{props.data.subject}</Typo>
      <Button
        size='small' variant='secondary' style={{ width: 146 }}
        onClick={onClickJoin}
      >
        <Typo size={18} weight={600}>입장하기</Typo>
      </Button>
      <Typo size={18} weight={600}>{props.data.memberCount}</Typo>
      <Typo size={18} weight={600}>{props.data.explanationSecond}초 / 3라운드</Typo>
      <Typo size={18} color={Color.Gray1}>-</Typo>
    </HStack>
  </>
}
