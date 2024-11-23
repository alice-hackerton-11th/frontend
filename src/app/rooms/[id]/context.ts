import { createContext, Dispatch, SetStateAction } from 'react'

export type RoomDetailContextValue = {
  members: Array<Member>
  setMembers: Dispatch<SetStateAction<Array<Member>>>

  ROOM_ID: string
  CURRENT_PAGE: string
}

export const RoomDetailContext = createContext<RoomDetailContextValue>({} as RoomDetailContextValue)
