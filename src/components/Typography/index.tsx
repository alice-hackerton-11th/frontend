import { Color } from '@/constants/color'
import { ReactNode } from 'react'

interface TypographyProps {
  size?: number
  weight?: number
  color?: Color
  children?: ReactNode
}

export default function Typography(props: TypographyProps) {
  return <>
    <p
      style={{
        fontSize: props.size,
        fontWeight: props.weight,
        color: props.color,
      }}
    >{props.children}</p>
  </>
}
