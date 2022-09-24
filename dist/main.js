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
    var city = document.getElementById('city');
    var temp = document.getElementById('temp');
    var weather = document.getElementById('weather');
    var desc = document.getElementById('desc')

    city.innerHTML = `${data.city}, ${data.country}`;
    temp.innerHTML = `${data.tempC}°C`;
   // weather.innerHTML = `${data.weather}`;
    desc.innerHTML = `${data.desc}`;
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
    console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVLElBQUksYUFBYTtBQUNuRCx3QkFBd0IsV0FBVztBQUNuQyw2QkFBNkIsYUFBYTtBQUMxQyx3QkFBd0IsVUFBVTtBQUNsQzs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLHlGQUF5RixLQUFLO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ0g7QUFDcEM7QUFDQTtBQUNBLG9EQUFVO0FBQ1Y7QUFDQSxJQUFJLGtEQUFZO0FBQ2hCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxRQUFRLG9EQUFVO0FBQ2xCLFlBQVksa0RBQVk7QUFDeEIsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcG9wdWxhdGVEYXRhID0gKGRhdGEpPT57XHJcbiAgICB2YXIgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XHJcbiAgICB2YXIgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJyk7XHJcbiAgICB2YXIgd2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyJyk7XHJcbiAgICB2YXIgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJylcclxuXHJcbiAgICBjaXR5LmlubmVySFRNTCA9IGAke2RhdGEuY2l0eX0sICR7ZGF0YS5jb3VudHJ5fWA7XHJcbiAgICB0ZW1wLmlubmVySFRNTCA9IGAke2RhdGEudGVtcEN9wrBDYDtcclxuICAgLy8gd2VhdGhlci5pbm5lckhUTUwgPSBgJHtkYXRhLndlYXRoZXJ9YDtcclxuICAgIGRlc2MuaW5uZXJIVE1MID0gYCR7ZGF0YS5kZXNjfWA7XHJcbn0iLCJcclxuZXhwb3J0IGNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyhuYW1lKT0+e1xyXG4gICAgXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke25hbWV9JkFQUElEPTQ5Yzk3YThkNWRiZjRlZjM5MDI2MzNkZDM2ODg1NzE3YCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZihkYXRhLmNvZCA9PSAnNDA0Jyl7XHJcbiAgICAgICAgICAgIHJlamVjdChkYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBGID0gTWF0aC5jZWlsKChkYXRhLm1haW4udGVtcC0yNzMuMTUpKjkvNSArIDMyKTtcclxuICAgICAgICAgICAgdmFyIEMgPSBNYXRoLmNlaWwoZGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpXHJcbiAgICAgICAgICAgIHZhciBpbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgY2l0eTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTogZGF0YS5zeXMuY291bnRyeSxcclxuICAgICAgICAgICAgICAgIHRlbXBGOiBGLFxyXG4gICAgICAgICAgICAgICAgdGVtcEM6IEMsXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcclxuICAgICAgICAgICAgICAgIGRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUoaW5mbylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi93ZWF0aGVyXCI7XHJcbmltcG9ydCB7IHBvcHVsYXRlRGF0YSB9IGZyb20gXCIuL2RvbVwiXHJcblxyXG5cclxuZ2V0V2VhdGhlcignbmV3IHlvcmsnKS50aGVuKChkYXRhKT0+eyBcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcG9wdWxhdGVEYXRhKGRhdGEpO1xyXG59KVxyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuZm9ybS5vbnN1Ym1pdCA9IChlKT0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoZm9ybS5pbnAudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgYWxlcnQoXCJpbnB1dCBpcyBlbXB0eVwiKTtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGdldFdlYXRoZXIoZm9ybS5pbnAudmFsdWUpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIHBvcHVsYXRlRGF0YShkYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnAnKS52YWx1ZSA9IFwiXCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9