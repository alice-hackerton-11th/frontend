import { ILayoutProps } from '@cottons-kr/react-foundation'
import Navbar from '@/components/ui/Navbar'

import '@/styles/app.scss'
import '@cottons-kr/react-foundation/dist/styles.css'
import s from './layout.module.scss'

export default function RootLayout(props: ILayoutProps) {
  return <>
    <html lang='ko'>
      <body>
        <Navbar />
        <main className={s.main}>{props.children}</main>
      </body>
    </html>
  </>
}
