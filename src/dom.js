export const populateData = (data)=>{
    var city = document.getElementById('city');
    var temp = document.getElementById('temp');
    var weather = document.getElementById('weather');
    var desc = document.getElementById('desc')

    city.innerHTML = `${data.city}, ${data.country}`;
    temp.innerHTML = `${data.tempC}°C`;
   // weather.innerHTML = `${data.weather}`;
    desc.innerHTML = `${data.desc}`;
}