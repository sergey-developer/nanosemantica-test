import {MaybeNull} from "../utils";

export interface BaseChatResponse {
  cuid: MaybeNull<string>
}

// chat init
export interface ChatInitRequest {
  uuid: string
  cuid?: string
}

export interface ChatInitResponse extends BaseChatResponse {}

// chat request
export interface ChatRequestRequest {
  cuid: string
  text: string
}

export interface ChatRequestResponse extends BaseChatResponse {
  text: {
    value: string
  }
}

// chat event
export interface ReadyEventContextRequest {
  vars: {
    user_name: string,
    user_age: number,
    inf_age: number
  }
}

export interface ChatReadyEventRequest {
  cuid: string
  euid: string
  context?: ReadyEventContextRequest
}

export interface ChatReadyEventResponse extends ChatRequestResponse {}