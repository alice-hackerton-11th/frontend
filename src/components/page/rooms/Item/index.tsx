import { HStack } from '@cottons-kr/react-foundation'
import Typo from '@/components/ui/Typography'
import { Color } from '@/constants/color'
import Button from '@/components/ui/Button'
import Link from 'next/link'

import s from './style.module.scss'

type RoomsTableItemProps = {
  data: Room
}
export default function RoomsTableItem(props: RoomsTableItemProps) {
  return <>
    <HStack className={s.item} align='center' justify='between'>
      <Typo size={18} weight={600} color={Color.Gray1}>{props.data.roomId.toString().padStart(3, '0')}</Typo>
      <Typo size={18} weight={600}>{props.data.subject}</Typo>
      <Link href={`/rooms/${props.data.roomId}`}>
        <Button size='small' variant='secondary' style={{ width: 146 }}>
          <Typo size={18} weight={600}>입장하기</Typo>
        </Button>
      </Link>
      <Typo size={18} weight={600}>{props.data.memberCount}</Typo>
      <Typo size={18} weight={600}>{props.data.explanationSecond}초 / 3라운드</Typo>
      <Typo size={18} color={Color.Gray1}>-</Typo>
    </HStack>
  </>
}
