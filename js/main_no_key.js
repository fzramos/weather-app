const API_KEY = "ADD API KEY HERE";
STATUS_TO_IMAGE = {
    "Clear": "image/sun.svg",
    "Clouds": "image/cloud.svg",
    "Drizzle": "image/cloud-drizzle.svg",
    "Rain": "image/cloud-rain.svg",
    "Thunderstorm": "image/cloud-lightning.svg",
    "Snow": "image/snow.svg",
    "Mist": "image/wind.svg"
}
// function cityOrZip() {
//     user_input = document.getElementById("city").value;
//     console.log(user_input)
//     if (Number.isInteger(user_input)) {
//         getTemp(user_input, 'zip')
//     }
//     getTemp(user_input, 'city')

//     // getTemp(user_input, (!Number.isInteger(user_input)))

// }

// const getTemp = (user_in, locType) => {
//     // if (isCity) {
//         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${user_in}&appid=${API_KEY}`)
//         .then(response => response.json())
//         .then(data => parseShowData(data))
//         .catch(msg => {
//             console.log("invalid city")
//         })
//     // }
//     // switch(locType) {
//     //     case "city":
//     //         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${user_in}&appid=${API_KEY}`)
//     //         .then(response => response.json())
//     //         .then(data => parseShowData(data))
//     //         .catch(msg => {
//     //             console.log("invalid city")
//     //         })
//     //         break;
//     //     case "zip":
//     //         console.log("thats a zip");
//     //         // zip seems ot work find in the same city call
//     //         break;


            
//     // }
// }

const getTemp = () => {
    user_in = document.getElementById("city").value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${user_in}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => parseShowData(data))
    // .catch(msg => {
    //     console.log("invalid city")
    // })
}
function parseShowData(data) {
    // getting weather data from json
    const city_name = data.name;
    const temp_max = kToF(data.main.temp_max);
    const temp_min = kToF(data.main.temp_min);
    const humidity = data.main.humidity;
    const forcast_title = data.weather[0].main;
    const forcast_dets = data.weather[0].description;
    const feels_like = kToF(data.main.feels_like);

    // getting html elements where weather variables will go
    const city_title = document.getElementById('city-title')
    const weather_texts = document.querySelectorAll('p')
    const forcast_header = document.querySelector('h4');
    const weather_icon = document.getElementById('weather-icon')

    // putting the weather data into the elements
    city_title.innerHTML = city_name
    weather_texts[0].innerHTML = `${temp_max} °F`
    weather_texts[1].innerHTML = `${temp_min} °F`
    weather_texts[2].innerHTML = `${humidity}%`
    forcast_header.innerHTML = forcast_title
    weather_texts[3].innerHTML = forcast_dets;
    weather_icon.src = STATUS_TO_IMAGE[forcast_title];
    weather_texts[4].innerHTML = `${feels_like} °F`



}

function kToF(kelvin) {
    const rawF = (kelvin - 273.15) * (9/5) + 32;
    return (Math.round(rawF * 100) / 100).toFixed(2)
}