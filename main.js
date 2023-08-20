
let preferedLanguages = window.navigator.languages;
console.log(preferedLanguages);

let mainLanguage = preferedLanguages[0];
console.log(mainLanguage);

let allRusAL = ["ru", "ru-RU", "ru-UA", "ru-BY", "ru-KZ", "ru-md"];
let allEngAL = [ "en", "en-US", "en-GB", "en-CA", "en-AU", "en-IN", "en-NZ", "en-ZA"]

function isRussian(element, index, array) {
    return element === mainLanguage;
  }

console.log(allRusAL.some(isRussian));

