// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
  const purple = "#8e44ad";
  const [bg, setBg]  = useState(purple);
  const [name, setName] = useState(purple);
  const bgChange = () => {
    let newBg = "#34495e";
    if(bg===purple){
      setBg(newBg);
      setName(newBg);
    }
    if (bg===newBg){
      setBg("black")
      setName("black");
    }
    if(bg==="black"){
      setBg(purple);
      setName(purple);
    }
  }
  return (
    <div className="App"style={{background: bg}} >
      <button style={{color:bg}} onClick ={bgChange}>{name}</button>
    </div>
  );
}

export default App;
