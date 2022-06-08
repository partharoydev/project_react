import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { WeatherView } from './components/WeatherView';

function App() {

  // states
  const [citySearch, setCitySearch] = useState('');
  const [cityData, setCityData]=useState(null);

  // city search form
  const fetchCity = (e) =>{
    e.preventDefault();
    axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=pIYdanEjmGgKQxavtld8GkddwIkHjpSz&q=${citySearch}`)
    .then((res)=>{
      setCityData(res.data[0]);
      setCitySearch('');
    }).catch(err=>console.log(err.message));
  }

  return (
      <div className="weather">
        <form onSubmit={fetchCity}>
       <h1><i> Weather App </i></h1>
       <br></br>
       <br></br>
       <div id="div3">
                <input type="text" placeholder=" Enter City Name... " class="search"
                value={citySearch} onChange={(event)=>setCitySearch(event.target.value)} />
                <input type="submit" value="🔍" class="button1" />
        </div>
       </form>
       {cityData&&(
         <div style={{padding: 10+'px', width:100+'%'}}>
          <WeatherView cityData={cityData}/>
           </div>
       )}
      </div>

  
  );
}

export default App;
