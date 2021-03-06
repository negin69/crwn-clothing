import  React  from 'react';
import  "../header/header.styles.scss";
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.1 crown.svg';
import { auth } from './../../firebase/firebase.utils';
import CartIcon from './../cart-icon/cart-icon.component';
import {connect} from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from './../../redux/user/user.selectors';
const Header = ({currentUser , hidden}) => {
    return ( 
        <div className="header">
         <Link className="logo-container"  to="/">
         <Logo className="logo"  />
         </Link>
         <div className="options">
         <Link className="option" to="/shop">
          Shop
          </Link>

          <Link className="option" to="/contact">
         Contact
          </Link>

          {currentUser  ?  (<div className="option" onClick={ ()  => auth.signOut () } > Sign Out</div> ) :
       (<Link className="option" to="/signin"> Sign In</Link>  ) 
        }

        <CartIcon  />
         </div>
         {
              hidden ? null : <CartDropdown />
         }
     
        </div>
     );
}


// const  mapStateToProps= state => ({
//   currentUser : state.user.currentUser
// })

const  mapStateToProps= createStructuredSelector  ({
  currentUser : selectCurrentUser ,
   hidden : selectCartHidden
});

export default connect (mapStateToProps)(Header);