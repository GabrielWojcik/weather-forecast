import { Sun } from "../Sun";
import { Temperature } from "../temperature";

interface Data {
    city: string
    temp: string
    description: string
    date: string
    rain: string
    sunrise: number
    sunset: number
    forecast: unknown
}

export function Body( props: Data ) {
    return(
        <div className="flex flex-col gap-2 items-center m-5 p-5 text-white border-2 rounded lg:w-2/4 ">
            <h1 className="font-bold">
                Previsão do Tempo
            </h1>
            <p>
                {props.city}
            </p>
            
            <p>
                {props.temp}°
            </p>
            
            <p>
                {props.description}
            </p>
            
            <p>
                {props.date}
            </p>
            <p>
                {props.rain} Volume de chuva em mm na última hora
            </p>
            
            <div className="flex justify-start w-full">
                <Sun 
                    sunrise={props.sunrise || 0}
                    sunset={props.sunset || 0}
                />
            </div>

            <div className="w-full">
                <Temperature data={props.forecast as undefined} />
            </div>
        </div>
    )
}