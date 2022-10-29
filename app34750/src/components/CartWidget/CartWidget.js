import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import cart from '../Navbar/Cart';

const CartWidget = ()=> {
/* 
    const { GetTotalQuantity } = useContext(CartContext)
    const totalQuantity = GetTotalQuantity()




    return (
        <Link to='/cart' className="CartWidget">

        <div>
            <AiOutlineShoppingCart/>
        </div>{totalQuantity}
        </Link>
    ) */
    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return(
        <Link to='/cart' className="CartWidget">
            <div>
            <AiOutlineShoppingCart/>
            </div>
            {totalQuantity}
        </Link>
    );
};



export default CartWidget