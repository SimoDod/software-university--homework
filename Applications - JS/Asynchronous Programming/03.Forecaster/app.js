function attachEvents() {
  let button = document
    .getElementById("submit")
    .addEventListener("click", onClick);
  let input = document.getElementById("location");
  let currentWeather = document.getElementById("current");
  let upcomingWeather = document.getElementById("upcoming");
  let divForecast = document.getElementById("forecast");

  let icon = {
    Sunny: "&#x2600;",
    "Partly sunny": "&#x26C5;",
    Overcast: "&#x2601;",
    Rain: "&#x2614;",
    Degrees: "&#176;",
  };
  //London : {code: 'london', name: 'London'}
  let currForecast;
  let locationUrl = "http://localhost:3030/jsonstore/forecaster/locations";
  let currLocationUrl = "http://localhost:3030/jsonstore/forecaster/";

  async function onClick() {
    let upcomingForecastDivCheck = document.getElementById(
      "upcomingForecastDiv"
    );
    let currForecastDivCheck = document.getElementById("currForecastDiv");

    if (upcomingForecastDivCheck !== null || currForecastDivCheck !== null) {
      upcomingForecastDivCheck.remove();
      currForecastDivCheck.remove();
    }

    divForecast.style.display = "inline";

    try {
      let response = await fetch(locationUrl);
      if (!response.ok) {
        throw new Error("Error");
      }
      let data = await response.json();
      currForecast = data.find((curr) => curr.name === input.value);
      if (!currForecast) {
        throw new Error("Error");
      }
      let [current, upcoming] = await Promise.all([
        fetch(`${currLocationUrl}today/${currForecast.code}`),
        fetch(`${currLocationUrl}upcoming/${currForecast.code}`),
      ]);
      if (!current.ok || !upcoming.ok) {
        throw new Error(`Error`);
      }
      //----> current forecast <----
      let dataCurrent = await current.json();

      let currForecastDiv = document.createElement("div");
      let symbolSpan = document.createElement("span");
      let conditionSpan = document.createElement("span");
      let forecastNameSpan = document.createElement("span");
      let forecastDegreesSpan = document.createElement("span");
      let forecastTypeSpan = document.createElement("span");

      currForecastDiv.id = "currForecastDiv";

      currForecastDiv.classList.add("forecasts");
      symbolSpan.setAttribute("class", "condition symbol");
      conditionSpan.classList.add("condition");
      forecastNameSpan.classList.add("forecast-data");
      forecastDegreesSpan.classList.add("forecast-data");
      forecastTypeSpan.classList.add("forecast-data");

      symbolSpan.innerHTML = icon[dataCurrent.forecast.condition];
      forecastNameSpan.textContent = dataCurrent.name;
      forecastDegreesSpan.innerHTML = `${dataCurrent.forecast.low}${icon.Degrees}/${dataCurrent.forecast.high}${icon.Degrees}`;
      forecastTypeSpan.textContent = dataCurrent.forecast.condition;

      conditionSpan.appendChild(forecastNameSpan);
      conditionSpan.appendChild(forecastDegreesSpan);
      conditionSpan.appendChild(forecastTypeSpan);
      currForecastDiv.appendChild(symbolSpan);
      currForecastDiv.appendChild(conditionSpan);
      currentWeather.appendChild(currForecastDiv);

      //----> upcoming forecast <----
      let dataUpcoming = await upcoming.json();

      let upcomingForecastDiv = document.createElement("div");
      upcomingForecastDiv.id = "upcomingForecastDiv";
      upcomingForecastDiv.classList.add("forecast-info");

      dataUpcoming.forecast.forEach((x) => {
        let upcomingSpan = document.createElement("span");
        let upSymbolSpan = document.createElement("span");
        let upDegreesSpan = document.createElement("span");
        let upTypeSpan = document.createElement("span");

        upcomingSpan.classList.add("upcoming");
        upSymbolSpan.classList.add("symbol");
        upDegreesSpan.classList.add("forecast-data");
        upTypeSpan.classList.add("forecast-data");

        upSymbolSpan.innerHTML = icon[x.condition];
        upDegreesSpan.innerHTML = `${x.low}${icon.Degrees}/${x.high}${icon.Degrees}`;
        upTypeSpan.textContent = x.condition;

        upcomingSpan.appendChild(upSymbolSpan);
        upcomingSpan.appendChild(upDegreesSpan);
        upcomingSpan.appendChild(upTypeSpan);

        upcomingForecastDiv.appendChild(upcomingSpan);
      });

      upcomingWeather.appendChild(upcomingForecastDiv);
    } catch (error) {
      console.log(error);
    }
  }
}

attachEvents();
