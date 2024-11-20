import { HStack, Spacer } from '@cottons-kr/react-foundation'
import Typo from '@/components/ui/Typography'

import s from './style.module.scss'

export default function RoomsTableTitle() {
  return <>
    <HStack className={s.title} align='center' justify='between'>
      <Typo size={18}>Num.</Typo>
      <Typo size={18}>Topics</Typo>
      <Typo size={18}>State</Typo>
      <Typo size={18}>Members</Typo>
      <Typo size={18}>Settings</Typo>
      <Spacer width='20px' />
    </HStack>
  </>
}
