import { useState } from "react";
import "../src/index.css";

function App() {

const [status, setStatus] = useState(true);

function reverse(){
  setStatus(!status);
}

  return (
    <div className="App">
      <button onClick={reverse}>P</button>
      <div className={status? "circle" : "dontShow"}></div>
    </div>
  );
}

export default App;
