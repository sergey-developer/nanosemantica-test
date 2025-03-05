import {FC, memo} from "react";

import {getUniqId} from "../../utils/uniqId";
import {MessagesProps} from "./types";
import './style.css'

const ChatMessages: FC<MessagesProps> = ({data}) => {
  return (
    <div className="chat__messages">
      {data.map(({type, text}) => (
        <div key={getUniqId()} className={`chat__message chat__message--${type}`} dangerouslySetInnerHTML={{__html: text}}/>
      ))}
    </div>
  )
}

export default memo(ChatMessages)