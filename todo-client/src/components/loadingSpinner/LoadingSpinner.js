import React from 'react'
import { BarLoader } from 'react-spinners';
import './LoadingSpinner.css';
const LoadingSpinner = () => {
  return (
    // <BarLoader loading ></BarLoader>
    <div className='loading-screen'>

      <div className='loader'></div>
    </div>
  )
}

export default LoadingSpinner