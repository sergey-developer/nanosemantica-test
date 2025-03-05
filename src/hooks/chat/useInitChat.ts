import {useCallback, useMemo} from "react";

import useMutation from "../api/useMutation";
import {ChatMethodsEnum} from "../../constants/api/chat";
import {getChatURL} from "../../utils/api/getChatURL";
import {ChatInitRequest, ChatInitResponse} from "../../types/api/chat";
import {MaybeNull} from "../../types/utils";
import {UUID} from "../../fixtures/chat";
import chatLocalStorageService from "../../services/chatLocalStorageService/chatLocalStorage.service";

const useInitChat = () => {
  const {mutation, data, loading, error} = useMutation<ChatInitResponse, ChatInitRequest>(getChatURL(ChatMethodsEnum.INIT))

  const init = useCallback(async (cuid?: MaybeNull<string>) => {
    const response = await mutation({uuid: UUID, cuid: cuid ? cuid : undefined})

    if (response?.result?.cuid) {
      chatLocalStorageService.setCUID(response.result.cuid)
    }
  }, [mutation])

  return useMemo(() => ({
    mutation: init,
    data,
    loading,
    error
  }), [init, data, loading, error])
}

export default useInitChat