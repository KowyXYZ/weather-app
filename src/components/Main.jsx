import React, {useEffect, useState, Suspense} from 'react'

import {clear, cloud, drizzle, humidity, rain, snow, wind, search} from '../assets'

import searchRenderData from '../utils/searchRenderData'

import Loader from './Loader'

function Main() {

    // const api_key = '09ba38ec514648227327c104a399bb60'
    const [city, setCity] = useState('Belgrade')

    const [textBox, setTextBox] = useState('')

    const [renderedData, setRenderedData] = useState([])

    function getImageSource(renderedData){
            if(renderedData?.weather?.icon === '01d') {
                return clear
            } else if (renderedData?.weather?.icon === '02d') {
                return cloud
            } else if (renderedData?.weather?.icon === '03d') {
                return cloud
            } else if (renderedData?.weather?.icon === '04d') {
                return cloud
            } else if (renderedData?.weather?.icon === '09d') {
                return rain
            } else if (renderedData?.weather?.icon === '10d') {
                return rain
            } else if (renderedData?.weather?.icon === '11d') {
                return rain
            } else if (renderedData?.weather?.icon === '13d') {
                return snow
            } else if (renderedData?.weather?.icon === '50d') {
                return drizzle
            } else {
                return clear
            }
    }

    const handleSearch = async () => {

        searchRenderData(textBox).then((data) => setRenderedData(data))
        console.log(renderedData)
    }


    useEffect(() => {
      searchRenderData(city).then((data) => setRenderedData(data))

    }, [])

  return (
    <Suspense fallback={<Loader/>}>
    <div className='mx-16 flex items-center justify-center py-12 '>
        <div className='border-2 rounded-3xl p-6 flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center gap-2'>
             <input className='p-1 outline-none' type="text" id="inpBox" onChange={(e) => setTextBox(e.target.value)} />
             <img src={search} className='border-2 p-1 bg-[#fff] w-8 h-8 object-contain cursor-pointer' alt="search" onClick={() => handleSearch()} />
            </div>
            <p className='mt-4'>{renderedData?.sys?.country}: {renderedData.name}</p>


            <img id='temp' className='w-24 h-24 object-contain' src={getImageSource(renderedData)} alt="current_weather_image" />



            <p>{renderedData?.weather?.main}</p>
            <p className='text-[18px]'>{Math.round(renderedData?.main?.temp - 273.15)}°C</p>
            <p className='text-[14px]'>{renderedData?.weather?.description}</p>
            <div className='flex gap-4 flex-col mt-4'>
                <p>Min. Temp: {renderedData?.main?.temp_min}°C</p>
                <p>Max. Temp: {renderedData?.main?.temp_max}°C</p>
            </div>
        </div>
    </div>

    </Suspense>
  )
}

export default Main