import SunImg  from "../../assets/cloud/clear_day.svg"

interface PropsSun{
    sunrise: number
    sunset: number
}

export function Sun(props: PropsSun) {
    return(
        <div className="">
            <div className="flex gap-3 items-center">
                <div className="flex items-center w-36 gap-2">
                    <p className="w-36" >Nascer do sol</p>
                    <img src={SunImg} alt="sun" className="w-8 h-8" />
                </div>
                <div>
                    <p>
                        {props.sunrise}
                    </p>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex items-center w-36 gap-2">
                    <p className="w-36">Por do sol</p>
                    <img src={SunImg} alt="sun" className="w-8 h-8" />
                </div>
                <div>
                    <p>
                        {props.sunset}
                    </p>
                </div>
            </div>
        </div>
    )
}