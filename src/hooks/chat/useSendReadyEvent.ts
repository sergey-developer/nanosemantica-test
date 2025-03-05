import {useCallback, useMemo} from "react";

import useMutation from "../api/useMutation";
import {getChatURL} from "../../utils/api/getChatURL";
import {ChatMethodsEnum} from "../../constants/api/chat";
import {ChatReadyEventRequest, ChatReadyEventResponse} from "../../types/api/chat";
import {READY_EVENT_CONTEXT, READY_EVENT_EUID} from "../../fixtures/chat";
import chatLocalStorageService from "../../services/chatLocalStorageService/chatLocalStorage.service";

const useSendReadyEvent = () => {
  const {mutation, data, loading, error} = useMutation<ChatReadyEventResponse, ChatReadyEventRequest>(getChatURL(ChatMethodsEnum.EVENT))

  const send = useCallback(async (cuid: string) => {
    const response = await mutation({
      cuid,
      euid: READY_EVENT_EUID,
      context: READY_EVENT_CONTEXT
    })

    if (response?.result?.cuid) {
      chatLocalStorageService.setCUID(response.result.cuid)
    }

    return response
  }, [mutation])

  return useMemo(() => ({
    mutation: send,
    data,
    loading,
    error
  }), [send, data, loading, error])
}

export default useSendReadyEvent