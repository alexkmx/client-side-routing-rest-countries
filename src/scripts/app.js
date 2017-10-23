import { Router } from 'director/build/director';
import request from 'superagent';
// import showAll from '/All'
const appContainer = document.querySelector('.countries-container')
// appContainer.innerHTML = showAll()
appContainer.innerHTML = ''
function showAll() {
request.get('https://restcountries.eu/rest/v2/all')
.then(data => {
var info = data.body;
appContainer.innerHTML = ''
info.forEach(function(obj) {
  // console.log(obj);
  var languages = obj.languages[0].nativeName

  appContainer.innerHTML += `
  <div class="country-card">
    <img class="country-flag" src="${obj.flag}" alt="flag">
    <h4 class="country-name">${obj.name}</h4>
    <p class="country-capital">${obj.capital}</p>
  </div>
`
})
})
}

function showCountLang(e){

request.get('https://restcountries.eu/rest/v2/all')
.then(data => {
var info = data.body;
appContainer.innerHTML = ''
info.forEach(function(obj) {
  var nativeLang =obj.languages[0].iso639_1;
  // console.log(nativeLang);
  if(e === nativeLang ){
  appContainer.innerHTML += `
  <div class="country-card">
    <img class="country-flag" src="${obj.flag}" alt="flag">
    <h4 class="country-name">${obj.name}</h4>
    <p class="country-capital">${obj.capital}</p>
  </div>
`
}
})
})
}
const routes = {
  '/': showAll,
  '/languages/:id': showCountLang,

}

const router = Router(routes);
router.init('/');
