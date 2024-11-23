'use client'

import { HStack, Spacer, VStack } from '@cottons-kr/react-foundation'
import TableTitle from '@/components/page/rooms/Title'
import TableItem from '@/components/page/rooms/Item'
import Typo from '@/components/ui/Typography'
import { Color } from '@/constants/color'
import Button from '@/components/ui/Button'
import { getApiUrl } from '@/utils/api'
import { useEffect, useState } from 'react'
import { useSession } from '@/hooks/useSession'
import RoomsTableItemSkeleton from '@/components/page/rooms/Item/Skeleton'
import Link from 'next/link'

import s from './page.module.scss'
import classNames from 'classnames'

export default function RoomsPage() {
  const [rooms, setRooms] = useState<Array<Room>>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const { accessToken } = useSession()

  const fetchRooms = async () => {
    if (!accessToken) return

    setLoading(true)
    const res = await fetch(getApiUrl('/room', { page: currentPage.toString(), size: '5' }), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    })
    const { data } = await res.json()
    const { content, totalElements, totalPages } = data
    console.log(data)

    setRooms(content)
    setTotalPages(totalPages)
    setLoading(false)
  }

  const onClickPrev = () => {
    if (currentPage === 0) return
    setCurrentPage(prev => prev - 1)
  }

  const onClickNext = () => {
    if (currentPage === totalPages) return
    setCurrentPage(prev => prev + 1)
  }

  useEffect(() => {
    fetchRooms()
  }, [currentPage, accessToken])

  return <>
    <VStack className={s.page} gap={58}>
      <Typo size={50} weight={500}>🚪 Room List</Typo>
      <VStack gap={15}>
        <TableTitle />
        {
          loading ?
            <>
              <RoomsTableItemSkeleton />
              <RoomsTableItemSkeleton />
              <RoomsTableItemSkeleton />
              <RoomsTableItemSkeleton />
              <RoomsTableItemSkeleton />
            </> :
            rooms.map(room => <TableItem key={room.roomId} data={room} />)
        }
      </VStack>
      <HStack align='end' justify='between'>
        <Spacer width='189px' />

        <HStack align='center' justify='center' gap={30}>
          <img
            className={classNames(
              s.button,
              currentPage === 0 && s.disabled
            )}
            src='/assets/angle-left.svg'
            onClick={onClickPrev}
          />
          <Typo size={18} color={Color.Gray1}>{currentPage + 1} / {totalPages + 1}</Typo>
          <img
            className={classNames(
              s.button,
              currentPage === totalPages && s.disabled
            )}
            src='/assets/angle-right.svg'
            onClick={onClickNext}
          />
        </HStack>
        
        <Link href='/rooms/new'>
          <Button style={{ width: 189 }}>
            <Typo size={18} weight={600}>+ 새로 만들기</Typo>
          </Button>
        </Link>
      </HStack>
    </VStack>
  </>
}
