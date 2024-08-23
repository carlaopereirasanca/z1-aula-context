// Aula de Context API - Agosto 2024

import "./App.css";
import { faker } from '@faker-js/faker';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import CartPage from "./components/CartPage";

function App() {

  // Criando o catálogo de produtos disponíveis:

  faker.seed(100);

  const arrayVazio=[...Array(20)];

  const productsArray = arrayVazio.map( () => {
    return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url()
    };
  } );

  // Criando o estado que armazenará nosso carrinho.
  // O armazenamento será no formato de uma lista de objetos JSON,
  // cada um representando um produto armazenado em productsArray.
  const [carrinho, setCarrinho] = useState([]);

  // Vamos passar este estado (getter e setter) via props
  // para os componentes Home e CartPage.
    
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>

            <Route path='/' element={
                <Home 
                    catalogo={productsArray}
                    carrinho={carrinho}
                    setCarrinho={setCarrinho}
                />
            } />

            <Route path='/cartpage' element={
                <CartPage
                    carrinho={carrinho}
                    setCarrinho={setCarrinho}
                />
            } />
            
        </Routes>
      </div>   
    </BrowserRouter>
  );
}

export default App;

