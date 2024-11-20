import { Flex } from '@cottons-kr/react-foundation'
import Typo from '../Typography'

import s from './style.module.scss'

export default function Navbar() {
  return <>
    <nav className={s.nav}>
      <Flex className={s.logo}>
        <Typo size={18} weight={600}>ELICE × SPARCS</Typo>
      </Flex>
    </nav>
  </>
}
