import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Addhabit from './components/Addhabit'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import './App.css';

function App() {
  return (
    <div>
        

        <Router>
       
<Switch>
    <Route  exact path='/' component={Login}/>
    <Route  exact path='/signup' component={Signup}/>
    <Route  exact path='/home' component={Home}/>
    <Route  exact path='/login' component={Login}/>
    <Route  exact path='/addhabit' component={Addhabit}/>
</Switch>
</Router>

    </div>
  );
}

export default App;
