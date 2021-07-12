import { LoginButton } from "./header";
import { Perfil } from "./logedHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './login'
import BodyPage from "./bodyPage";
import SignUp from "./signUp";

function App() {
  return (

    <div id="usuariosinlogear">
      <Router>
        <LoginButton />
        <Switch>
          <Route path="/" exact component={BodyPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signUp" exact component={SignUp} />
        </Switch>
      </Router>
      <Perfil />


    </div>


  );
}

export default App;
