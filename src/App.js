import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState(false);
  const [weatherData, setWeatherData] = useState("");
  console.log("rerender", search);
  async function fetchDetails(city) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=fe4feefa8543e06d4f3c66d92c61b69c`
      );
      if (response.ok) {
        console.log(response, " respon**");
        const data = await response.json();
        console.log(typeof data, "abc", data);
        const { lat, lon } = data[0];
        const weatherResp = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
        );
        const weatherData = await weatherResp.json();
        console.log(weatherData, " wea");
        setWeatherData(weatherData);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function onSearch(val) {
    await fetchDetails(val);
    console.log(val);
    setSearchText(val);
    setSearch(true);
    console.log(val);
  }
  return (
    <div className="App">
      {search == false && <Card onSearch={onSearch} />}
      {search == true && (
        <Weather
          weatherData={weatherData}
          setSearch={setSearch}
          searchText={searchText}
        />
      )}
    </div>
  );
}

export default App;
