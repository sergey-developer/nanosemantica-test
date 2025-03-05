import {ChangeEvent, FC, FormEvent, memo, useState} from "react";

import {Button} from "../Button";
import {SendMessageFormProps} from "./types";
import './style.css'

const ChatSendMessageForm: FC<SendMessageFormProps> = ({onSubmit, onRestart, isLoading}) => {
  const [message, setMessage] = useState<string>('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('')
    await onSubmit(message)
  }

  const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  return (
    <form className="chat__send-message-form" onSubmit={handleSubmit}>
      <textarea
        className="chat__input-message"
        placeholder="Введите сообщение..."
        value={message}
        onChange={onChangeMessage}
        disabled={isLoading}
      />

      <div className="chat__buttons">
        <Button type='submit' loading={isLoading} disabled={isLoading || !message}>Отправить</Button>

        <Button variant='secondary' disabled={isLoading} onClick={onRestart}>Перезапустить</Button>
      </div>
    </form>
  )
}

export default memo(ChatSendMessageForm)