import React,{useState, useEffect} from 'react';
import {Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import './Sidebar.css';
import SidebarChat from "./SidebarChat";
import db from "./firebase";//local firebase

function Sidebar(){
  const [rooms, setRooms ] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot=>( //snapshot gives us the picture //Snapshot is based on realtime changes as soon as you change the picture snapshot is updated and new picture is returned...
      setRooms(snapshot.docs.map(doc =>
        ({
          id: doc.id, //these are the unique ids of the database
          data: doc.data(), //refers to the data
      }) //docs refers to the list of elements we have in database
    ))
    ));
    return () => {
      unsubscribe();
    }
  }, [])

  return(
        <div className="sidebar">
          <div className="sidebar_header">
          <Avatar/>
            
          <div className="sidebar_headerRight">
           <IconButton>
            <DonutLargeIcon />
           </IconButton>
          
           <IconButton>
            <ChatIcon/>
           </IconButton>

           <IconButton>
            <MoreVertIcon />
           </IconButton>
          </div> 
        
        </div>

        <div className="sidebar_search">
         <div className="sidebar_searchContainer">
            <SearchOutlined />
            <input placeholder="Search or start new chat" type="text" />
          </div>
        </div>
          
        <div className="sidebar_chats">
          <SidebarChat addNewChat/>
           {rooms.map(room =>( // In react, key is used for performance and we have assigned key to room id
             <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
           ))} 
          </div>
        </div>
    )
}

export default Sidebar;