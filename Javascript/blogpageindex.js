// Function to fetch user's geolocation using WeatherAPI.com API
function getUserGeolocation() {
    //insert API key here from weatherapi.com 
    const apiKey = '';

    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Fetch weather data using WeatherAPI.com API
            getWeatherData(apiKey, latitude, longitude);

            // Fetch time data using WeatherAPI.com API
            getTimeData(apiKey, latitude, longitude);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

// Function to fetch weather data using WeatherAPI.com API
function getWeatherData(apiKey, latitude, longitude) {
    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            // Extract weather information from the response
            const weatherDescription = data.current.condition.text;
            const location = data.location.name;

            // Update the website elements with weather information
            updateWeatherElement(weatherDescription, location);
        })
        .catch(error => console.error(error));
}

// Function to fetch time data using WeatherAPI.com API
function getTimeData(apiKey, latitude, longitude) {
    const timeUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

    fetch(timeUrl)
        .then(response => response.json())
        .then(data => {
            // Extract time information from the response
            const locationTime = data.location.localtime;

            // Update the website elements with time information
            updateTimeElement(locationTime);
        })
        .catch(error => console.error(error));
}

// Function to update website elements with weather information
function updateWeatherElement(weatherDescription, location) {
    // Update the HTML elements with corresponding IDs
    document.getElementById("weather").textContent = `${weatherDescription}`;
    document.getElementById("location").textContent = `${location}`;
}

// Function to update website elements with time information
function updateTimeElement(locationTime) {
    // Update the HTML element with corresponding ID
    document.getElementById("location-date-time").textContent = locationTime;
}

// Function to update the current time by the minute
function updateCurrentTime() {
    const currentTimeElement = document.getElementById("location-date-time");
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    currentTimeElement.textContent = formattedTime;
}

// Call getUserGeolocation to start fetching user's geolocation, weather, and time when the page loads
window.onload = function () {
    getUserGeolocation();

    // Call updateCurrentTime initially to set the time
    updateCurrentTime();

    // Update the time every minute (60,000 milliseconds)
    setInterval(updateCurrentTime, 10000);
};
