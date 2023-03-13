import React from 'react'
import "./HeaderOption.css";


const HeaderOptions = ({Avatar,Icon,title}) => {
  return (
    <div className='headerOption'>
        {Icon && <Icon className = "headerOption_icon"/>}
        {Avatar && <img className="headerOption_icon" src={Avatar} />}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions