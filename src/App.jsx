import Home from "./pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Registration from "./AuthFormComponents/Registration/Registration";
import {AuthProvider} from "./contexts/AuthContext";
import Login from "./AuthFormComponents/Login/Login";

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/signup' component={Registration}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </AuthProvider>
        </Router>
    )
};

export default App;