import React from 'react';
import Error404 from './components/Error/Error404';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import PromocionApp from './components/Ad/PromocionApp';
import CartContextProvider from './components/Carts/CartContext';
import './index.css';
import Cart from './components/Carts/Cart';
import Checkout from './components/Checkout/Checkout';
import Seguimiento from './components/Seguimiento/Seguimiento';

function App() {
  return (
    <CartContextProvider>
      <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
          <Route path={"/checkout"} element={<Checkout/>}/>
          <Route path={"/seguimiento/:id"} element={<Seguimiento/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
        <PromocionApp/>
        <Footer/>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
