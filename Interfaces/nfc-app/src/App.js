
// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { guardarDatabase } from './components/firebaseconf';

function App() {


  const usuario = {
    nombre : 'Pedro',
    edad : 30

  }
  //guardar en base de datos 

  guardarDatabase('usuarios', usuario)

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/Home"} component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
