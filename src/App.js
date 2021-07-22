import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/homepage/Homepage.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
