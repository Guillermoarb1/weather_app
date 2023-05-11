import { useEffect, useState } from 'react'
import Descrptions from './assets/components/Descrptions'
import axios from 'axios'


const API_KEY1 =  "8fed7542d5e8245acbcac6084f97c278"

function App() {
  // estado para obtener cordenadas
  const [coords, setCoords] = useState(0)

  //estado para guardar todo el arreglo del clima
  const [weather, setWeather] = useState()

  console.log(weather)
  
  const success = (e) => {
    const newCoords = {
      lat: e.coords.latitude ,
      lon: e.coords.longitude 
    } 
    return  setCoords(newCoords)
  }

  useEffect(() => {
   navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  useEffect(() => {
   if (coords) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY1}&units=metric`
    axios.get(URL)
      .then(res => {
        setWeather(res.data)
      })
      .catch(err => console.log(err))
   }
  }, [coords])
  

  return (
    <div className='app'>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name='city' placeholder='Enter City...' />
            <button>°F</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3>{weather.name}</h3>
              
              <svg width="50" height="50" viewBox="0 0 197 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_321)">
                <path d="M175.318 159.26L153.729 160.809L149.617 181.975L129.057 176.038L118.005 194.623L100.529 181.717L83.8232 195.397L71.7439 177.329L51.4402 184.556L46.3001 163.39L24.7114 163.132L27.0244 141.45L6.72079 133.965L16.4871 114.347L0.0385742 100.151L15.7161 85.1797L5.17874 66.3369L24.9684 57.5607L21.3703 36.1367L42.959 34.8461L47.0711 13.4221L67.8887 19.617L78.9401 0.774119L96.1597 13.6802L113.122 -0.000244141L124.945 18.0682L145.505 10.8408L150.645 32.0068L172.234 32.2649L169.664 53.9471L189.968 61.4326L180.458 81.0498L196.65 95.2464L181.229 110.217L191.767 129.06L171.977 137.836L175.318 159.26Z" fill="url(#paint0_linear_1_321)"/>
                <path d="M25.4824 97.8276C25.4824 138.353 58.1225 170.876 98.2158 170.876C138.566 170.876 170.949 138.094 170.949 97.8276C170.949 57.3026 138.309 24.7793 98.2158 24.7793C58.1225 24.5212 25.4824 57.3026 25.4824 97.8276Z" fill="url(#paint1_radial_1_321)"/>
                <path d="M109.524 90.084C91.0195 74.8549 83.8233 51.8821 93.3326 38.7179C102.842 25.5538 125.716 26.8444 144.477 42.0735C162.982 57.3027 170.178 80.2754 160.669 93.4396C150.902 106.862 128.029 105.313 109.524 90.084Z" fill="url(#paint2_radial_1_321)"/>
                <path opacity="0.4" d="M33.9637 113.831C36.5338 105.829 48.8701 109.185 61.9776 121.317C74.828 133.448 83.5663 149.968 80.9962 158.228C78.4261 166.23 66.0897 162.874 52.9823 150.742C40.1319 138.353 31.6506 121.833 33.9637 113.831Z" fill="url(#paint3_radial_1_321)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_1_321" x1="188.063" y1="-2.92991" x2="14.374" y2="190.325" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFBA24"/>
                <stop offset="1" stop-color="#FF5500"/>
                </linearGradient>
                <radialGradient id="paint1_radial_1_321" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(115.048 51.8418) rotate(180) scale(138.288 138.887)">
                <stop stop-color="#FFF4C3"/>
                <stop offset="0.1559" stop-color="#FFE036"/>
                <stop offset="1" stop-color="#FA761C"/>
                </radialGradient>
                <radialGradient id="paint2_radial_1_321" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(126.906 66.133) rotate(125.917) scale(29.6967 43.2639)">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint3_radial_1_321" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.474 136.025) rotate(-136.666) scale(32.2667 13.7085)">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
                </radialGradient>
                <clipPath id="clip0_1_321">
                <rect width="196.611" height="195.398" fill="white" transform="translate(0.0385742)"/>
                </clipPath>
                </defs>
              </svg>
              <h3>{weather.weather[0].description}</h3>
            </div>
            <div className="temperature">
              <h1>34 °c</h1>
            </div>
          </div>

          {/* bottom */}
          <Descrptions />
        </div>
      </div>
    </div>
  )
}

export default App
