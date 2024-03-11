import SunImg  from "../../assets/cloud/clear_day.svg"

export function Sun() {
    return(
        <div className="">
            <div className="flex gap-3 items-center">
                <div className="flex items-center w-36 gap-2">
                    <p className="w-36" >Nascer do sol</p>
                    <img src={SunImg} alt="sun" className="w-8 h-8" />
                </div>
                <div>
                    05:50
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex items-center w-36 gap-2">
                    <p className="w-36">Por do sol</p>
                    <img src={SunImg} alt="sun" className="w-8 h-8" />
                </div>
                <div>
                    18:50
                </div>
            </div>
        </div>
    )
}