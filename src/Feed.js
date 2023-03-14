import React from 'react'
import './Feed.css'
import InputOption from './InputOption';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Posts from './Posts';


const Feed = () => {
  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed_input'>
                <CreateIcon />
                <form>
                    <input type= 'text'/>
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className='feed_inputOptions'>
              <InputOption Icon = {ImageIcon} title = 'photo' color = "#7085F9"/>
              <InputOption Icon = {SubscriptionsIcon} title = 'video' color = "#E7A33E"/>
              <InputOption Icon = {EventNoteIcon} title = 'Event' color = "#C8C8CD"/>
              <InputOption Icon = {CalendarViewDayIcon} title = 'Write article' color = "#7FC15E"/>
            </div>
        </div>
        {/* posts */}
        <Posts
        name = 'Faith Njah'
        description = 'This is a test'
        message = 'Wow it worked!'
        />
    </div>
  )
}

export default Feed