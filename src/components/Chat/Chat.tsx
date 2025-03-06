import {FC, useCallback, useEffect, useState} from 'react';

import {MessageTypeEnum, ChatMessages} from "../ChatMessages";
import {ChatSendMessageForm} from "../ChatSendMessageForm";
import useInitChat from "../../hooks/chat/useInitChat";
import useSendReadyEvent from "../../hooks/chat/useSendReadyEvent";
import useSendMessage from "../../hooks/chat/useSendMessage";
import useSaveDialogHistoryBeforeUnload from "../../hooks/chat/useSaveDialogHistoryBeforeUnload";
import {Spinner} from "../Spinner";
import {initDialogHistoryState} from "./utils";
import {DialogHistoryItem} from "./types";
import chatLocalStorageService from "../../services/chatLocalStorageService/chatLocalStorage.service";
import {getUniqId} from "../../utils/uniqId";
import './style.css';

const Chat: FC = () => {
  const [dialogHistory, setDialogHistory] = useState<DialogHistoryItem[]>(initDialogHistoryState)

  const {mutation: initChat, loading: initChatIsLoading, data: initChatData, error: initChatError} = useInitChat()
  const {mutation: sendReadyEvent, error: sendReadyEventError} = useSendReadyEvent()
  const {mutation: sendMessage, loading: sendMessageIsLoading, error: sendMessageError} = useSendMessage()

  const addMessageToDialogHistory = useCallback((text: string, type: MessageTypeEnum) => {
    const newDialogHistoryItem: DialogHistoryItem = {
      id: getUniqId(),
      text: text || 'Пустой ответ сервера',
      type
    }

    setDialogHistory(dialogHistory => [...dialogHistory, newDialogHistoryItem])
  }, [setDialogHistory])

  useEffect(() => {
    const errorResponse = initChatError || sendReadyEventError || sendMessageError

    if (errorResponse) {
      addMessageToDialogHistory(errorResponse.error.message, MessageTypeEnum.Received)
    }
  }, [initChatError, sendReadyEventError, sendMessageError, addMessageToDialogHistory])

  // Передача Сервису сообщения пользователя и получение ответа
  const onSendMessage = useCallback(async (message: string) => {
    addMessageToDialogHistory(message, MessageTypeEnum.Sent)
    const response = await sendMessage(message)
    if (response) {
      addMessageToDialogHistory(response.result.text.value, MessageTypeEnum.Received)
    }
  }, [sendMessage, addMessageToDialogHistory])

  // Перезапуска разговора в новой сессии с удалением истории текущего диалога
  const onRestartChat = useCallback(async () => {
    await initChat()
    chatLocalStorageService.removeDialogHistory()
    setDialogHistory([])
  }, [initChat, setDialogHistory])

  // Инициализация чата
  useEffect(() => {
    initChat(chatLocalStorageService.getCUID())
  }, [initChat])

  const onSendReadyEvent = useCallback(async (cuid: string) => {
    const response = await sendReadyEvent(cuid)
    if (response) {
      addMessageToDialogHistory(response.result.text.value, MessageTypeEnum.Received)
    }
  }, [sendReadyEvent, addMessageToDialogHistory])

  // Запрос приветственного сообщения
  useEffect(() => {
    if (initChatData?.result?.cuid) {
      onSendReadyEvent(initChatData.result.cuid)
    }
  }, [onSendReadyEvent, initChatData?.result?.cuid])

  // Сохранение истории диалога при обновлении окна браузера
  useSaveDialogHistoryBeforeUnload(dialogHistory)

  return (
    <div className="chat">
      {initChatIsLoading
        ? <Spinner centered />
        : <>
          <ChatMessages data={dialogHistory}/>

          <ChatSendMessageForm
            onSubmit={onSendMessage}
            onRestart={onRestartChat}
            isLoading={sendMessageIsLoading}
          />
        </>
      }
    </div>
  );
};

export default Chat;
