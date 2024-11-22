import { Flex, HStack, VStack } from '@cottons-kr/react-foundation'
import Typo from '@/components/ui/Typography'
import MemberPreview from '@/components/page/rooms/MemberPreview'
import Button from '@/components/ui/Button'

import s from './page.module.scss'

export default function RoomDetailPage() {
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
        <Button style={{ width: 189 }}>
          <Typo size={18}>나가기</Typo>
        </Button>
        <Button variant='secondary' style={{ width: 189 }}>
          <Typo size={18}>시작하기</Typo>
        </Button>
      </HStack>
    </VStack>
  </>
}
