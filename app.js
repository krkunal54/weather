let long;
let lat;
var city;
//  = document.querySelector(".input_text");
let button = document.querySelector(".submit_btn");
let tempretureDescription = document.querySelector(".tempreture-description");
let tempretureDegree = document.querySelector(".tempreture-degree");
let locationTimezone = document.querySelector(".location-timezone");
let locationIcon = document.querySelector(".weather-icon");
let tempretureSection = document.querySelector(".tempreture");
let tempretureSpan = document.querySelector(".tempreture span");
let weatherDetails = document.querySelector(".summary");
button.addEventListener("click", function() {
    city = document.querySelector(".input_text");
    console.log(city);
    fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city.value +
            "&units=metric&appid=8a7c89f64a40748a02429f51cb6c3730"
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);


            //DOM ELEMENTS
            let icon = data.weather[0].icon;
            console.log(icon);
            tempretureDegree.textContent = data.main.temp;
            tempretureDescription.textContent = data.weather[0].description;
            locationTimezone.textContent = data.timezone;
            weatherDetails.textContent = data.wind.speed;

            //SET WEATHER ICON BY REPLACING INNERHTML
            locationIcon.innerHTML = `<img src="./icons/${icon}.png" alt="Weather">`;
            console.log(locationIcon);

            // CHANGE CELSIUS TO FAHRENHEIT ON CLICK

            let FAHRENHEIT = data.main.temp * (9 / 5) + 32;
            tempretureSection.addEventListener("click", () => {
                if (tempretureSpan.textContent === "C") {
                    tempretureSpan.textContent = "F";
                    tempretureDegree.textContent = FAHRENHEIT;
                } else {
                    tempretureSpan.textContent = "C";
                    tempretureDegree.textContent = data.main.temp;
                }
            });
        });
});
window.addEventListener("load", () => {});