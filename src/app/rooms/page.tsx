import { HStack, Spacer, VStack } from '@cottons-kr/react-foundation'
import TableTitle from '@/components/page/rooms/Title'
import TableItem from '@/components/page/rooms/Item'
import Typo from '@/components/ui/Typography'
import { Color } from '@/constants/color'
import Button from '@/components/ui/Button'

import s from './page.module.scss'

export default function RoomsPage() {
  return <>
    <VStack className={s.page} gap={58}>
      <Typo size={50} weight={500}>🚪 Room List</Typo>
      <VStack gap={15}>
        <TableTitle />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
        <TableItem />
      </VStack>
      <HStack align='end' justify='between'>
        <Spacer width='189px' />
        <Typo size={18} color={Color.Gray1}>1 / 5</Typo>
        <Button style={{ width: 189 }}>
          <Typo size={18} weight={600}>+ 새로 만들기</Typo>
        </Button>
      </HStack>
    </VStack>
  </>
}
