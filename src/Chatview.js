import React,{useEffect} from 'react'
import './Chatview.css';
import {useSelector} from 'react-redux'
import {selectselectedImage} from './features/appSlice'
import { useHistory } from 'react-router';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Chatview() {
    const selectedImage = useSelector(selectselectedImage);
    const history = useHistory();

    useEffect(() => {
        if(!selectedImage){
            exit();
        }
    }, [selectedImage]);

    const exit=()=>{
            history.push('/chats')
    }
    return (
        <div className="chatview">
            <img 
            onClick={exit}
            src={selectedImage} alt=""/>
            <div className="chatview__timer">
            <CountdownCircleTimer 
            isPlaying
            duration={10}
            strokeWidth={6}
            size={50}
            colors={[
                ['#004777', 0.33],
                ['#F7B801', 0.33],
                ['#A30000', 0.33],
              ]}          
            >
            {({ remainingTime }) => {
                if(remainingTime ===0){
                    exit()
                }
                return remainingTime
            }}
            </CountdownCircleTimer>
            </div>

            
        </div>
    )
}

export default Chatview
