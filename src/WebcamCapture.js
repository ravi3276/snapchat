import React, { useCallback, useRef,useState } from 'react'
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {useDispatch} from 'react-redux';
import './WebcamCapture.css'
import {SetCameraImage,resetCameraImage} from './features/cameraSlice'
import { useHistory } from 'react-router-dom';
const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
  };
  
function WebcamCapture() {
    const dispatch = useDispatch();
    const history = useHistory();
    const webcamRef=useRef(null)
    const capture=useCallback(()=>{
            const imgRef=webcamRef.current.getScreenshot();
            dispatch(SetCameraImage(imgRef));
            history.push('/preview');
    },[webcamRef])

    return (
        <div className="webcamcapture">
        <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
        />
        <RadioButtonUncheckedIcon 
        className="webcamcapture__icon"
        onClick={capture}
        fontSize="large"
        />

        </div>
    )
}

export default WebcamCapture
