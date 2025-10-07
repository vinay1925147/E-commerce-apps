const City = document.querySelector(".city");
const Temp =document.querySelector(".temp");
const Humidity =document.querySelector(".humidity");
const Wind =document.querySelector(".wind");
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const Weather=document.querySelector(".weather");
const Error=document.querySelector(".error");

 const apiKey="93f5b218197e460ba892f01c4e395235"

 const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

 async function checkWeather(get){
    const response= await fetch( apiUrl + get + `&appid=${apiKey}`);

    if(response.status == 404){
        // Error.style.display="block";
        // Weather.style.display="none";
    }
    else
    {
    var data= await response.json(); 
    console.log(data)
// to chnage the diffrent data according to city name
    City.innerText=`${data.name}`;
    Temp.innerHTML=`${Math.round(data.main.temp)}°c`;
    Humidity.innerHTML=`${data.main.humidity}%`;
    Wind.innerHTML=`${data.wind.speed} km/h`;

 // to chnage image according to  weather
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./images/clear.png"
    }
     else if(data.weather[0].main=="Rain"){
        weatherIcon.src="./images/rain.png"
    } 
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="./images/mist.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./images/drizzle.png"
    }

    Weather.style.display="block";
    Error.style.display="none";
 }   
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})   
// checkWeather()


