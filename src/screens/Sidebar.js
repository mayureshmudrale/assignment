import React from 'react';
import { menu } from '@heroicons/react/solid'
import './Sidebar.css'
import Home from '../Assets/IMG/menu/Home - Iconly---Bold.png'
import apps from '../Assets/IMG/menu/apps.png'
import chat from '../Assets/IMG/menu/chat.png'
import file from '../Assets/IMG/menu/file.png'
import stats from '../Assets/IMG/menu/.png'
function Sidebar() {
    return (
        
        <div className='Sidebar'>
            <div className="Menu_icon">
                
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            </div>
            <div className='menu_home'>
                    <div>
                        <img  src={Home} alt="Home" /> 
                    </div>
            </div>
            <div className='menu_home'>
               
                    <div>
                        <img  src={apps} alt="apps" /> 
                    </div>
                
            </div>
            <div className='menu_home'>
                    <div>
                        <img  src={file} alt="file" /> 
                    </div>
            </div>
            <div className='menu_home'>
                    <div>
                        <img  src={chat} alt="chat" /> 
                    </div>
            </div>
        </div>
    )
}

export default Sidebar
