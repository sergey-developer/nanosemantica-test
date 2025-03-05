import {useEffect} from "react";

import {DialogHistoryItem} from "../../components/Chat";
import chatLocalStorageService from "../../services/chatLocalStorageService/chatLocalStorage.service";

const useSaveDialogHistoryBeforeUnload = (dialog: DialogHistoryItem[]) => {
  useEffect(() => {
    const beforeUnload = () => {
      chatLocalStorageService.setDialogHistory(dialog)
    }

    window.addEventListener("beforeunload", beforeUnload);

    return () => {
      window.removeEventListener('beforeunload', beforeUnload)
    }
  }, [dialog])
}

export default useSaveDialogHistoryBeforeUnload