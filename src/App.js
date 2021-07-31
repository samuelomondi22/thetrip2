import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/homepage/Homepage.jsx';
import Single from './components/single/Single.jsx';
import Single2 from './components/single/Single2.jsx';
import Single3 from './components/single/Single3.jsx';
import Single4 from './components/single/Single4.jsx';
import Single5 from './components/single/Single5.jsx';
import Single6 from './components/single/Sinigle6.jsx';
import Single7 from './components/single/Single7.jsx';
import Single8 from './components/single/Single8.jsx';
import Single9 from './components/single/Single9.jsx';
import Single10 from './components/single/Single10.jsx';
import Single11 from './components/single/Single11.jsx';

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
        <Route path="/post/day4">
          <Single4 />
        </Route>
        <Route path="/post/day5">
          <Single5 />
        </Route>
        <Route path="/post/day6">
          <Single6 />
        </Route>
        <Route path="/post/day7">
          <Single7 />
        </Route>
        <Route path="/post/day8">
          <Single8 />
        </Route>
        <Route path="/post/day9">
          <Single9 />
        </Route>
        <Route path="/post/day10">
          <Single10 />
        </Route>
         <Route path="/post/day11">
          <Single11 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
