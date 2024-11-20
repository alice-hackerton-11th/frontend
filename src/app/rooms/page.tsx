import { HStack, VStack } from '@cottons-kr/react-foundation'
import TableTitle from '@/components/page/rooms/Title'
import TableItem from '@/components/page/rooms/Item'
import Typo from '@/components/ui/Typography'

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
      <HStack></HStack>
    </VStack>
  </>
}
