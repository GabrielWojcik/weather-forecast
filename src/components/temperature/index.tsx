import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key, useState, useEffect } from "react"
import rain from "../../assets/cloud/rain.svg"
import tempoNublado from "../../assets/cloud/cloudly_day.svg"
import Chuvasesparsas from "../../assets/cloud/fog.svg" 
import Loading from "../../utils/loading/loading"
import Calendar from "../../assets/icons/calendar_month_FILL0_wght400_GRAD0_opsz24.svg"

interface PropsWeek {
    data: any | undefined
}

interface WeatherImages {
    [key: string]: string;
}

export function Temperature( props: PropsWeek ) {
    const [activeLoading, setActiveLoading] = useState<boolean>(false)

    const weatherImages: WeatherImages = {
        'Chuva': rain,
        'Tempo nublado': tempoNublado,
        'Chuvas esparsas': Chuvasesparsas,
    };

    useEffect(() => {
        if (props.data === undefined) {
            setActiveLoading(true) 
        } else {
            setActiveLoading(false)
        }
        
    },[props.data])

    return(
        <>
            <div className="flex items-center gap-2 my-2">
                <img src={Calendar} alt="calendar"/>
                <h1>Previsão para 10 dias</h1>
            </div>
            <div className="w-full h-1 bg-white rounded"></div>
            <div className="flex justify-center items-center">
                {
                    activeLoading ? (
                        <Loading />
                    ) : (
                        props.data?.map((value: {
                            description: string
                            weekday: ReactNode
                            date: Key | null | undefined, min: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined 
                        }) => {
                            const imageSrc = weatherImages[value.description];
    
                            return(
                            <div className="flex flex-col flex-wrap justify-center items-center" key={value.date}>
                                {imageSrc && <img src={imageSrc} alt={value.description} />}
                                <p>
                                    {value.weekday}
                                </p>
                                <p>
                                    {value.min}°
                                </p>
                            </div>
                            )
                        })
                    )
                }
            </div>
        </>
    )
}