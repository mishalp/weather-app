import { getWeather } from "./weather";
import { populateData } from "./dom"


getWeather('new york').then((data)=>{ 
    populateData(data);
})

const form = document.querySelector('form');
form.onsubmit = (e)=>{
    e.preventDefault();
    if(form.inp.value == ""){
        alert("input is empty");
        return
    }else{
        getWeather(form.inp.value).then((data)=>{
            populateData(data)
        }).catch((err)=>{
            alert(err);
            document.getElementById('inp').value = ""
        })
    }
}