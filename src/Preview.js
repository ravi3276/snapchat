import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {selectCameraImage,resetCameraImage} from './features/cameraSlice'
import CloseIcon from '@material-ui/icons/Close';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CreateIcon from '@material-ui/icons/Create';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import TimerIcon from '@material-ui/icons/Timer';
import SendIcon from '@material-ui/icons/Send';
import './Preview.css';
import { v4 as uuid } from 'uuid';
import {db,storage} from './firebase';
import firebase from 'firebase';
function Preview() {
    const dispatch = useDispatch();
    const image=useSelector(selectCameraImage)
     const history = useHistory();
    useEffect(() => {
      if(!image) {
          history.replace('/')
      }
    },[image,history]);

    const close=()=>{
         dispatch(resetCameraImage())
         history.replace('/')
    }

    const sendpost=()=>{
        const id=uuid();
        const uploadTask=storage.ref(`posts/${id}`).putString(image,'data_url')
        uploadTask.on('state_changed',null,(error)=>{
            console.log(error)
        },()=>{
            //complete function
            storage.ref('posts').child(id).getDownloadURL()
            .then((url)=>{
                db.collection('posts').add({
                    imageurl: url,
                    username:'ravi',
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    read:false,
                    // profilepic
                });
                history.replace('/chats')
            })
        })
        

    }

    return (
        <div className="preview">
            <CloseIcon 
            className="preview__close"
            onClick={close}
            />

            <div className="preview__right">
            <TextFieldsIcon />
            <CreateIcon />
            <AudiotrackIcon />
            <AttachFileIcon />
            <TimerIcon />
            </div>

            <img src={image} alt='' />

            <div className="preview__footer"
            onClick={sendpost}
            >
                <h2>send</h2>
                <SendIcon className="preview__send"/>
            </div>
        </div>
    )
}

export default Preview
