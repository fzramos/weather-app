const API_KEY = "ADD API KEY HERE";

function cityOrZip() {
    user_input = document.getElementById("city").value;
    console.log(user_input)
    if (Number.isInteger(user_input)) {
        getTemp(user_input, 'zip')
    }
    getTemp(user_input, 'city')

    // getTemp(user_input, (!Number.isInteger(user_input)))

}

const getTemp = (user_in, locType) => {
    // if (isCity) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${user_in}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => parseShowData(data))
        .catch(msg => {
            console.log("invalid city")
        })
    // }
    // switch(locType) {
    //     case "city":
    //         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${user_in}&appid=${API_KEY}`)
    //         .then(response => response.json())
    //         .then(data => parseShowData(data))
    //         .catch(msg => {
    //             console.log("invalid city")
    //         })
    //         break;
    //     case "zip":
    //         console.log("thats a zip");
    //         // zip seems ot work find in the same city call
    //         break;


            
    // }
}

function parseShowData(data) {
    // getting weather data from json
    const temp_max = kToF(data.main.temp_min);
    const temp_min = kToF(data.main.temp_min);
    const humidity = data.main.humidity;
    const forcast_title = data.weather[0].main;
    const forcast_dets = data.weather[0].description;
    const feels_like = kToF(data.main.feels_like);
    // console.log(data)
    // console.log(forcast_dets)

    // getting html elements where weather variables will go
    const weather_texts = document.querySelectorAll('p')
    const forcast_header = document.querySelector('h4')
    // console.log(weather_texts)
    // console.log(weather_texts[0])
    // console.log(weather_texts)

    // high_text = document.querySelector('.high-text')
    // weather_texts[0].innerHTML = temp_max_k;
    // high_text.innerHTML(temp_max_k)

    // putting the weather data into the elements
    weather_texts[0].innerHTML = `${temp_max} °F`
    weather_texts[1].innerHTML = `${temp_min} °F`
    weather_texts[2].innerHTML = `${humidity}%`
    forcast_header.innerHTML = forcast_title
    weather_texts[3].innerHTML = forcast_dets
    weather_texts[4].innerHTML = `${feels_like} °F`



}

function kToF(kelvin) {
    const rawF = (kelvin - 273.15) * (9/5) + 32;
    return (Math.round(rawF * 100) / 100).toFixed(2)
}