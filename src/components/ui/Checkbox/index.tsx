import { HStack } from '@cottons-kr/react-foundation'
import { HTMLAttributes } from 'react'
import cn from 'classnames'

import s from './style.module.scss'

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {}

export default function Checkbox(props: CheckboxProps) {
  const {
    children, className,
    ...rest
  } = props

  return <>
    <HStack tag='label' align='center' gap={10}>
      <input
        {...rest}
        type='checkbox'
        className={cn(s.checkbox, className)}
      />
      {children}
    </HStack>
  </>
}
