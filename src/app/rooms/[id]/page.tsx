'use client'

import { IParams, VStack } from '@cottons-kr/react-foundation'
import { getApiUrl } from '@/utils/api'
import { use, useEffect, useState } from 'react'
import { getAccessToken } from '@/utils/auth'
import { RoomDetailContext } from './context'
import RoomDetailPrepare from '@/components/page/room-detail/page/Prepare'

export default function RoomDetailPage(props: IParams<'id'>) {
  const param = use(props.params)
  const [currentPage, setCurrentPage] = useState('prepare')
  const [members, setMembers] = useState<Array<Member>>([])

  const roomId = param.id

  useEffect(() => {
    fetch(getApiUrl(`/room/${roomId}/member`), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
      .then(res => res.json())
      .then(({ data }) => setMembers(data))
  }, [])

  return <>
    <RoomDetailContext.Provider value={{
      currentPage, setCurrentPage,
      members, setMembers,
      ROOM_ID: roomId,
    }}>
      <VStack align='center' justify='center' fullHeight>{
        currentPage === 'prepare' ? <RoomDetailPrepare /> :
        null
      }</VStack>
    </RoomDetailContext.Provider>
  </>
}
