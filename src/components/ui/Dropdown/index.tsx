import { SelectHTMLAttributes } from 'react'
import cn from 'classnames'

import s from './style.module.scss'

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{
    label: string
    value: string
  }>
  onValueChange?: (value: string) => unknown
}

export default function Dropdown(props: DropdownProps) {
  const {
    options, className, onValueChange,
    ...rest
  } = props

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onValueChange?.(e.target.value)
  }

  return <>
    <select
      {...rest}
      className={cn(s.select, className)}
      onChange={onChange}
    >{
      options.map(o=> (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))
    }</select>
  </>
}
