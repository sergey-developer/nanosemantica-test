import {DialogHistoryItem} from "./types";
import chatLocalStorageService from "../../services/chatLocalStorageService/chatLocalStorage.service";

export const initDialogHistoryState = (): DialogHistoryItem[] => {
  const data = chatLocalStorageService.getDialogHistory()
  return data || []
}