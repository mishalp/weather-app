export const populateData = (data)=>{
    console.log(data.weather);
    var city = document.getElementById('city');
    var temp = document.getElementById('temp');
    var weather = document.getElementById('weather');
    var desc = document.getElementById('desc')
    var body = document.querySelector('body')
    if(!data.country)
        data.country = ""
    city.innerHTML = `${data.city}, ${data.country}`;
    temp.innerHTML = `${data.tempC}°C`;
   // weather.innerHTML = `${data.weather}`;
    desc.innerHTML = `${data.desc}`;
    switch (data.weather) {
        case 'Haze':
            body.style.backgroundImage = "url('./images/haze.jpg')"
            break;
    
        case 'Clear':
            body.style.backgroundImage = "url('./images/clear.jpg')"
            break;

        case 'Clouds':
            body.style.backgroundImage = "url('./images/cloudy.jpg')"
            break;

        case 'Rain':
            body.style.backgroundImage = "url('./images/rain.jpg')"
            break;

        case 'Snow':
           body.style.backgroundImage = "url('./images/snow.jpg')"
           break;

        case 'Mist':
            body.style.backgroundImage = "url('./images/mist.jpg')"
            break;

        case 'Fog':
            body.style.backgroundImage = "url('./images/fog.png')"
            break;

        default:
            break;
    }
}