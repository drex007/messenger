import React ,{forwardRef} from 'react'
import {Card,CardContent,Typography } from '@material-ui/core';
import './Messages.css';


const Messages = forwardRef(({message, username}, ref) => {
    const isUser =username ===message.username;
    return (
        
           <div ref ={ref} className={`message ${isUser && 'message_user'}`}>
               <Card className={isUser? "message_usercard":"message_guestcard"}>
               <CardContent>
                   <Typography 
                   variant='h5'
                   color='white'
                   component="h2">
                    {!isUser && `${message.username || 'Anonymous'}:`} {message.message}
                   </Typography>
               </CardContent>
           </Card>
           </div>

        
    ) 
}
)

export default Messages
