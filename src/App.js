import './App.css';
import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect  } from 'react-router-dom';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';

import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { setCurrentUser } from './redux/user/user.action'
import { selectCurrrentUser} from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

import CheckoutPage from './pages/checkout/checkout.component';








class App extends React.Component {

 unsubscribeFromAuth = null

  componentDidMount() {

    const  { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });

      } else {
        setCurrentUser({userAuth});
      };
    });
  }

  componentWillUnmount(){

    this.unsubscribeFromAuth();
  }

 render() {
  return (
    <div>
    <Header />
     <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route exact path='/checkout' component={CheckoutPage}/>
     <Route exact path='/signin' render =
        {() => this.props.currentUser ?
         (<Redirect to='/' />)  
         : (<SignInAndSignUpPage/>)
        }
      />

     <Route  path='/shop' component={ShopPage}/>
     </Switch>
    </div>
  )
 }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrrentUser,

})
const mapDispatchToProps = dispatch =>({
setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps )(App);
