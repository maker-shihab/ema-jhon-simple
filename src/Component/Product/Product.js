import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product, addToCart}) => {
  const {name, price, ratings, img, seller} = product;
  return (
    <div className='single_product'> 
      <img src={img} alt="" />
      <div className="single_product_text">
        <a href='/' className='product_name'>{name}</a>
        <p>Price: $ {price}</p>
        <p>Manufacture:  {seller}</p>
        <p>Rating: {ratings} Star</p>
      </div>
      <button onClick={() => addToCart(product)} className="singple_product_btn" >
        Add To Cart &nbsp;
      <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;