import React from 'react';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import PromocionApp from './components/PromocionApp';
import ItemCount from './components/ItemCount';
import './index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>
      <PromocionApp/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
