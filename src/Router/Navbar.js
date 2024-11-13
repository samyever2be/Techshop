import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { cartContext } from '../App';
const Navbar = ()=>{
    const {cart} = useContext(cartContext);
    return(
        <div>
            <>
            <ul>
                <li><Link to="/techshop">Home</Link></li>
                <li><Link to="/techshop/shop">Shop</Link></li>
                <li><Link to="/techshop/cart">
                {cart.length > 0 ? (
                <span className='cart-count'>{cart.length}</span>
                ) : ""
                }
                <FontAwesomeIcon icon={faCartShopping} />View Cart</Link></li>
                <li><Link to="/techshop/contact">contact</Link></li>
            </ul>
            </>
        </div>
    )
}

export default Navbar;
