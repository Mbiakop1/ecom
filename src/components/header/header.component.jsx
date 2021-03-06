import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CardIcon from '../card-icon/card-icon.component';
import CartDropdown from '../cart dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrrentUser } from '../../redux/user/user.selector';


const Header = ({ currentUser, hidden }) => (  
    <div className= 'header'>
    <Link to='/'>
      <Logo className='logo-container'/>
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>SHOP</Link>
    <Link className='option' to='/contact'>CONTACT</Link>
      {
        currentUser ? 
         <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
         :
         <Link className='option' to='/signin'>SIGN IN</Link>
      }

      <CardIcon/>
    </div>
   { 
    hidden ? null : 
    <CartDropdown/>
  }
    </div>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrrentUser,
  hidden: selectCartHidden
});



export default connect(mapStateToProps)(Header);