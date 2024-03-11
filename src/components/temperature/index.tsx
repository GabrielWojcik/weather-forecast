import rain from "../../assets/cloud/rain.svg"

export function Temperature() {
    return(
        <>
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <img src={rain} alt="rain" />
                    <p>24°</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={rain} alt="rain" />
                    <p>24°</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={rain} alt="rain" />
                    <p>24°</p>
                </div>
                
            </div>
        </>
    )
}