'use client'

import Typo from '@/components/ui/Typography'
import { Color } from '@/constants/color'
import { HStack, VStack } from '@cottons-kr/react-foundation'
import Button from '@/components/ui/Button'

import s from './style.module.scss'

export default function HomeNameInput() {
  return <>
    <VStack gap={9}>
      <HStack gap={19}>
        <input className={s.input} placeholder='이름을 입력하세요.' />
        <Button style={{ width: 189 }}>
          <Typo size={18}>시작하기</Typo>
        </Button>
      </HStack>
      <Typo size={18} color={Color.NegativeColor}>중복된 이름입니다. 다시 입력해 주세요</Typo>
    </VStack>
  </>
}
