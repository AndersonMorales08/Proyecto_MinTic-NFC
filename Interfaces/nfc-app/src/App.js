
// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { UserDashBoard } from './Pages/UserDashBoard';


function App() {
  return (
    <div className="App">
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
