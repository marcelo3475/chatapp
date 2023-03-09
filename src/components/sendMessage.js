import React, { useState  } from "react";
import {auth, db} from "../firebase.js"
import {addDoc, collection, serverTimestamp} from "firebase/firestore"


const SendMessage = ({scroll})=> {
  const [message, setMessage] = useState("")
  const sendMessage = async (event) =>{
    event.preventDefault()
    if (message.trim() === "" ){

      alert("enter valid message")

      return 
    }
  const {uid, displayName, photoURL} = auth.currentUser
  await addDoc(collection(db, "messages"), {
    text: message,
    name: displayName,
    avatar: photoURL,
    createdAt:  serverTimestamp(),
    uid,
  })
  setMessage('')
  scroll.current.scroll({behavior:"smooth"})
}
  return (
    

    <form onSubmit={(event) => sendMessage(event)}  class='send-message'>

        <label htmlFor="messageInput" hidden>
        Enter Message
        </label>

        <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
        style={{color:"gray", width:'85%'}}
        />
        <button href="/#" type="submit" style={{width:"14%", float:'right'}} class='outline'
        ><img src="../img/sendicoS.png" alt="sendLogo"></img></button>


    </form>
  )
}

export default SendMessage