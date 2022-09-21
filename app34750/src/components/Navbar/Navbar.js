import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Cart from './Cart'
import './Navbar.css'
const Navbar = ()=> {
    return(
        <nav>
            <div>
                <h1> Mega Tecnología</h1>
            </div>
            <ul>
                <li><a href='#'>Celulares</a></li>
                <li><a href='#'>Tablets</a></li>
                <li><a href='#'> Computadoras</a></li>
                <Cart />
            </ul>
        </nav>
    )
}
export default Navbar