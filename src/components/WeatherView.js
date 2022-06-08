import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { CombSpinner } from 'react-spinners-kit';



export const WeatherView =({ cityData }) =>{
const [data, setData]=useState();
const [loading, setLoading]=useState();

useEffect(()=>{
  setData();
  setLoading(true);
axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=%09pIYdanEjmGgKQxavtld8GkddwIkHjpSz`)
.then((response)=>{
setData(response.data[0]);
setLoading(false);
})
},[cityData.Key])


    return(
        <>
        {data&&(
        <main className="current-conditions-box">
         <h2 className='city'>
           City={cityData.EnglishName}
         </h2>
         <label className='country'>
           Country={cityData.Country.EnglishName}
         </label>
         <br></br>
          <div className="details">
            <h3 className="temperature-value">
             Temperature= {Math.ceil(data.Temperature.Metric.Value)}
              <sup className="deg">&deg;{data.Temperature.Metric.Unit}</sup> 
              </h3>
            <h4 className="weather-text">
            Sky Condition={data.WeatherText}
            </h4>
          </div>
        </main>
      )}
      {!data&&(
        <div>
          <center>
        <CombSpinner loading={loading} size={200}/>
        </center>
        </div>
      )}
        </>
    );
};