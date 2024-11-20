import { ILayoutProps } from '@cottons-kr/react-foundation'
import Navbar from '@/components/Navbar'

import '@/styles/app.scss'

export default function RootLayout(props: ILayoutProps) {
  return <>
    <html lang='ko'>
      <body>
        <Navbar />
        <main>{props.children}</main>
      </body>
    </html>
  </>
}
