import { createContext, Dispatch, SetStateAction } from 'react'

export type RoomDetailContextValue = {
  currentPage: string
  members: Array<Member>
  setCurrentPage: Dispatch<SetStateAction<string>>
  setMembers: Dispatch<SetStateAction<Array<Member>>>

  ROOM_ID: string
}

export const RoomDetailContext = createContext<RoomDetailContextValue>({} as RoomDetailContextValue)
