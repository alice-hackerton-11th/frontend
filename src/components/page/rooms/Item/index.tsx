import { HStack } from '@cottons-kr/react-foundation'
import Typo from '@/components/ui/Typography'
import { Color } from '@/constants/color'
import Button from '@/components/ui/Button'

import s from './style.module.scss'

export default function RoomsTableItem() {
  return <>
    <HStack className={s.item} align='center' justify='between'>
      <Typo size={18} weight={600} color={Color.Gray1}>001</Typo>
      <Typo size={18} weight={600}>(비상) 통합과학 1단원. 물질과 규칙성</Typo>
      <div>
        <Button size='small' variant='positive' style={{ width: 146 }}>
          <Typo size={18}>Enter room</Typo>
        </Button>
      </div>
      <Typo size={18} weight={600}>5/5</Typo>
      <Typo size={18} weight={600}>15초 / 3라운드</Typo>
      <Typo size={18} color={Color.Gray1}>-</Typo>
    </HStack>
  </>
}
