import {ChatMethodsEnum} from "../../constants/api/chat";

export const getChatURL = (method: ChatMethodsEnum): string =>
  `https://biz.nanosemantics.ru/api/bat/nkd/json/Chat.${method}`
