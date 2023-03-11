import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LinkedinIcon from "./Images/LinkedinIcon.png"



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
            2
        </div>




    </div>
  )
}

export default Header