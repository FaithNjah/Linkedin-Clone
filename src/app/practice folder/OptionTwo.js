import { Icon } from '@material-ui/core'
import React from 'react'

const OptionTwo = (props) => {
    const isLoggedin = false;
  return (
    <div>
        {/* {Icon && <Icon/> } */}
        {isLoggedin && <h1>hello</h1>}
        
    </div>
  )
}

export default OptionTwo