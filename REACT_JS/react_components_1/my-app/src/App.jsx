import './App.css'
import Com_1 from './Com_1'
import Com_2 from './Com_2'
import Com_3 from './Com_3'


function App() {

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-[952px] h-[500px] border border-gray">
          <div className="flex">
            <Com_1/>
            <Com_2/>
            <Com_3/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
