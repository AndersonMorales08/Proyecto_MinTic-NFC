
// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RegProducto } from './components/RegProducto';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import { RegVenta } from './components/RegVenta';
import { BusquedaVentas } from './components/BusquedaVentas';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path={"/Home"} component={Home} /> */}
          {/* <Route component={NotFound} /> */}
          <BusquedaVentas/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
