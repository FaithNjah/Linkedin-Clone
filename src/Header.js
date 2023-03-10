import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LinkedinIcon from "./Images/LinkedinIcon.png"
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';



const Header = () => {
  return (
    <div className='header'>
        
        <div className='header_left'>
            <img src={LinkedinIcon}/>

            <div className='header_search'>
                < SearchIcon/>
                <input type = 'text'/>
            </div>
        </div>


        <div className='header_right'>
            <HeaderOptions Icon ={HomeIcon} title = "Home"/>
            <HeaderOptions Icon ={SupervisorAccountIcon} title = "My Network"/>
            <HeaderOptions Icon ={BusinessCenterIcon} title = "Jobs"/>
            <HeaderOptions Icon ={ChatIcon} title = "Messaging"/>
            <HeaderOptions Icon ={NotificationsIcon} title = "Notifications"/>
            <HeaderOptions Avatar={LinkedinIcon} title="Me" />
        </div>




    </div>
  )
}

export default Header