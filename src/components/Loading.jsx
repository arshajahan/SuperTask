import React from 'react'
import './loading.css'

function Loading(props) {
  return (
  
    <div className='loader-container'>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
 
  )
}

export default Loading