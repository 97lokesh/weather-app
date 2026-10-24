import React from 'react'
import search_icon from './assets/search.png'

function Weather() {
  return (
     <>
      <div className='bg-blue-500'>
        <div className='flex items-center'>
            <input type="text" placeholder='Enter Your City'  className='text-white pl-[18px]'/>
            <img src={search_icon} alt="" />
        </div>
      </div>
     </>
  )
}

export default Weather