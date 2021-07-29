import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Direccion from './components/Direccion'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route exact path="/direccion" component={Direccion} />
    
      </Router>
    </div>
  );
}

export default App;
