// import { useState } from "react"
// import { Link } from "react-router-dom"
// import ItemCount from "../ItemCount/ItemCount"

// const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

//     const handleOnAdd = (quantity) => {
//         const productToAdd = {
//             id, name, price, quantity
//         }
//         console.log(productToAdd)
//     }

//     return (
//         <article className="CardItem">
//             <header className="Header">
//                 <h2 className="ItemHeader">
//                     {name}
//                 </h2>
//             </header>
//             <picture>
//                 <img src={img} alt={name} className="ItemImg"/>
//             </picture>
//             <section>
//                 <p className="Info">
//                     Categoria: {category}
//                 </p>
//                 <p className="Info">
//                     Descripción: {description}
//                 </p>
//                 <p className="Info">
//                     Precio: {price}
//                 </p>
//             </section>           
//             <footer className='ItemFooter'>
//                 <ItemCount onAdd={handleOnAdd} stock={stock} />
//             </footer>
//         </article>
//     )
// }

// export default ItemDetail

// const Count = ({onAdd}) => {
//     const [count, setCount] = useState(0)

//     return(
//         <button onClick={() => onAdd(count)}>agregar al car</button>
//     )
// }

import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../Notification/Notification'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

//const { addItem } = useContext(CartContext)
//const handleOnAdd = (quantity) => {
    //     const productToAdd = {
    //         id, name, price, quantity
    //     }

    //     addItem(productToAdd)
    //     console.log(productToAdd)
    // }
    
        const [quantityToAdd, setQuantityToAdd] = useState (0)

        const { addItem } = useContext(CartContext)
        const { setNotification } = useContext (NotificationContext)

        const handleOnAdd = (quantity) => {
            setQuantityToAdd(quantity)
            
            const productToAdd = {
                id, name, price, quantity
            }
            addItem(productToAdd)
            setNotification(/* 'success',  */`Se agrego correctamente ${quantity} ${name}`)
        }
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>
        </article>
    )
}

export default ItemDetail