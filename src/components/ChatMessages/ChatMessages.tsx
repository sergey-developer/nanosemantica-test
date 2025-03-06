import {FC, memo} from "react";

import {MessagesProps} from "./types";
import './style.css'

const ChatMessages: FC<MessagesProps> = ({data}) => {
  return (
    <div className="chat__messages">
      {data.map(({id, type, text}) => (
        <div key={id} className={`chat__message chat__message--${type}`} dangerouslySetInnerHTML={{__html: text}}/>
      ))}
    </div>
  )
}

export default memo(ChatMessages)