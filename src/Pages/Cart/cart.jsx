import React, { useContext } from 'react';
import ShopContext from "../../context/shop-context";
import products from "../../products";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const {cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  
  const navigate = useNavigate ()
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
      {products.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItem data={product} />;
        }
      })}
      </div>
      {totalAmount > 0 ? (
      <div className="checkout">
        <p>Subtotal:  {totalAmount}</p>
        <button onClick={() => navigate ("/")}>Continue Shopping</button>
        <button onClick={()=> {
          checkout();
          navigate("/checkout");
        }} 
        >{""}Checkout{""}</button>
        
    </div>
   ) : (
    <h1>Your Cart is Empty</h1>
   )}
    </div>
  );
};

// (import statements)

// const Cart = () => {
//   const { cartItems, getTotalCartAmount } = useContext(ShopContext);
//   const totalAmount = getTotalCartAmount();

//   const navigate = useNavigate();

//   const renderCartItems = () => {
//     return products.map((product) => {
//       if (cartItems[product.id] !== 0) {
//         return <CartItem key={product.id} data={product} />;
//       }
//       return null; // Explicitly return null for items not in the cart
//     });
//   };

//   const handleCheckout = () => {
//     // Implement your checkout logic here
//     // For example, clear the cart or navigate to a checkout page
//     // ...

//     // For now, just navigate to the home page
//     navigate("/");
//   };

//   return (
//     <div className="cart">
//       <div>
//         <h1>Your Cart Items</h1>
//       </div>
//       <div className="cartItems">{renderCartItems()}</div>
//       {totalAmount > 0 ? (
//         <div className="checkout">
//           <p>Subtotal: {totalAmount}</p>
//           <button onClick={() => navigate("/")}>Continue Shopping</button>
//           <button onClick={handleCheckout}>Checkout</button>
//         </div>
//       ) : (
//         <h1>Your Cart is Empty</h1>
//       )}
//     </div>
//   );
// };

// export default Cart;


export default Cart