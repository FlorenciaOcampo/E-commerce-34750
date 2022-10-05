import { useState, useEffect } from "react"
import { getProducts } from "../AsyncMock/AsyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../AsyncMock/AsyncMock"

const ItemListContainer = (props)=> {
    const [products, setProducts]= useState([])
    const {categoryId} = useParams()

    
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