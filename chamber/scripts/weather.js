const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#desc');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const weatherIcon = document.querySelector('#weather-icon');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&units=metric&appId=de926153d7100af0218715150b7c4101';


async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            displayResults(data);

        } else {
            throw Error(await response.text());
        }
        
    } catch (error) {
        console.log(error);
    }
    
}

apiFetch();


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    high.innerHTML = `${data.main.temp_max}&deg;F`;
    low.innerHTML = `${data.main.temp_min}&deg;F`;
    sunrise.innerHTML = `${data.sys.sunrise}`;
    sunset.innerHTML = `${data.sys.sunset}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}