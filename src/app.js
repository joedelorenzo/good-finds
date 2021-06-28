import React from 'react';
import Cart from './modules/cart';
import ProductList from './modules/productList';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  return (
    <main className="gf-main-content">
      <Header />
      <Cart />
      <ProductList />
      <Footer />
    </main>
  );
}

export default App;
