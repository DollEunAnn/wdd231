// weather
const weatherIconContainer = document.querySelector('#currentIcon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#desc');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const humidity = document.querySelector('#humid');

// forecast
const todayDay = document.querySelector('#today-day');
const nextDayDay = document.querySelector('#next-day');
const nextTwoDaysDay = document.querySelector('#next-two-days');

const todayTemp = document.querySelector('#today-temp');
const nextDayTemp = document.querySelector('#next-day-temp');
const nextTwoDaysTemp = document.querySelector('#next-two-days-temp');

// Weather (for current)
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=14.54&lon=121.36&units=metric&appid=de926153d7100af0218715150b7c4101`;

// Forecast (for next 3 days)
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=14.54&lon=121.36&units=metric&appid=de926153d7100af0218715150b7c4101`;

async function apiFetch() {
    try {
        const [weatherResponse, forecastResponse] = await Promise.all([
            fetch(weatherUrl),
            fetch(forecastUrl)
        ]);

        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error("API Error");
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        displayResults(weatherData, forecastData);

    } catch (error) {
        console.log("Error:", error);
    }
}

apiFetch();

function displayCurrentWeather(weatherData) {

    currentTemp.innerHTML = `${weatherData.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    const weatherIcon = document.createElement('img');
    weatherIcon.id = "weatherIcon";

    let desc = weatherData.weather[0].description;

    high.innerHTML = `${weatherData.main.temp_max}&deg;C`;
    low.innerHTML = `${weatherData.main.temp_min}&deg;C`;
    humidity.textContent = `${weatherData.main.humidity}%`;
    sunrise.innerHTML = formatTime(weatherData.sys.sunrise);
    sunset.innerHTML = formatTime(weatherData.sys.sunset);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    
    weatherIconContainer.append(weatherIcon);
    
}

function formatTime(unixTime) {
    const date = new Date(unixTime * 1000);

    return date.toLocaleTimeString("en-PH", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Manila"
    });
}

function formatDay(unixTime) {
    const date = new Date(unixTime * 1000); // convert seconds → ms
    return date.toLocaleDateString("en-PH", { weekday: "long", timeZone: "Asia/Manila" });
}

function displayResults(weatherData, forecastData) {
    displayCurrentWeather(weatherData);
    displayForecast(forecastData);
}


function displayForecast(forecastData) {

    todayDay.textContent = `${formatDay(forecastData.list[0].dt)}: `;
    nextDayDay.textContent = `${formatDay(forecastData.list[8].dt)}: `;
    nextTwoDaysDay.textContent = `${formatDay(forecastData.list[16].dt)}: `;

    todayTemp.textContent = `${forecastData.list[0].main.feels_like}°C`;
    nextDayTemp.textContent = `${forecastData.list[8].main.feels_like}°C`;
    nextTwoDaysTemp.textContent = `${forecastData.list[16].main.feels_like}°C`;
}


 // <div class="business-card">
  //     <div class="business-header">
  //         <p>Business Name</p>
  //         <p>Business Tag Line</p>
  //     </div>
  //     <div class="business-content">
  //         <img src="images/profile.jpg" alt="">
  //         <div class="info">
  //             <p>Email: info@gmail.com</p>
  //             <p>Phone: 800-555-1234</p>
  //             <p>URL: mybusiness.com</p>
  //         </div>
  //     </div>
  // </div>