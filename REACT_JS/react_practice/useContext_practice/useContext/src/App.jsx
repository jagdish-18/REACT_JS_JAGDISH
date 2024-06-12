import { createContext } from "react"
import Com_C from "./Com_C"

const data = createContext()
const data1 = createContext()

function App() {

  const name = "jaggi"
  const gender = "male"

  return (
    <>
        <data.Provider value={name}>
          <data1.Provider value={gender}>
            <Com_C/>
          </data1.Provider>
        </data.Provider>
    </>
  )
}

export default App
export {data , data1}