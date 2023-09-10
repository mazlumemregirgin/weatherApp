const searchButton = document.querySelector(".search-button");
const weatherImage = document.querySelector(".weather-image");
const temp = document.querySelector(".temperature");
const desc = document.querySelector(".description");
const humidity = document.querySelector(".humidity-level");
const windSpeed = document.querySelector(".speed-level");

const APIKey = "a91f2d9bcb60a2c1f63f51744db96a9b";

searchButton.addEventListener("click", show);

function show() {
  const userLocation = document.querySelector("#location-input").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.cod === "404") {
        weatherImage.src = "images/404.png";
        temp.innerHTML ="";
        desc.innerHTML = "İnvalid Result";
        humidity.innerHTML ='%';
      windSpeed.innerHTML ="Km/h";
      } else temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      desc.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      windSpeed.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

      switch (json.weather[0].main) {
        case "Clear":
          weatherImage.src = "images/clear.png";
          break;

        case "Rain":
          weatherImage.src = "images/rain.png";
          break;

        case "Snow":
          weatherImage.src = "images/snow.png";
          break;

        case "Clouds":
          weatherImage.src = "images/cloud.png";
          break;

        case "Haze":
          weatherImage.src = "images/mist.png";
          break;

        default:
          weatherImage.src = "";
      }
    });
}
