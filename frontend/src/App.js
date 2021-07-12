import { LoginButton } from "./header";
//import { Perfil } from "./logedHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './login'
import BodyPage from "./bodyPage";
import SignUp from "./signUp";
import BodyPageLogged from "./bodyPageLogged";

function App() {


  return (

    <div >
      <Router>
        <Switch>
          <Route path="/" exact component={BodyPage} />
          <Route path="/logged" exact component={BodyPageLogged} />
          <Route path="/login" exact component={Login} />
          <Route path="/signUp" exact component={SignUp} />
        </Switch>
      </Router>
    </div>


  );
}

export default App;
