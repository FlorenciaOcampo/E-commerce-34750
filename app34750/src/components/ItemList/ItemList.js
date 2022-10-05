import { Link } from "react-router-dom"

const ItemList =({ products }) => {

            return (
                <ul>
                { products.map(product => 
                    <Link to={`/detail/${product.id}`} key={product.id}>
                        <li> 
                        {product.name}
                        </li>
                    </Link>)}
                </ul>
            )

}

export default ItemList