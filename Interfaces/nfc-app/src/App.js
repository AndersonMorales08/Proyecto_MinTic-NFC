
// import './App.css';
import { ActProducto } from './components/ActProducto';
import { ActUsuario } from './components/ActUsuario';
import { BusquedaProducto } from './components/BusquedaProducto';
import { BusquedaVentas } from './components/BusquedaVentas';
import { Caroussel } from './components/Caroussel';
import { FirstSection } from './components/FirstSection';
import { FooterSection } from './components/FooterSection';
import { ListaUsuarios } from './components/ListaUsuarios';
import { NabBarLogin } from './components/NabBarLogin';
import { NavBar } from './components/NavBar';
import { RegProducto } from './components/RegProducto';
import { RegVenta } from './components/RegVenta';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Home} from './Pages/Home';
import {NotFound} from './Pages/NotFound';
import {UserInterface} from './Pages/UserInterface';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path={"/Home"} component={Home}/>
      <Route exact path={"/User"} component={UserInterface}/>
      <Route component={NotFound}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
