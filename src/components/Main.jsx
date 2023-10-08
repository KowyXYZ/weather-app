import React, {useEffect, useState, Suspense} from 'react'

import {clear, cloud, drizzle, humidity, rain, snow, wind, search, clearnight, fewclouds, scatteredclouds, brokenclouds, showerrain, thunderstorm} from '../assets'

import searchRenderData from '../utils/searchRenderData'

import Loader from './Loader'
import { render } from '@testing-library/react'

function Main() {

    // const api_key = '09ba38ec514648227327c104a399bb60'
    const [city, setCity] = useState('Belgrade')

    const [textBox, setTextBox] = useState('')

    const [renderedData, setRenderedData] = useState({})

   
    useEffect(() => {
        searchRenderData(city).then((data) => setRenderedData(data))
      }, [])
  

    const handleSearch = async () => {
        if(textBox === '') {
            return 
        } 
        searchRenderData(textBox).then((data) => setRenderedData(data))
        console.log(renderedData)
    }


    const getImageSource = () => {
        const weatherData = renderedData?.weather;

        if(weatherData) {

            if(weatherData[0]?.icon === '01d') {
                return clear
            } else if (weatherData[0]?.icon === '02d') {
                return cloud
            } else if (weatherData[0]?.icon === '03d') {
                return cloud
            } else if (weatherData[0]?.icon === '04d') {
                return cloud
            } else if (weatherData[0]?.icon === '09d') {
                return rain
            } else if (weatherData[0]?.icon=== '10d') {
                return rain
            } else if (weatherData[0]?.icon === '11d') {
                return rain
            } else if (weatherData[0]?.icon === '13d') {
                return snow
            } else if (weatherData[0]?.icon === '50d') {
                return drizzle
                
                //night 
            } else if (weatherData[0]?.icon === '01n') {
                return clearnight
            } else if (weatherData[0]?.icon === '02n') {
                return fewclouds
            } else if (weatherData[0]?.icon === '03n') {
                return scatteredclouds
            } else if (weatherData[0]?.icon === '04n') {
                return brokenclouds
            } else if (weatherData[0]?.icon === '09n') {
                return showerrain
            } else if (weatherData[0]?.icon === '10n') {
                return rain
            } else if (weatherData[0]?.icon === '11n') {
                return thunderstorm
            } else if (weatherData[0]?.icon === '13n') {
                return snow
            }
        }
        
            return wind

}

  return (
    <Suspense fallback={<Loader/>}>
    { renderedData ? <div className='mx-16 flex items-center flex-col justify-center py-12 '>
        <p className='text-center py-4 font-black'>Weather App</p>
        <div className='border-2 rounded-3xl p-6 flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center gap-2'>
             <input className='bg-[#fff] text-[#000] rounded-2xl p-2 outline-none' type="text" id="inpBox" onChange={(e) => setTextBox(e.target.value)} />
             <img src={search} className='border-2 rounded-xl p-1 bg-[#fff] w-9 h-9 object-contain cursor-pointer' alt="search" onClick={() => handleSearch()} />
            </div>
            <p className='mt-4'>{renderedData?.sys?.country}: {renderedData?.name}</p>


            <img id='temp' className='w-24 h-24 object-contain' src={renderedData ? getImageSource() : cloud} alt={renderedData ? renderedData[0]?.weather[0]?.icon : 'error'} />


            <p className='text-[18px]'>{Math.round(renderedData?.main?.temp - 273.15)}°C</p>
            <p className='text-[14px]'>{renderedData?.weather?.description}</p>
            <div className='flex gap-4 flex-col mt-4'>
                <p>Min. Temp: {Math.round(renderedData?.main?.temp_min - 273.15)}°C</p>
                <p>Max. Temp: {Math.round(renderedData?.main?.temp_max - 273.15)}°C</p>
            </div>
        </div>
    </div> : <p>Loading...</p>}
    

    </Suspense>
  )
}

export default Main