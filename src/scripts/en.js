import { Router } from 'director/build/director';
import request from 'superagent';

const appContainer = document.querySelector('.countries-container')

function showAll() {
request.get('https://restcountries.eu/rest/v2/all')
.then(data => {
var info = data.body;

  info.forEach(function(obj) {
  var speakIng = obj.languages[0].nativeName;

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
