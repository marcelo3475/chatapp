import React, { useState  } from "react";
import {auth, db} from "../firebase"
import {addDoc, collection, serverTimestamp} from "firebase/firestore"


const SendMessage = async(event) => {
  const [message, setMessage] = useState("")
  event.preventDefault()
  if (message.trim() === ""){
    alert("You must write a message")  
  }
  const {uid, displayName, photoUrl} = auth.currentUser
  await addDoc(collection(db, "messages"), {
    text: message,
    name: displayName,
    avatar: photoUrl,
    createdAt: serverTimestamp,
    uid,
  })
  setMessage("")
  
    return (
        <form className="Send-Message">
            <label htmlFor="messageInput" hidden>
            Enter Message
            </label>
            <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="messageInput"
            name="messageInput"
            type="text"
            className="form-input__input"
            placeholder="type a message..."
            />
            <button type="submit">Send</button>
        </form>
    )
}

export default SendMessage