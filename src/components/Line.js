import React, { useEffect, useState } from 'react'
import SignOut from './SignOut.js'
import {db} from "../firebase.js"

function Line() {
  const [messages, setMessages] = useState();
  useEffect(() => {
    db.collection("messages")
    .orderBy("createdAt")
    .limit(50)
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  },[]);

  return (
    <div>
      <SignOut />
    </div>
  )
}

export default Line