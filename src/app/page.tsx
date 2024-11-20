import Typo from '@/components/ui/Typography'
import { HStack, VStack } from '@cottons-kr/react-foundation'
import HomeNameInput from '@/components/page/home/NameInput'

import s from './page.module.scss'
import Checkbox from '@/components/ui/Checkbox'

export default function HomePage() {
  return <>
    <HStack fullHeight>
      <VStack
        className={s.container}
        gap={80}
        style={{ backgroundColor: '#151618' }}
      >
        <Typo size={50} weight={500}>Guess What?</Typo>
        <VStack gap={30}>
          <Typo size={30}>📝 Playing Rules</Typo>
          <VStack tag='ul' className={s.list} gap={10}>
            <li>
              <Typo size={18}>Choose a Topic to play a Liar game.</Typo>
            </li>
            <li>
              <Typo size={18}>Enter a room or Make one with your own setting.</Typo>
            </li>
            <li>
              <Typo size={18}>If you are a citizen, explain the keyword in 15 seconds. Note that your job is to stop our Liar, HelpyPro, from guessing the keyword.</Typo>
            </li>
            <li>
              <Typo size={18}>If you are a spy, help our Liar secretly.</Typo>
            </li>
            <li>
              <Typo size={18}>Your explanation will be checked as Truth, False, or Unknown. Be aware of telling False explanation.</Typo>
            </li>
            <li>
              <Typo size={18}>Your face expression will also be checked as Truth or False!</Typo>
            </li>
          </VStack>
        </VStack>
        <VStack gap={30}>
          <Typo size={30}>👤 Name</Typo>
          <HomeNameInput />
        </VStack>
      </VStack>

      <VStack className={s.container} gap={80}>
        <Typo size={50} weight={500}>About this game</Typo>
        <VStack gap={60}>
          <VStack gap={30}>
            <Typo size={18}>This game is a modified version of "Liar Game" playing against EliceLXP's generative AI, Helpy Pro.</Typo>
            <Typo size={18}>Its goal is to study and play at the same time by ~~</Typo>
          </VStack>
          <VStack
            className={s.section} gap={30}
            style={{ width: 'fit-content' }}
          >
            <Typo size={24}>👥 1-8 people</Typo>
            <Typo size={24}>⏱️ 5-10 minutes</Typo>
            <Typo size={24}>📷 Camera access required</Typo>
          </VStack>
          <Checkbox>
            <Typo size={18}>I agree to camera access and data collection.</Typo>
          </Checkbox>
        </VStack>
      </VStack>
    </HStack>
  </>
}
