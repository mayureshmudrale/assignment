import React from 'react'
import Dashboard from './Dashboard'
import  './Home.css'
import Sidebar from './Sidebar'
function Home() {
    return (
        <div className="home">
            <Sidebar/>
            <Dashboard/>
        </div>
    )
}

export default Home
