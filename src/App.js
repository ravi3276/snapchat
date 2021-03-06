import React,{ useEffect} from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import Chatview from './Chatview';
import { useSelector, useDispatch} from 'react-redux';
import {selectUser,login,logout} from './features/appSlice'
import Login from './Login';
import { auth } from './firebase';
function App() {
  const user=useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch(login({
            username: authUser.username,
            profilepic:authUser.photoURL,
            id: authUser.uid,
          }));
        }
        else{
          dispatch(logout())
        }
      })
  },[])

  return (
    <div className="app">

    <Router>
    {!user ?(
      <Login />
    ):(
      
      <div className="app__body">
        <div className="app__background">
        <Switch>
        
        <Route  path="/chats/view">
        <Chatview />
        </Route>

        <Route  path="/chats">
        <Chats />
        </Route>

        <Route  path="/preview">
        <Preview />
        </Route>

        <Route exact path="/">
        <WebcamCapture />
        </Route>
          
        </Switch>
        </div>
      </div>
    )}
    </Router>


    </div>
  );
}

export default App;
