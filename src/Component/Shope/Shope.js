import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shope.css';

const Shope = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  },[]);
  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
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
        <h4 className='text-center'>Shope Container</h4>
        <ul className='cart_list'>
          <li>Select Item: {cart.length}</li>
          <li>Total Price: {}</li>
          <li>Total Shipping Price: {}</li>
          <li>Tax: {}</li>
          <li className='grand_total'>Grand Total: {}</li>
        </ul>
      </div>
    </div>
  );
};

export default Shope;