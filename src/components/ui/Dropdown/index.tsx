import { HTMLAttributes } from 'react'
import cn from 'classnames'

import s from './style.module.scss'

interface DropdownProps extends HTMLAttributes<HTMLSelectElement> {
  options: Array<{
    label: string
    value: string
  }>
}

export default function Dropdown(props: DropdownProps) {
  const {
    options, className,
    ...rest
  } = props

  return <>
    <select
      {...rest}
      className={cn(s.select, className)}
    >{
      options.map(o=> (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))
    }</select>
  </>
}
