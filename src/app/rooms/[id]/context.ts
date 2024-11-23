import { CompatClient } from '@stomp/stompjs'
import { createContext, Dispatch, SetStateAction } from 'react'

export type RoomDetailContextValue = {
  currentPage: string
  members: Array<Member>
  stompClient: CompatClient | null
  setCurrentPage: Dispatch<SetStateAction<string>>
  setMembers: Dispatch<SetStateAction<Array<Member>>>
  setStompClient: Dispatch<SetStateAction<CompatClient | null>>

  ROOM_ID: string
}

export const RoomDetailContext = createContext<RoomDetailContextValue>({} as RoomDetailContextValue)
