import Identity from "./detail";
import Test from "./test";
import "./test.css";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";

const App = () => {
  return ( 
    <Router>
        <div className="app">
            <Switch>
              <Route exact path="/test"><Test /></Route>
              <Route exact path=""><Identity /></Route>
            </Switch>
        </div>
    </Router>
   );
}
 
export default App;