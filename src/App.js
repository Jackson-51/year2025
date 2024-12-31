import { useState } from "react";
import Identity from "./detail";
import Test from "./test";
import "./test.css";

const App = () => {
  const [currentcomp, setCurrentcomp] = useState("A");

  const changeToA = () => setCurrentcomp("A");
  const changeToB = () => setCurrentcomp("B");

  return ( 
        <div className="app">
          {(currentcomp === "A") ? <Identity changeToB={changeToB} /> : <Test changeToA={changeToA}/> }
        </div>
   );
}
 
export default App;