import About from "./About";
import "./App.css";
import Navbar from "./Navbar";
// import TextForm from "./TextForm";

function App() {
  return (
    <>
     <Navbar title="taxtutils" About="LetsAbout"/> 
     <div className="container my-3">
      {/* <TextForm heading="Enter the text to analyze below"/> */}
      <About/>
     </div>
    </>
  );
}

export default App;
