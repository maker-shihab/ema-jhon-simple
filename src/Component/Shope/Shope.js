import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../utilities/fakedb';
import './Shope.css';

const Shope = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  },[]);
  useEffect( () => {
    const storeCart = getStoredCart();
    for (const id in storeCart){
      const addedProduct = product.find(product => product.id === id);
      console.log(addedProduct);
    }
  },[])
  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  }
  return (
    <div className='shope_container'>
      <div className="product_container">
        {
          product.map(product => <Product 
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
            /> )
        }
      </div>
      <div className="card_container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shope;