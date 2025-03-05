import {ReadyEventContextRequest} from "../types/api/chat";

export const UUID = '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4'

export const READY_EVENT_EUID = '00b2fcbe-f27f-437b-a0d5-91072d840ed3'

export const READY_EVENT_CONTEXT: ReadyEventContextRequest = {
  vars: {
    user_name: 'Ivan',
    user_age: 20,
    inf_age: 20
  }
}