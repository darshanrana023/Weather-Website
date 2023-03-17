const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa4ce63b21mshe5c5de330a278f5p1c7bdejsn4d5fa61ecbd5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Vadodara', options)
	.then(response => response.json())
	.then((response) => {
         console.log(response)

  cloud_pct.innerHTML= response.cloud_pct
  temp.innerHTML= response.temp
  feels_like.innerHTML= response.feels_like
  humidity.innerHTML= response.humidity
  min_temp.innerHTML= response.min_temp
  max_temp.innerHTML= response.max_temp
  wind_speed.innerHTML= response.wind_speed
  wind_degrees.innerHTML= response.wind_degrees
  sunrise.innerHTML= response.sunrise
  sunset.innerHTML= response.sunset
})

.catch(err => console.error(err));