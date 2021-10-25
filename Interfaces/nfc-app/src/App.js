
// import './App.css';
import { Home } from './Pages/Home';
import { UserDashBoard } from './Pages/UserDashBoard';
import { sesionState } from './components/firebaseconf';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { RegistroUsuario } from './components/RegistroUsuario';



export function App() {

  function sesionControl() {
    let nav =<Home />
    if (sesionState == true) {
        nav = <UserDashBoard />
    }
    else {
        nav = <Home />
    }
    return nav
}

  
  return (
    <div className="App">
      {
        sesionControl()
      }
      {/* <RegistroUsuario/> */}
      <BrowserRouter>
        <Switch>
          <Route exact path={"/home"} component={Home} />
          <Route exact path={"/user"} component={UserDashBoard} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
