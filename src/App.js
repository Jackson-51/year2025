import Home from './homepage';
import About from './about';
import Portfolio from './portfolio';
import './portfolio.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom/cjs/react-router-dom.min';
import Service from './service';
import Contact from './contact';

const App = () => {
  return ( 
    <Router>
      <div className="app">
        <Portfolio />
        <Switch>
          <Redirect exact from="/" to="/contact"/>
          <Route path="/home"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/service"><Service /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
      </div>
    </Router>
   );
}
 
export default App;