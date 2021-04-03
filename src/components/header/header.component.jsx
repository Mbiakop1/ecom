import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';


const Header = ({ currentUser }) => (  
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
    </div>
    </div>
);
const mapStateToProps = state => ({
  currentUser:state.user.currentUser
});



export default connect(mapStateToProps)(Header);