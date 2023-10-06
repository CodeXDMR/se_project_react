const latitude = 34.05;
const longitude = -118.24;
const APIkey = "2a00f5785e3550aa9c0ae2f553f31208";

const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
  `
  ).then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

const parseWeatherDataAPI = (data) => {
  console.log(data);
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export { getForecastWeather, parseWeatherDataAPI };
