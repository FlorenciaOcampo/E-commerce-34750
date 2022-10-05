import {useState, useEffect } from "react"
import { getProduct } from "../AsyncMock/AsyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ( ) => {  
    const [product, setProduct] = useState()
    const [loading, setLoading]= useState(true)
    const {productId} = useParams()
    
    useEffect(() => {
        getProduct(productId).then(response =>{
            setProduct(response)
        }).finally (()=>{
            setLoading(false)
        })
    },[])

    console.log (fetch(''))
    console.log(product)

    if (loading) {
        return <h1>Cargando...</h1>
    }
return(
    <div>
        <h1>Detalles de Libro</h1>
        <div>{product.name}</div>
        <p>{product.price}</p>
        <img src={product.img}/>
    </div>)}
    export default ItemDetailContainer