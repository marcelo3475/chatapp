import React from "react";
import {auth} from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import { useState, useRef } from "react";
import "../signin.css"



const Message = ({message}) => {
  const [messagesReceived, setMessagesReceived] = useState([])
  const messagesColumnRef = useRef(null)
  const [user] = useAuthState(auth)





  return (
    <div
      className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
    
          <img
          className="chat-bubble__left"
          src={message.avatar}
          alt="user avatar"
          />
          <div className="chat-bubble__right">
            <p className="user-name">{message.name}</p>
            <p className="user-message">{message.text}</p>
          </div>
    </div>
  )
}
export default Message