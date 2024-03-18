import { Oval } from "react-loader-spinner";


export default function Loading() {
    return(
        <div className="flex flex-col justify-center items-center">
            <p>Carregando...</p>
            
            <Oval
            visible={true}
            height="30"
            width="30"
            color="#fff"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
         
        </div>
    )
}