import "./App.css";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import {AuthPage, HomePage, FourOhFourPage }from './pages' 
import Navbar from "./components/Navbar";


function App() {
  return (
      <div className="App">
        <Navbar />
        <Switch>
  <Route exact path={`/login`} component={AuthPage} />
  <ProtectedRoute exact path={`/`} component={HomePage} />
  <Route path={`/*`} component={FourOhFourPage} />
</Switch>
      </div>
  );
}

export default App;
