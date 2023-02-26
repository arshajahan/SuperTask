import React from 'react'
import { Link } from 'react-router-dom'
import './title.css'

function Title() {
  return (
    <div className='title'>
        <Link to='/' style={{ textDecoration: 'none' }}>
        <h2>Super Future Task</h2>
        </Link>
    </div>
  
  )
}

export default Title