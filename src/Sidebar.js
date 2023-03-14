import React from 'react'
import './sidebar.css'
import {Avatar} from "@material-ui/core"
import LinkedinIcon from "./Images/LinkedinIcon.png"


const Sidebar = () => {

    const recentItem = (topic)=>{
        return (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
        );
    }
  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src={LinkedinIcon}/>
            <Avatar className='sidebar_avatar'/>
            <h2>Faith Njah</h2>
            <h4>faithnjah5@gmail.com</h4>
        </div>

        <div className='sidebar_stats'>
            <div className='sidebar_stat'>

            </div>
            <div className='sidebar_stat'>
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>7,563</p>
            </div>
            <div className='sidebar_stat'>
                <p>Views on post</p>
                <p className='sidebar_statNumber'>8,971</p>
            </div>
        </div>

        <div className='sidebar_botton'>
            <p>Recent</p>
            {recentItem("React JS")}
            {recentItem("programming")}
            {recentItem("Technical writing")}
            {recentItem("Software developer")}
            {recentItem("CSS")}
        </div>
    </div>
  )
}

export default Sidebar