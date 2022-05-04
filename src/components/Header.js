import React from 'react'
import {IconButton} from '@material-ui/core'
import { Forum, Person } from '@material-ui/icons'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <IconButton>
            <Person fontSize='large' className='header__icon' />
        </IconButton>
        <Link to='/'>
        <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2021/04/Roblox-logo-500x281.png" alt="header" />
        </Link>
        <Link to='/add'>
        <IconButton>
            <Forum fontSize='large' className='header__icon' />
        </IconButton>
        </Link>
    </div>
  )
}

export default Header