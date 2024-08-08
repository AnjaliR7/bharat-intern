 // script.js

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeatherData(city);
    } else {
        alert('Please enter a city name');
    }
});

function fetchWeatherData(city) {
    // Your API Key
    
    const apiKey = 'e0d2c89723fa0634299d26634bf45fd7'; 

    // API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    // Fetching weather data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found'); // Handle errors
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayWeatherData(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weatherDescription').textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById('weatherDetails').style.display = 'block';
}
