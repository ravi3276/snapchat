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

import './Preview.css'
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
        </div>
    )
}

export default Preview
