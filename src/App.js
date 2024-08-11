import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from './features/cart/cartSlice';
import Cart from './features/cart/Cart';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // Replace this with your actual data URL or array of items
      const data = [
        {
          id: 1,
          title: 'Wolf So Grim and Mangy',
          price: 249.0,
          quantity: 1,
          image: 'https://via.placeholder.com/50', // Replace with actual image URL
        },
        // Add more items here...
      ];
      dispatch(setItems(data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <Cart />
    </div>
  );
}

export default App;
