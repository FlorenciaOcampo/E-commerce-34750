import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider  = ({children}) => {
    /* const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    console.log(cart)

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])

    const addItem = (productToAdd) => {
        console.log('additem')
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
        console.log('ya esta en el carrito')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    useEffect(() => {
        const totalQuantity = getTotalQuantity()
        setTotalQuantity(totalQuantity)
      }, [cart])

      useEffect(() => {
        const total = getTotal()
        setTotal(total)
      }, [cart])

     const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const getTotal = () => {
        let accu = 0
  
        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })
  
        return accu
    }
    
    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem,getTotalQuantity, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    ) */
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart([...cart, productToAdd])
        } else {
          console.log('ya esta agregado')
          const cartUpdated = cart.map(prod => {
            if(prod.id === productToAdd.id) {
              const productUpdated = {
                ...prod,
                quantity: productToAdd.quantity
              }

              return productUpdated
            } else {
              return prod
            }
          })

          setCart(cartUpdated)
        }
      }
    
      const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
      }
    
      const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
      }

      useEffect(() => {
        const totalQuantity = getTotalQuantity()
        setTotalQuantity(totalQuantity)
      }, [cart])

      useEffect(() => {
        const total = getTotal()
        setTotal(total)
      }, [cart])

     const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }
    
    const getProductQuantity = (id) => {
      const product = cart.find(prod => prod.id === id)

      return product?.quantity
    }

    const getTotal = () => {
      let accu = 0

      cart.forEach(prod => {
          accu += prod.quantity * prod.price
      })

      return accu
    }

    const clearCart = () => {
      setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getProductQuantity, getTotalQuantity, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}