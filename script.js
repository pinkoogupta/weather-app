const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "096045207fmshf5f6f0b532f98f3p16ceb6jsn149e551b0478",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather= (city)=>{
	cityName.innerHTML=city
fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +city,options)

  .then((response) => response.json())
  .then((response) => {
    console.log(response);

   
    // cloud_pct.innerHTML =response.cloud_pct 
    temp.innerHTML =response.temp 
    feels_like.innerHTML =response.feels_like 
    humidity.innerHTML =response.humidity 
    min_temp.innerHTML =response.min_temp 
    max_temp.innerHTML =response.max_temp 
    wind_speed.innerHTML =response.wind_speed 
    wind_degrees.innerHTML =response.wind_degrees 
    sunrise.innerHTML =response.sunrise 
    sunset.innerHTML =response.sunset 
  
  })
  .catch((err) => console.error(err));
}
Submit.addEventListener("click",(city)=>{ 
	e.preventDefault()
  getweather(city.value)
})
getweather("lucknkow") 