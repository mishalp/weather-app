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

const getWeather = (name)=>{
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVLElBQUksYUFBYTtBQUNuRCx3QkFBd0IsV0FBVztBQUNuQyw2QkFBNkIsYUFBYTtBQUMxQyx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSx5RkFBeUYsS0FBSywwQ0FBMEMsYUFBYTtBQUNySjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzlCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ051QztBQUNIO0FBQ3BDO0FBQ0E7QUFDQSxvREFBVTtBQUNWLElBQUksa0RBQVk7QUFDaEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEsb0RBQVU7QUFDbEIsWUFBWSxrREFBWTtBQUN4QixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1bGF0ZURhdGEgPSAoZGF0YSk9PntcclxuICAgIGNvbnNvbGUubG9nKGRhdGEud2VhdGhlcik7XHJcbiAgICB2YXIgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XHJcbiAgICB2YXIgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJyk7XHJcbiAgICB2YXIgd2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyJyk7XHJcbiAgICB2YXIgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJylcclxuICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICBpZighZGF0YS5jb3VudHJ5KVxyXG4gICAgICAgIGRhdGEuY291bnRyeSA9IFwiXCJcclxuICAgIGNpdHkuaW5uZXJIVE1MID0gYCR7ZGF0YS5jaXR5fSwgJHtkYXRhLmNvdW50cnl9YDtcclxuICAgIHRlbXAuaW5uZXJIVE1MID0gYCR7ZGF0YS50ZW1wQ33CsENgO1xyXG4gICAvLyB3ZWF0aGVyLmlubmVySFRNTCA9IGAke2RhdGEud2VhdGhlcn1gO1xyXG4gICAgZGVzYy5pbm5lckhUTUwgPSBgJHtkYXRhLmRlc2N9YDtcclxuICAgIHN3aXRjaCAoZGF0YS53ZWF0aGVyKSB7XHJcbiAgICAgICAgY2FzZSAnSGF6ZSc6XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vaW1hZ2VzL2hhemUuanBnJylcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgIGNhc2UgJ0NsZWFyJzpcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi9pbWFnZXMvY2xlYXIuanBnJylcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnQ2xvdWRzJzpcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi9pbWFnZXMvY2xvdWR5LmpwZycpXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ1JhaW4nOlxyXG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2ltYWdlcy9yYWluLmpwZycpXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ1Nub3cnOlxyXG4gICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vaW1hZ2VzL3Nub3cuanBnJylcIlxyXG4gICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgY29uc3QgZ2V0V2VhdGhlciA9IChuYW1lKT0+e1xyXG4gICAgXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke25hbWV9JkFQUElEPTQ5Yzk3YThkNWRiZjRlZjM5MDI2MzNkZDM2ODg1NzE3YCx7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZihkYXRhLmNvZCA9PSAnNDA0Jyl7XHJcbiAgICAgICAgICAgIHJlamVjdChkYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBGID0gTWF0aC5jZWlsKChkYXRhLm1haW4udGVtcC0yNzMuMTUpKjkvNSArIDMyKTtcclxuICAgICAgICAgICAgdmFyIEMgPSBNYXRoLmNlaWwoZGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpXHJcbiAgICAgICAgICAgIHZhciBpbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgY2l0eTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTogZGF0YS5zeXMuY291bnRyeSxcclxuICAgICAgICAgICAgICAgIHRlbXBGOiBGLFxyXG4gICAgICAgICAgICAgICAgdGVtcEM6IEMsXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcclxuICAgICAgICAgICAgICAgIGRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUoaW5mbylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi93ZWF0aGVyXCI7XHJcbmltcG9ydCB7IHBvcHVsYXRlRGF0YSB9IGZyb20gXCIuL2RvbVwiXHJcblxyXG5cclxuZ2V0V2VhdGhlcignbmV3IHlvcmsnKS50aGVuKChkYXRhKT0+eyBcclxuICAgIHBvcHVsYXRlRGF0YShkYXRhKTtcclxufSlcclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbmZvcm0ub25zdWJtaXQgPSAoZSk9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGZvcm0uaW5wLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgIGFsZXJ0KFwiaW5wdXQgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBnZXRXZWF0aGVyKGZvcm0uaW5wLnZhbHVlKS50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICBwb3B1bGF0ZURhdGEoZGF0YSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICBhbGVydChlcnIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wJykudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==