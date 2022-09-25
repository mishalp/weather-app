
export const getWeather = (name)=>{
    
    return new Promise(async(resolve, reject)=>{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=49c97a8d5dbf4ef3902633dd36885717`,{mode: 'cors'});
        const data = await response.json();
        if(data.cod == '404'){
            reject(data.message)
        }else{
            var F = Math.ceil((data.main.temp-273.15)*9/5 + 32);
            var C = Math.ceil(data.main.temp - 273.15)
            var info = {
                city: data.name,
                country: data.sys.country,
                tempF: F,
                tempC: C,
                weather: data.weather[0].main,
                desc: data.weather[0].description
        
            }
            resolve(info)
            
        }
 
        
    })




}
