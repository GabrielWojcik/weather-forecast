import axios from "axios";
import { Sun } from "../Sun";
import { useEffect, useState } from "react";
import { Temperature } from "../temperature";
import {  getUserLocation } from "../userLocation";
import IPv4Service from "../../services/userIp/ip";

interface Data {
    city: string
    temp: string
    description: string
    date: string
    sunrise: number
    sunset: number
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

export function Body() {

    const [useData, setData] = useState<Data>()
    const [userLat, setUserLat] = useState<number>(0)
    const [userLng, setUserLng] = useState<number>(0)

    const [ipv4, setIpv4] = useState<string | null>('');

    useEffect(() => {
      const getUserIp = async () => {
        const userIP = await IPv4Service.getIPv4()
        setIpv4(userIP)
      }
      getUserIp()
    }, []);

    getUserLocation()
    .then(({ lat, lng }) => {
        setUserLat(lat)
        setUserLng(lng)
    })
    .catch(error => {
        console.error('Erro ao obter a localização:', error);
    });


    async function requestData() {
     await axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=5d08c842&user_ip=${ipv4}`)
        .then(function (response) {
            setData(response.data.results)
        })
        .catch(function (error) {
            console.error(error)
        })
    }

    useEffect(() => {
        requestData()
    },[])

    useEffect(() => {
        getUserLocation()
    },[userLat, userLng])

    return(
        <div className="flex flex-col gap-2 items-center m-5 p-5 text-white border-2 rounded w-2/4 ">
            <h1 className="font-bold">
                Previsão do Tempo
            </h1>
            <p>
                {useData?.city}
            </p>
            
            <p>
                {useData?.temp}°
            </p>
            
            <p>
                {useData?.description}
            </p>
            
            <p>
                {useData?.date}
            </p>
            <p>
                90% Probabilidade de chuva
            </p>
            
            <div className="flex justify-start w-full">
                <Sun 
                    sunrise={useData?.sunrise || 0}
                    sunset={useData?.sunset || 0}
                />
            </div>

            <div className="w-full">
                <Temperature data={useData?.forecast} />
            </div>
        </div>
    )
}