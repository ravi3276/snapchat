import { Avatar } from '@material-ui/core'
import StopIcon from '@material-ui/icons/Stop';import React from 'react'
import './Chat.css'
import ReactTimeago from 'react-timeago';
import {useDispatch,useSelector} from 'react-redux';
import {selectedImage} from './features/appSlice'
import {db} from './firebase'
import { useHistory } from 'react-router';
function Chat({id,imageurl,read,timestamp,username,profilepic}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const open=()=>{
            if(!read){
                dispatch(selectedImage(imageurl));
                db.collection('posts').doc(id).set({
                    read: true
                },{
                    merge:true
                });
                history.push('/chats/view')
            }

    }
    return (
        <div className="chat">
            <Avatar className="chat__avatar" src={profilepic}/>

            <div className="chat__info"
            onClick={open}
            >
                <h4>
                {username}
                <p className="chat__timestamp">
                {!read &&'tap to view ~ '}{
                    <ReactTimeago date={

                        new Date(timestamp?.toDate()).toUTCString()
                    }/>
                }
                </p>
                </h4>

                {!read && <StopIcon className="chat__redicon"/>}
                </div>
        </div>
    )
}

export default Chat
