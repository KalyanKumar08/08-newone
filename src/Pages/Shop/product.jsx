import React, { useContext } from 'react';
import ShopContext from '../../context/shop-context';
const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext (ShopContext);

const cartItemAount = cartItems[id]

  return (
    <div className='product'>
    <img  src={productImage} alt='images'/> 
     <div className='description'>
      <p>
        <b> {productName}</b>
      </p>
      <p>
        <b>{price}</b>
      </p>
      <button className='crtBtn' onClick= {() => addToCart(id)}> 
      Add To Cart  {cartItemAount > 0 && <> ({cartItemAount})</>}
      </button>
     </div>
     </div>
  
  )
}

export default Product;