import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting={"Productos próximamente"}/>
    </div>
  );
}

export default App;
