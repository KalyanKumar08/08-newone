import React from 'react';
import  products  from "../../products";
import Product from "./product";
import "./shop.css"

const shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Kalyan Electronics</h1>
        </div>
        <div className='products'>
            {products.map((product) => 
            (<Product data={product}/>
            ))}
        </div>
    </div>
  )
}

export default shop;