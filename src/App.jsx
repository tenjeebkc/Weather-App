import { useState } from 'react'

import './App.css'

function App() {
  // State to store the city input by the user
  const [city, setCity] = useState("")

  // Function to handle the input change
  const handleInputChange = (e) =>{
    setCity(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault() // Prevent the page reload
    alert("You searched for: " + city);
  }

  return (
    <>
    <div>
      <h1>Weather App - Made for you.</h1>
      {/* we put onsubmit because it will listen to any submit event like pressing "Enter" button also */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter a city' value={city} onChange={handleInputChange}/>
        <button type='submit'>Search</button>
      </form>
    </div>
    </>
  )
}

export default App
