import { Body } from "./components/body"
import Rain from "../src/assets/video/rain.gif"
import Sun from "../src/assets/video/sun.gif"
import Storm from "../src/assets/video/storm.gif"
import TempContextProvider from "../src/context/temp.jsx"
function App() {

  return (
    <TempContextProvider>
      <div className="relative flex justify-center items-center bg-blue-500 h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={Rain} alt="Rain" className="w-full h-full object-cover" />
        </div>
        
        <div className="flex items-center justify-center relative z-10">
          <Body />
        </div>

      </div>
    </TempContextProvider>
  )
}

export default App
