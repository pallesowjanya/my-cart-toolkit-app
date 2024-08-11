import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './cartSlice';

// Import images from src/images directory
import wolfImage from './images/wolf.png';
import kafkaImage from './images/kafka.png';
import mjImage from './images/mj.png';
import crawdadsImage from './images/crawdads.png';


const Cart = () => {
    const items = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();
  
    // Map item IDs to imported images
    const imageMap = {
      1: wolfImage,
      2: kafkaImage,
      3: mjImage,
      4: crawdadsImage,
    };
  
    return (
      <div>
        <h1>Your Cart</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img src={imageMap[item.id]} alt={item.title} width="50" height="75" />
              <div>{item.title}</div>
              <div>${item.price.toFixed(2)}</div>
              <div>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                {item.quantity}
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>
              <div>${(item.price * item.quantity).toFixed(2)}</div>
              <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </li>
          ))}
        </ul>
        <div>
          <h2>Total Quantity: {totalQuantity}</h2>
          <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
        </div>
      </div>
    );
  };
  

export default Cart;
