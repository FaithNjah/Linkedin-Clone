import React from 'react'
import './post.css'
import {Avatar} from "@material-ui/core"
import InputOption from './InputOption';
import EventNoteIcon from '@material-ui/icons/EventNote';

const Posts = ({name, description, message, photourl}) => {
  return (
    <div className='post'>
        <div className='post_header'>
            <Avatar />
            <div className='post_info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post_body'>
            <p>{message}</p>
        </div>
        <div className='post_buttons'>
            <InputOption Icon={EventNoteIcon} title = 'like' color = 'gray'/>
            <InputOption Icon={EventNoteIcon} title = 'like' color = 'gray'/>
            <InputOption Icon={EventNoteIcon} title = 'like' color = 'gray'/>
            <InputOption Icon={EventNoteIcon} title = 'like' color = 'gray'/>
        </div>

    </div>
  )
}

export default Posts