import "./App.css";
import Com_1 from "./Com_1";
import Com_2 from "./Com_2";
import Com_3 from "./Com_3";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[1100px] h-[550px]">
          <div className="flex">
            <Com_1 name='Alice Mayer' biss='Photographer'/>
            <Com_2 title='Culinary' heading='Cheat day insprirations'/>
            <Com_3 name='Billy Cullen' heading='Web developer'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
