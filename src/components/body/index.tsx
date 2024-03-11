import { Sun } from "../Sun";
import { Temperature } from "../temperature";

export function Body() {
    return(
        <div className="flex flex-col gap-2 items-center m-5 p-5 text-white border-2 rounded w-2/4 ">
            <h1 className="font-bold">
                Previsão do Tempo
            </h1>
            <p>
                ARAUCÁRIA
            </p>
            
            <p>
                24 °
            </p>
            
            <p>
                Nublado - Dia
            </p>
            
            <p>
                90% Probabilidade de chuva
            </p>

            <Sun />
            <Temperature />
        </div>
    )
}