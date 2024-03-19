import axios from "axios";
import { Body } from "./components/body";
import { useEffect, useState } from "react";
import IPv4Service from "./services/userIp/ip";
import Rain from "../src/assets/video/rain.gif";
import Sun from "../src/assets/video/sun.gif";
import Storm from "../src/assets/video/storm.gif";
import CloudyWeather from "../src/assets/video/cloudy-weather.gif"

interface Data {
  city: string
  temp: string
  description: string
  date: string
  sunrise: number
  sunset: number
  rain: string
  forecast: {
      date: string
      max: number
      min: number
      weekday: string
      rain: number
      rain_probability: number
      condition: string
      description: string
  }
}

function App() {

  const weatherImages: { [key: string]: string } = {
    'Sol': Sun,
    'Tempo nublado': CloudyWeather,
    'Chuva': Rain,
    'Tempestade': Storm,
    'Tempestades isoladas': Storm,
  };
  const [useData, setData] = useState<Data>()
  const [weatherDescription, setWeatherDescription] = useState<string | null>(null);
  const [ipv4, setIpv4] = useState<string | null>('');

  useEffect(() => {
    const getUserIp = async () => {
      const userIP = await IPv4Service.getIPv4();
      setIpv4(userIP);
    };
    getUserIp();
  }, []);

  async function requestData() {
    await axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=5d08c842&user_ip=${ipv4}`)
      .then(function (response) {
        setData(response.data.results)
        setWeatherDescription(response.data.results.description);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    requestData();
  }, []);

  const backgroundImageUrl = weatherDescription ? weatherImages[weatherDescription] : null;

  return (
      <div className="relative flex justify-center items-center bg-blue-500 h-screen">
        {backgroundImageUrl && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={backgroundImageUrl}
              alt={weatherDescription || "Background"}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-center justify-center relative z-10">
          <Body
            city={useData?.city || ""}
            temp={useData?.temp || ""} 
            description={useData?.description || ""} 
            date={useData?.date || ""} 
            rain={useData?.rain || ""}
            sunrise={useData?.sunrise || 0}
            sunset={useData?.sunset || 0}     
            forecast={useData?.forecast}     
          />
        </div>
      </div>
  );
}

export default App;
