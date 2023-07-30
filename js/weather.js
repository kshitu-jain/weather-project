let cityName = document.querySelector("#location");
let countryName = document.querySelector("#country");
let temp = document.querySelector("#temp");
let description = document.querySelector("#description");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#windSpeed");
let feel = document.querySelector("#feels");
let icon = document.querySelector("#icon");
let search = document.querySelector("#search");
let button = document.querySelector("#btn");
let minTemp = document.querySelector("#mintemp");
let maxTemp = document.querySelector("#maxtemp");
let main = document.querySelector("#main");
let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let pressure = document.querySelector("#Pressure");

// let weatherIcon = document.querySelector("#icon")

async function weather(city) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37b5af3aec82a4921efdf05da7840c3f&units=metric`;
    let response = await fetch(url);

    //to extract data
    let data = await response.json();
    console.log(data);

    cityName.innerHTML = data.name;
    countryName.innerHTML = data.sys.country;
    temp.innerHTML = data.main.temp + " " + "°C";
    description.innerHTML = data.weather[0].description;
    humidity.innerHTML = data.main.humidity + " " + "%";
    windSpeed.innerHTML = data.wind.speed + " " + "km/h";
    feel.innerHTML = data.main.feels_like + " " + "°C";
    // icon.innerHTML= data.weather[0].icon

    minTemp.innerHTML = data.main.temp_min + " " + "°C";
    maxTemp.innerHTML = data.main.temp_max + " " + "°C";
    main.innerHTML = data.weather[0].main;

    sunrise.innerHTML =
      new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN").toLocaleUpperCase() + " IST";

    sunset.innerHTML =
      new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN").toLocaleUpperCase() + " IST";

    pressure.innerHTML = data.main.pressure + " " + "hPa";

    if (data.weather[0].main == "Clouds") {
      icon.src = "images/weather icons/cloudy (2).png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "images/weather icons/sun (1).png";
    } else if (data.weather[0].main == "Haze") {
      icon.src = "images/weather icons/haze (1).png";
    } else if (data.weather[0].main == "Heavy-rain") {
      icon.src = "images/weather icons/heavy.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "images/weather icons/mist.png";
    } else if (data.weather[0].main == "Partly Cloudy") {
      icon.src = "images/weather icons/partly-cloudy.png";
    } else if (data.weather[0].main == "Storm") {
      icon.src = "images/weather icons/storm.png";
    } else if (data.weather[0].main == "Sunny") {
      icon.src = "images/weather icons/sunny.png";
    } else if (data.weather[0].main == "Thunderstorm") {
      icon.src = "images/weather icons/thunderstorm.png";
    } else if (data.weather[0].main == "Fog") {
      icon.src = "images/weather icons/fog.png";
    } else if (data.weather[0].main == "Snow") {
      icon.src = "images/weather icons/snowy.png";
    } else if (data.weather[0].main == "Wind") {
      icon.src = "images/weather icons/wind (1).png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "images/weather icons/rain.png";
    }
  } catch (error) {
    console.log(error);
    alert("Something Went Wrong");
  }
}

button.addEventListener("click", () => {
  if (search.value == "") {
    alert("Please Enter City Name");
    return false;
  }
  weather((search.innerHTML = search.value));
});

document.getElementById("search").addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    if (search.value == "") {
      alert("Please Enter City Name");
      return false;
    }
    weather((search.innerHTML = search.value));
  }
});
