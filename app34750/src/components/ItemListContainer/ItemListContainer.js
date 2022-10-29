import { useState, useEffect } from "react"
import { getProducts } from "../AsyncMock/AsyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../AsyncMock/AsyncMock"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = (props)=> {
    const [products, setProducts]= useState([])
    const {categoryId} = useParams()
    const [loading,setLoading] = useState(true)
    

const collectionRef = categoryId 
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')


    getDocs(collectionRef).then(response => {
        console.log(response)

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
    }).finally(()=> {
        setLoading(false)
    })
    


    useEffect(() => { 
        if(!categoryId){
            getProducts().then(res => {
                setProducts(res)
            })
        } 
        else {
            getProductsByCategory(categoryId).then(res => {
                setProducts(res)
            })
        }
    }, [])


    return (
        <>
            <h1>{props.greeting}</h1>
            
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer