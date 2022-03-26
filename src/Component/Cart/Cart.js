import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total += product.price;
    shipping += product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart_body">
      <h4 className='text-center'>Shope Container</h4>
      <ul className='cart_list'>
        <li>Select Item: {cart.length}</li>
        <li>Total Price: $ {total}</li>
        <li>Total Shipping: $ {shipping}</li>
        <li>Tax: {tax}</li>
        <li className='grand_total'>Grand Total: $ {grandTotal.toFixed(2)}</li>
      </ul>
  </div>
  );
};

export default Cart;