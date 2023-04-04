import React from 'react'
import loading from './loading.gif'

const Spinner =()=> {
  
    return (
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <img src={loading} alt="loading"></img>
      </div>
    )
  
}
export default Spinner
