import React from 'react'
import {NavLink} from 'react-router-dom'

const SingedInLinks =() => {
    return(
      <ul className='right'>
      <li><NavLink to='/'></NavLink></li>
      </ul>
    )
}

export default SingedInLinks;