import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='cards'>
          <Link to='/allposts' className='card'>
              <span>View All Posts</span>
          </Link>
          <Link to='/add' className='card'>
              <span>Add New Post</span>
          </Link>
      </div>
    </div>
  )
}

export default Dashboard