import {MessageTypeEnum} from "./constants";

export interface MessageType {
  text: string
  type: MessageTypeEnum
}

export interface MessagesProps {
  data: MessageType[]
  isLoading?: boolean
}