import './App.css';
import React from 'react'
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route,  } from 'react-router-dom';

import   HatsPage from './pages/hatsPage/hatsPage.component';






function App() {
  return (
    <div>
     <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route  path='/hats' component={HatsPage}/>
     </Switch>
    </div>
  );
}

export default App;
