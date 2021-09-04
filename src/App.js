import Home from "./components/home/Home";
import About from "./components/about/About";

import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <HashRouter>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/about/' component={About} />
      </Switch>
    </HashRouter>
  );
};
export default App;
