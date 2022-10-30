// import logo from './logo.svg';
// import './App.css';
// import { useState, createContext } from 'react';
// import Navbar from './components/Navbar/Navbar'
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// //export const Context = createContext ()
// const Context =createContext

// function App () { 
//   const [cart, setCart] = useState ([])
//   console.log (cart)
//   const addItem = (productToAdd) => {
//     if(!isInCart(productToAdd.id)){
//       setCart([...cart, productToAdd])
//     }
//   }

//   const isInCart = (id) => {
//     return cart.some(prod => prod.id === id)
//   }

// const removeItem = (id) => {
//   const cartWithoutItem = cart.filter (prod => prod.id !== id)
//   setCart(cartWithoutItem)
// }

//   return(
//     <>
//     {/* <Context.Provider value={'valor a compartir'}> */}
//     <cartContext.Provider value ={{addItem, removeItem}}>
//     <BrowserRouter>  
//       <Navbar/>
//         <Routes>
//           <Route path='/' element= {<ItemListContainer greeting={"Aquí están los productos"}/>}/>
//           <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
//           <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
//         </Routes>
//     </BrowserRouter>
//     </cartContext.Provider>
//   {/* </Context.Provider> */}
//     </>
//   );

// }
// export default App;

import './App.css';
import { useState, createContext } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Navbar/Cart';
import { CartContextProvider  } from './context/CartContext';
import { NotificationProvider } from './components/Notification/Notification';
import Notification from './components/Notification/Notification';
import Checkout from './Checkout/Checkout';
function App() {
  return (
    <div className="App">
      <NotificationProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />  
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/contact' element={<h1>CONTACT</h1>} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 

            {/* Acá esta tu ruta de cart */}
            <Route path='/cart' element={<Cart/>} /> 
            <Route path= '/checkout' element={<Checkout/>}/>


            <Route path='/' element={<h1>404 NOT FOUND</h1>} />
          </Routes>     
        </BrowserRouter>
        </CartContextProvider >
        </NotificationProvider>

    </div>
  );
}

export default App;