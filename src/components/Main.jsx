import React, {useEffect, useState} from 'react'

import {clear, search} from '../assets'
import WeatherApp from '../utils/WeatherApp'

function Main() {

    const api_key = '09ba38ec514648227327c104a399bb60'
    const [city, setCity] = useState('London')

    useEffect(() => {
      WeatherApp(city, api_key).then((data) => console.log(data))
    }, [])


    
    const handleSearch = () => {
        
    }

  return (
    <div className='flex items-center justify-center py-12 '>
        <div className='border-2 rounded-3xl p-6 flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center gap-2'>
             <input className='p-1 outline-none' type="text" name="" id="" />
             <img onClick={() => handleSearch} src={search} className='w-5 h-5 object-contain' alt="search" />
            </div>

            <img className='w-24 h-24 object-contain' src={clear} alt="" />
            <p>Clear</p>
            <p className='text-[18px]'>25°C</p>
            <p className='text-[14px]'>Clear sky</p>
            <div className='flex gap-4'>
                <p>Min. Temp: 20</p>
                <p>Max. Temp: 28</p>
            </div>
        </div>
    </div>
  )
}

export default Main