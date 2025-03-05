import {useCallback, useMemo} from "react";

import useMutation from "../api/useMutation";
import {getChatURL} from "../../utils/api/getChatURL";
import {ChatMethodsEnum} from "../../constants/api/chat";
import {ChatRequestRequest, ChatRequestResponse} from "../../types/api/chat";
import chatLocalStorageService from "../../services/chatLocalStorageService/chatLocalStorage.service";

const useSendMessage = () => {
  const {
    mutation,
    data,
    loading,
    error
  } = useMutation<ChatRequestResponse, ChatRequestRequest>(getChatURL(ChatMethodsEnum.REQUEST))

  const sendMessage = useCallback(async (message: string) => {
    const cuid = chatLocalStorageService.getCUID()

    if (cuid) {
      const response = await mutation({cuid, text: message})

      if (response?.result?.cuid) {
        chatLocalStorageService.setCUID(response.result.cuid)
      }

      return response
    }

    console.error('Send message error: cuid was not provided', {cuid})
  }, [mutation])

  return useMemo(() => ({
    mutation: sendMessage,
    data,
    loading,
    error
  }), [sendMessage, data, loading, error])
}

export default useSendMessage