import React,{ useState, useEffect} from 'react';
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import Messages from './Messages';
import db from './firebase';
import  firebase from 'firebase';
import FlipMove from 'react-flip-move';
import logo from'./assets/fbm.png';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([{}]);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessage(snapshot.docs.map(doc=> ((doc.data()) )))
    })
  }) 

  useEffect(()=>{
    setUsername(prompt('Enter Username:'))
    console.log(username)

  }, [])
  const sendMessage =(event) =>{
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    })
   //message logict
   
   setInput('');
  }
  return (
    <div className="App">
      <img   className="logo" src={logo}/>
      <h1>Messenger Project </h1>
      <h3>Welcome {username}</h3>
        
        <form className="app_form">
          <FormControl className="app_formcontrol">
            <InputLabel htmlFor="my-input">Enter your message</InputLabel>
            <Input className="app__input" value = {input}  onChange={event=> setInput(event.target.value)} />
            <IconButton className="app__iconbutton"  variant="contained" color="primary" disabled={!input} onClick={sendMessage} type="submit">
                <SendIcon />
            </IconButton>
            
          </FormControl>
           
        
        </form>

         <FlipMove>
            {
              messages.map(( message )=> ( 
                
               
                
                
                <Messages    username={username} message={message} />
                ))
            }
          </FlipMove>
    </div>
    
  );
}

export default App;
