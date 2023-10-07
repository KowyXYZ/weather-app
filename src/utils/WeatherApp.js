const WeatherApp = async ({city, api_key}) => {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}}`)
    return data.json()
}

export default WeatherApp