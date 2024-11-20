import { Flex, HStack, VStack } from '@cottons-kr/react-foundation'
import Typo from '@/components/ui/Typography'
import Button from '@/components/ui/Button'

import s from './page.module.scss'

export default function NewRoomPage() {
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
          <Typo size={18} weight={500}>Room setting</Typo>
        </Flex>
        <VStack
          justify='center' gap={20}
          style={{ width: 686 }}
        >
          <HStack align='center' justify='between'>
            <Typo size={24} weight={500}>Topic</Typo>
          </HStack>
          <HStack align='center' justify='between'>
            <Typo size={24} weight={500}>Members</Typo>
          </HStack>
          <HStack align='center' justify='between'>
            <Typo size={24} weight={500}>Explanation Time (secs)</Typo>
          </HStack>
          <HStack align='center' justify='between'>
            <Typo size={24} weight={500}>Members</Typo>
          </HStack>
        </VStack>
        <HStack justify='center' gap={20}>
          <Button style={{ width: 189 }}>
            <Typo size={18}>Cancel</Typo>
          </Button>
          <Button variant='positive' style={{ width: 189 }}>
            <Typo size={18}>+ Make Room</Typo>
          </Button>
        </HStack>
      </VStack>
    </Flex>
  </>
}
