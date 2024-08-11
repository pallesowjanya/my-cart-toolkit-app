import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  items: [
    {
      id: 1,
      title: 'Wolf So Grim and Mangy',
      price: 249.0,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Metamorphosis',
      price: 289.0,
      quantity: 1,
    },
    {
      id: 3,
      title: 'Mary Jane',
      price: 200.0,
      quantity: 1,
    },
    {
      id: 4,
      title: 'Where the Crawdads Sing',
      price: 200.0,
      quantity: 1,
    },
  ],
  totalQuantity: 4,
  totalAmount: 938.0,
};



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.totalQuantity = action.payload.reduce((acc, item) => acc + item.quantity, 0);
      state.totalAmount = action.payload.reduce((acc, item) => acc + item.quantity * item.price, 0);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.quantity * item.price;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { setItems, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
