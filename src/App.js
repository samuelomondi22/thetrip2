import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/homepage/Homepage.jsx';
import Single from './components/single/Single.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
