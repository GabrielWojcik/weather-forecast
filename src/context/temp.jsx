import { createContext, useState } from "react";

export const TempContext = createContext()

export default function TempContextProvider(props) {
    const [climate, setClimate] = useState([]);


    return (
        <TempContext.Provider
            value={{climate, setClimate}}>
            {props.children}
        </TempContext.Provider>
    )
}