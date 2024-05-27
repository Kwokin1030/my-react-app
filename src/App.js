// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import Hello from "./components/hello.js";
import State from "./components/state.js";
import Map from "./components/Map.js";
import ShowPhoneNumber from "./components/ShowPhoneNumber.js";

function App() {
  // const userInput = "1234567890";
  const[num, setNum] = useState("1234567890");

  return (
    <div className="App">
      <Hello/>
      <br/>
      <State/>
      <Map/>
      <br/><br/><br/>
      {/* <ShowPhoneNumber phoneNum={userInput}/> */}
      <input id="myText" type="text" value={num} onChange={(e) => setNum(e.target.value)}/>
      <ShowPhoneNumber phoneNum={num}/>
    </div>
  );
}

export default App;