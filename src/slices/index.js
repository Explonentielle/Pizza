import { createSlice } from "@reduxjs/toolkit";


function calculateTotalPrice(pizzas) {
  let total = 0;
  for (let i = 0; i < pizzas.length; i++) {
    const pizza = pizzas[i];
    total += pizza.price;
  }
  return total;
}

const initialState = {
  orders: []
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createOrder: (state, action) => {
      state.orders.push({
        id: action.payload,
        total: 0,
        pizzas: [
        ]
      });
    },

    add: (state, action) => {
      const { id, name, price } = action.payload
      const orderIndex = state.orders.length - 1;
      state.orders[orderIndex].pizzas.push(
          {
            id,
            name,
            price
          }
      );
    },
    removed: (state, {payload}) => {
      state.orders.splice(payload, 1);
    },
}})



export const { add, createOrder, removed } = dataSlice.actions;
export default dataSlice.reducer;


// calculateTotalPrice([...state.orders, { id, name, price }]),