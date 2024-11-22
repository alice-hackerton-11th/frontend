'use client'

import { useCallback, useState } from 'react'
import { Flex, HStack } from '@cottons-kr/react-foundation'
import Typo from '../Typography'

import s from './style.module.scss'

interface RangeInputProps {
  defaultValue?: number
  min?: number
  max?: number
  onValueChange?: (value: number) => unknown
}

export default function RangeInput(props: RangeInputProps) {
  const [value, setValue] = useState(props.defaultValue || props.min || 0)

  const onClickIncrease = useCallback(() => {
    setValue(value + 1)
    props.onValueChange?.(value + 1)
  }, [value, props.onValueChange])

  const onClickDecrease = useCallback(() => {
    setValue(value - 1)
    props.onValueChange?.(value - 1)
  }, [value, props.onValueChange])

  return <>
    <HStack
      className={s.range}
      align='center' gap={20}
      style={{ width: 'fit-content' }}
    >
      <button
        disabled={props.min ? value <= props.min : false}
        onClick={onClickDecrease}
      />
      <Flex
        className={s.value}
        align='center' justify='center'
        style={{ width: 157, height: 57 }}
      >
        <Typo size={18}>{value}</Typo>
      </Flex>
      <button
        disabled={props.max ? value >= props.max : false}
        onClick={onClickIncrease}
      />
    </HStack>
  </>
}
