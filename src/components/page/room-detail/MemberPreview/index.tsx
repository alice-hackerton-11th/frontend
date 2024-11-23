'use client'

import Typo from '@/components/ui/Typography'
import { Color } from '@/constants/color'
import { Flex, VStack } from '@cottons-kr/react-foundation'

import s from './style.module.scss'

type RoomsMemberPreviewProps = {
  name?: string
}
export default function RoomsMemberPreview(props: RoomsMemberPreviewProps) {
  return <>
    <VStack
      align='center' gap={15}
      style={{ width: 'fit-content' }}
    >
      <Flex direction='column' align='center' gap={10}>
        <Typo size={18} color={Color.Gray1}>Player 1</Typo>
        <Typo size={24} weight={500}>{props.name ?? '-'}</Typo>
      </Flex>
      <Flex
        className={s.preview}
        align='center' justify='center'
      ></Flex>
    </VStack>
  </>
}
