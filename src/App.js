import './App.css';
import React from 'react'
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route,  } from 'react-router-dom';

import   HatsPage from './pages/hatsPage/hatsPage.component';
import ShopPage from './pages/shop/shop.component'






function App() {
  return (
    <div>
     <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route  path='/hats' component={HatsPage}/>
     <Route  path='/shop' component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;