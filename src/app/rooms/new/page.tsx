import { Flex, HStack, VStack } from '@cottons-kr/react-foundation'
import Typo from '@/components/ui/Typography'
import Button from '@/components/ui/Button'
import Dropdown from '@/components/ui/Dropdown'
import RangeInput from '@/components/ui/RangeInput'

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
                { label: '(비상) 통합과학 1단원. 물질과 규칙성', value: '1' },
                { label: '(비상) 통합과학 2단원. 물질과 규칙성', value: '2' },
                { label: '(비상) 통합과학 3단원. 물질과 규칙성', value: '3' },
              ]}
              style={{ width: 550 }}
            />
          </HStack>
          <HStack align='center' justify='between'>
            <Typo size={24} weight={500}>인원 수</Typo>
            <RangeInput min={1} max={8} />
          </HStack>
          <HStack align='center' justify='between'>
            <Typo size={24} weight={500}>설명 시간 (초 단위)</Typo>
            <RangeInput />
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
