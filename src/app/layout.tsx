import { ILayoutProps } from '@cottons-kr/react-foundation'

import '@/styles/app.scss'

export default function RootLayout(props: ILayoutProps) {
  return <>
    <html lang='ko'>
      <body>{props.children}</body>
    </html>
  </>
}
