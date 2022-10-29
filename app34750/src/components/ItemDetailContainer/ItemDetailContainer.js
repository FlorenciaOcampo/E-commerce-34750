import ItemDetail from "../ItemDetail/ItemDetail"
import {useState, useEffect } from "react"
//import { getProduct } from "../AsyncMock/AsyncMock"
import { useParams } from "react-router-dom"
import { getDoc,doc } from 'firebase/firestore'
import { db } from "../../services/firebase"

const ItemDetailContainer = ( ) => {  
    const [product, setProduct] = useState()
    const [loading, setLoading]= useState(true)
    const {productId} = useParams()
    
    useEffect(() => { const docRef = doc(db, 'products', productId)

    //     getProduct(productId).then(response =>{
    //         setProduct(response)
    //     }).finally (()=>{
    //         setLoading(false)
    //     }) 
    getDoc(docRef).then(doc => {
        const data = doc.data()
        const productAdapted = { id: doc.id,...data}
        setProduct(productAdapted)
    }).catch(error =>{
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })
},[productId])

    // console.log (fetch(''))
    // console.log(product)

    if (loading) {
        return <h1>Cargando...</h1>
    }
return(
    <div>
        <ItemDetail {...product}/>
    </div>)
}
export default ItemDetailContainer