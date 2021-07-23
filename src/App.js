import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/homepage/Homepage.jsx';
import Single from './components/single/Single.jsx';
import Single2 from './components/single/Single2.jsx';
import Single3 from './components/single/Single3.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/post/day1">
          <Single />
        </Route>
         <Route path="/post/day2">
          <Single2 />
        </Route>
        <Route path="/post/day3">
          <Single3 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
