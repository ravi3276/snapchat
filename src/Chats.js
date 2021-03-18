import { Avatar } from '@material-ui/core';
import React,{ useState,useEffect} from 'react'
import './Chats.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Chat from './Chat';
import {db,auth} from './firebase';
import {selectUser,login,logout} from './features/appSlice'
import { useSelector } from 'react-redux';

function Chats() {
    const user=useSelector(selectUser)

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot =>setPosts(snapshot.docs.map(doc=>(
            {
                id:doc.id,
                data:doc.data()
            }
        ))))
    },[])
      
    return (
        <div className="chats">
           <div className="chats__header">
           <Avatar 
           onClick={()=>auth.signOut()}
           className="chats__avatar"
           src={user.profilepic}
           />
           <div className="chats__search">
           <SearchIcon />
           <input type="text" placeholder="Friends"/>
           </div>
           <ChatBubbleIcon />
           </div>

           <div className="chats__posts">
            {

                posts.map(({id,data:{imageurl,read,timestamp,username,profilepic}}) => (
                    <Chat key={id} id={id}
                    imageurl={imageurl} 
                    read={read}
                     timestamp={timestamp}
                     username={username}
                     profilepic={profilepic}
                    />

                
                ))
            }
           </div>
        </div>
    )
}

export default Chats
