import {LocalStorageKeys} from "./constants";
import {MaybeNull} from "../../types/utils";
import {DialogHistoryItem} from "../../components/Chat";

const getCUID = (): MaybeNull<string> =>
  localStorage.getItem(LocalStorageKeys.CUID)

const setCUID = (cuid: string): void =>
  localStorage.setItem(LocalStorageKeys.CUID, cuid)

const getDialogHistory = (): MaybeNull<DialogHistoryItem[]> => {
  const data = localStorage.getItem(LocalStorageKeys.DIALOG_HISTORY)
  return data ? JSON.parse(data) : null
}

const setDialogHistory = (dialog: DialogHistoryItem[]): void =>
  localStorage.setItem(LocalStorageKeys.DIALOG_HISTORY, JSON.stringify(dialog))

const removeDialogHistory = (): void =>
  localStorage.removeItem(LocalStorageKeys.DIALOG_HISTORY)

const chatLocalStorageService = {
  getCUID,
  setCUID,

  getDialogHistory,
  setDialogHistory,
  removeDialogHistory,
}

export default chatLocalStorageService