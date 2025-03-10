import {MessageTypeEnum} from "./constants";

export interface MessageType {
  id: number
  text: string
  type: MessageTypeEnum
}

export interface MessagesProps {
  data: MessageType[]
  isLoading?: boolean
}