import Typo from '@/components/ui/Typography'
import { HStack, VStack } from '@cottons-kr/react-foundation'
import HomeNameInput from '@/components/page/home/NameInput'
import Checkbox from '@/components/ui/Checkbox'

import s from './page.module.scss'

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
          <Typo size={30}>📝 게임 방법</Typo>
          <VStack tag='ul' className={s.list} gap={10}>
            <li>
              <Typo size={18}>라이어 게임을 플레이 할 주제를 선택합니다.</Typo>
            </li>
            <li>
              <Typo size={18}>방에 들어가거나 새로운 방을 만듭니다.</Typo>
            </li>
            <li>
              <Typo size={18}>당신이 시민이라면 15초 안에 키워드를 설명하세요. 라이어인 Helpy Pro의 키워드 추측을 막는 것이 여러분의 임무입니다.</Typo>
            </li>
            <li>
              <Typo size={18}>만약 당신이 스파이라면 라이어를 몰래 도와주세요.</Typo>
            </li>
            <li>
              <Typo size={18}>당신의 설명은 사실, 거짓, 또는 알수 없음으로 판명됩니다. 거짓 설명을 하는 것에 유의하세요.</Typo>
            </li>
            <li>
              <Typo size={18}>당신의 얼굴 표정도 진실 또는 거짓으로 판명됩니다.</Typo>
            </li>
          </VStack>
        </VStack>
        <VStack gap={30}>
          <Typo size={30}>👤 사용자 이름</Typo>
          <HomeNameInput />
        </VStack>
      </VStack>

      <VStack className={s.container} gap={80}>
        <Typo size={50} weight={500}>About this game</Typo>
        <VStack gap={60}>
          <VStack gap={30}>
            <Typo size={18}>이 게임은 EliceLXP의 생성 AI인 HelpyPro를 상대로 플레이하는 '라이어 게임'의 변형 버전입니다.</Typo>
            <Typo size={18}>이 게임을 통해 공부와 놀이를 동시에 할 수 있습니다.</Typo>
          </VStack>
          <VStack
            className={s.section} gap={30}
            style={{ width: 'fit-content' }}
          >
            <Typo size={24}>👥 인원 : 1-8</Typo>
            <Typo size={24}>⏱️ 소요시간 : 5-10분</Typo>
            <Typo size={24}>📷 카메라 액세스 필수 허용</Typo>
          </VStack>
          <Checkbox>
            <Typo size={18}>카메라 액세스 및 데이터 수집에 동의합니다.</Typo>
          </Checkbox>
        </VStack>
      </VStack>
    </HStack>
  </>
}
