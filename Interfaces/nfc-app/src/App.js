
// import './App.css';
import { Home } from './Pages/Home';
import { UserDashBoard } from './Pages/UserDashBoard';
import { sesionState } from './components/firebaseconf';




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
    </div>
  );
}

export default App;
