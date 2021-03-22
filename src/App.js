import './App.css';
import React from 'react'
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route,  } from 'react-router-dom';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

import   HatsPage from './pages/hatsPage/hatsPage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';






class App extends React.Component {
 constructor(){
   super();

   this.state = {
     currentUser: null
   }

 }

 unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state)
        });

      } else {
        this.setState({ currentUser: userAuth});
      };
    });
  }

  componentWillUnmount(){

    this.unsubscribeFromAuth();
  }

 render() {
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
     <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route path='/signin' component={SignInAndSignUpPage}/>
     <Route  path='/hats' component={HatsPage}/>
     <Route  path='/shop' component={ShopPage}/>
     </Switch>
    </div>
  )
 }
}

export default App;
