/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateData": () => (/* binding */ populateData)
/* harmony export */ });
const populateData = (data)=>{
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

        default:
            break;
    }
}

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });

const getWeather = async(name)=>{
    
    return new Promise(async(resolve, reject)=>{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=49c97a8d5dbf4ef3902633dd36885717`);
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




(0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)('new york').then((data)=>{ 
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateData)(data);
})

const form = document.querySelector('form');
form.onsubmit = (e)=>{
    e.preventDefault();
    if(form.inp.value == ""){
        alert("input is empty");
        return
    }else{
        (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(form.inp.value).then((data)=>{
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.populateData)(data)
        }).catch((err)=>{
            alert(err);
            document.getElementById('inp').value = ""
        })
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVLElBQUksYUFBYTtBQUNuRCx3QkFBd0IsV0FBVztBQUNuQyw2QkFBNkIsYUFBYTtBQUMxQyx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSx5RkFBeUYsS0FBSztBQUM5RjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzlCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ051QztBQUNIO0FBQ3BDO0FBQ0E7QUFDQSxvREFBVTtBQUNWLElBQUksa0RBQVk7QUFDaEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEsb0RBQVU7QUFDbEIsWUFBWSxrREFBWTtBQUN4QixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1bGF0ZURhdGEgPSAoZGF0YSk9PntcclxuICAgIGNvbnNvbGUubG9nKGRhdGEud2VhdGhlcik7XHJcbiAgICB2YXIgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XHJcbiAgICB2YXIgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJyk7XHJcbiAgICB2YXIgd2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyJyk7XHJcbiAgICB2YXIgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJylcclxuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICBpZighZGF0YS5jb3VudHJ5KVxyXG4gICAgICAgIGRhdGEuY291bnRyeSA9IFwiXCJcclxuICAgIGNpdHkuaW5uZXJIVE1MID0gYCR7ZGF0YS5jaXR5fSwgJHtkYXRhLmNvdW50cnl9YDtcclxuICAgIHRlbXAuaW5uZXJIVE1MID0gYCR7ZGF0YS50ZW1wQ33CsENgO1xyXG4gICAvLyB3ZWF0aGVyLmlubmVySFRNTCA9IGAke2RhdGEud2VhdGhlcn1gO1xyXG4gICAgZGVzYy5pbm5lckhUTUwgPSBgJHtkYXRhLmRlc2N9YDtcclxuICAgIHN3aXRjaCAoZGF0YS53ZWF0aGVyKSB7XHJcbiAgICAgICAgY2FzZSAnSGF6ZSc6XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vaW1hZ2VzL2hhemUuanBnJylcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgIGNhc2UgJ0NsZWFyJzpcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi9pbWFnZXMvY2xlYXIuanBnJylcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnQ2xvdWRzJzpcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi9pbWFnZXMvY2xvdWR5LmpwZycpXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ1JhaW4nOlxyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2ltYWdlcy9yYWluLmpwZycpXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ1Nub3cnOlxyXG4gICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vaW1hZ2VzL3Nub3cuanBnJylcIlxyXG4gICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jKG5hbWUpPT57XHJcbiAgICBcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyhyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bmFtZX0mQVBQSUQ9NDljOTdhOGQ1ZGJmNGVmMzkwMjYzM2RkMzY4ODU3MTdgKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmKGRhdGEuY29kID09ICc0MDQnKXtcclxuICAgICAgICAgICAgcmVqZWN0KGRhdGEubWVzc2FnZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFyIEYgPSBNYXRoLmNlaWwoKGRhdGEubWFpbi50ZW1wLTI3My4xNSkqOS81ICsgMzIpO1xyXG4gICAgICAgICAgICB2YXIgQyA9IE1hdGguY2VpbChkYXRhLm1haW4udGVtcCAtIDI3My4xNSlcclxuICAgICAgICAgICAgdmFyIGluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICBjaXR5OiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBkYXRhLnN5cy5jb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgdGVtcEY6IEYsXHJcbiAgICAgICAgICAgICAgICB0ZW1wQzogQyxcclxuICAgICAgICAgICAgICAgIHdlYXRoZXI6IGRhdGEud2VhdGhlclswXS5tYWluLFxyXG4gICAgICAgICAgICAgICAgZGVzYzogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShpbmZvKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICBcclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL3dlYXRoZXJcIjtcclxuaW1wb3J0IHsgcG9wdWxhdGVEYXRhIH0gZnJvbSBcIi4vZG9tXCJcclxuXHJcblxyXG5nZXRXZWF0aGVyKCduZXcgeW9yaycpLnRoZW4oKGRhdGEpPT57IFxyXG4gICAgcG9wdWxhdGVEYXRhKGRhdGEpO1xyXG59KVxyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuZm9ybS5vbnN1Ym1pdCA9IChlKT0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoZm9ybS5pbnAudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgYWxlcnQoXCJpbnB1dCBpcyBlbXB0eVwiKTtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGdldFdlYXRoZXIoZm9ybS5pbnAudmFsdWUpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIHBvcHVsYXRlRGF0YShkYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnAnKS52YWx1ZSA9IFwiXCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9