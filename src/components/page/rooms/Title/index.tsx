import { HStack, Spacer } from '@cottons-kr/react-foundation'
import Typo from '@/components/ui/Typography'

import s from './style.module.scss'

export default function RoomsTableTitle() {
  return <>
    <HStack className={s.title} align='center' justify='between'>
      <Typo size={18}></Typo>
      <Typo size={18}>주제</Typo>
      <Typo size={18}>상태</Typo>
      <Typo size={18}>인원 수</Typo>
      <Typo size={18}>설정</Typo>
      <Spacer width='20px' />
    </HStack>
  </>
}
