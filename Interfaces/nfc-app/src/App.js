
// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RegProducto } from './components/RegProducto';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/Home"} component={Home} />
          <Route component={NotFound} />
          {/* <RegProducto/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
