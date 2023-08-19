// Assuming you have a mapping of countries to languages
const countryToLanguage = {
    'RU': 'ru', // Russia
    // ...
};

// Check if the user's language preference is already set
const userLanguagePreference = localStorage.getItem('userLanguage');
console.log(userLanguagePreference);

if (!userLanguagePreference) {
    // Get the user's country using a geolocation API (example)
    const userCountry = getUserCountry(); // Replace with your geolocation logic

    // Determine the language based on the country
    const language = countryToLanguage[userCountry] || 'en'; // Default to English

    // Set the language preference in a cookie or local storage
    localStorage.setItem('userLanguage', language);

    // Redirect the user to the appropriate language version of the website
    if (userCountry === 'RU') {
        window.location.href = 'https://den.com/ru/'; // Open in Russian
    } else {
        window.location.href = 'https://den.com/en/'; // Open in English
    }
}


$( document ).ready(function() {
    console.log( "ready!" );
}); 
console.log('hello vercel app!');