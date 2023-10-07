const api_key = '09ba38ec514648227327c104a399bb60'

const searchRenderData = async (city) => {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    return data.json()
}

export default searchRenderData