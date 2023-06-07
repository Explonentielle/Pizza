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
    orders: [
        // {
        //     id: 11,
        //     total: 7.90,
        //     pizzas: [
        //         {
        //             id: 1,
        //             name: "margarita",
        //             price: 7.90
        //         }
        //     ]
        // }
    ]
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        add: (state, action) => {
            const { id, name, price } = action.payload
            state.orders.push({
                id: Date.now(),
                total: calculateTotalPrice([...state.orders, { id, name, price }]),
                pizzas: [
                  {
                    id,
                    name,
                    price
                  }
                ]
              });
        },
    }
})



export const { add } = dataSlice.actions;
export default dataSlice.reducer;