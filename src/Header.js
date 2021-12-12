import React, { useEffect, useRef, useState } from 'react'

import './Header.css'
import headerlogo from './Assets/IMG/Group@3x.png';
import notfication from './Assets/IMG/Notification - Iconly---Bold@2x.png';
import chat from './Assets/IMG/Chat - Iconly---Bold@2x.png';
import useravatar from './Assets/IMG/Placeholders/Profile/Picture@2x.png'
import dropdown from './Assets/IMG/Arrow---Down-2 - Iconly---Bold.png'
import { CSSTransition } from 'react-transition-group';

function Header() {
    const [state,setState]=useState();
      
    const toggle=()=>{
       if(state===1){
            setState(0);
       }
       else{
           setState(1);
       } 
    }
    console.log(state);

 
    
    return (
        <div className="header">
            <div className="logo">
                <img  src={headerlogo} alt="logo"/> 
            </div>

            
            <div className="header__search" >
                <div className="header__searchInput">
                    <input className="header__searchInput2" placeholder="Search and find" type="text"  ></input>
                    <div className="header_search_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    </div>
                </div>
                
            </div>
            
                <div className="header__add">
                    +ADD 
                </div>
           
            
            <div className="header__user_row">
                    
                    <img  src={notfication} alt="notification" onClick={toggle} className="bell"/>
                    {/* {dropdown()} */}
                   

                
                <img src={chat} className="chat_option" alt="chat" />
                <div className="username_avatar">
                    <div className="username">
                        <text>
                        Clarence Russel
                        </text>

                    </div>
                    
                    <img  src={useravatar} alt="avatar"  />
                    <div className="userdropdown">
                        <img  src={dropdown} alt="dropdown" className="dropdown"  />
                    </div>
                    
                </div>

            </div>

            
            
        </div>
    )
}


export default Header
