import Home from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Registration from "./auth-form-components/Registration/Registration";

const App = () => {
  return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='signup' component={Registration}/>
            <Route path='login' component={Login}/>
          </Switch>
        </Router>
      </div>
  );
};

export default App;