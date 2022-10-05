import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App () {
  return(
    <>
    <BrowserRouter>  
      <Navbar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting={"Aquí están los productos"}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );

}
export default App;