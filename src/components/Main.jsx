import React, {useEffect, useState} from 'react'

import {clear, search} from '../assets'

function Main() {

    const api_key = '09ba38ec514648227327c104a399bb60'
    const [city, setCity] = useState('London')


    const [data, setData] = useState([])
    const [weather, setWeather] = useState([])

    const handleSearch = async () => {

     

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

        let response = await fetch(url)
        let data = await  response.json()
        console.log(data)
        setWeather(data)

    }

  return (
    <div className='flex items-center justify-center py-12 '>
        <div className='border-2 rounded-3xl p-6 flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center gap-2'>
             <input className='p-1 outline-none' onChange={(e) => setCity(e.target.value)} type="text" id="inpBox" />
             <img onClick={() => handleSearch()} src={search} className='w-5 h-5 object-contain' alt="search" />
            </div>
            <p className='mt-4'>{weather.name}</p>
            <img className='w-24 h-24 object-contain' src={clear} alt="" />
            <p>Clear</p>
            <p className='text-[18px]'>{weather.main.temp}</p>
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