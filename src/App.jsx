import { useState } from 'react'

import './App.css'

function App() {
  // State to store the city input by the user
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)

  // Function to handle the input change
  const handleInputChange = (e) =>{
    setCity(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault() // Prevent the page reload
    fetchWeather();
  }

  const fetchWeather = async() => {
    if(!city) return;  // if input is empty, do nothing


    const API_Key = "c4a4f90fa70b4477fa5f22a0856e1f47";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`

    try{
      const response = await fetch(url);
      const data = await response.json()
      console.log(data)
      setWeather(data);
    }
    catch{
      console.log("Error fetching data: ", error)
    }

  }

  return (
    <>
    <div className='mt-30 bg-violet-600 rounded-2xl p-10'>
      <h1 className='font-bold text-4xl pb-8 '>Weather App - Made for you.</h1>
      {/* we put onsubmit because it will listen to any submit event like pressing "Enter" button also */}
      <form onSubmit={handleSubmit}>
        <input className='border-2 rounded-xl pl-2 p-2' type="text" placeholder='Enter a city' value={city} onChange={handleInputChange}/>
        <button className='bg-green-600 font-bold text-white p-3 ml-2 rounded-xl' type='submit'>Search</button>
      </form>
    </div>
    {weather && weather.main && (
      <div className='mt-5 bg-violet-600 rounded-2xl p-10'>
        <h2  className='text-3xl pb-2 font-bold'>{weather.name}</h2>
        <p className='text-5xl pb-3' >⛅</p>
        <p className='pb-5  text-xl font-bold'>Temperature: {weather.main.temp} ℃ </p>
        <p className='pb-5  text-xl font-bold'>Wind: {weather.wind.speed} m/s </p>

        <p className='text-xl font-bold'>Condition : {weather.weather[0].description}</p>
         </div>
    )}
    </>
  )
}

export default App
