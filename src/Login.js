import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css';
import { useSelector, useDispatch} from 'react-redux';
import {selectUser,login,logout} from './features/appSlice'
import {auth,provider} from './firebase'

function Login() {
    const dispatch = useDispatch();

    const signin=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch(login({
                username: result.user.username,
                profilepic:result.user.photoURL,
                id: result.user.uid,
            }));
        })
        .catch((err)=>{alert(err)});
    }
    return (
        <div className="login">
            <div className="login__container">
            <img src="https://variety.com/wp-content/uploads/2017/11/snapchat-logo.jpg?w=681&h=383&crop=1" alt="" />
            <Button 
            onClick={signin}
            variant="outlined">SignIn</Button>
            </div>
        </div>
    )
}

export default Login
