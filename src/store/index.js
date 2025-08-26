import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

// const initialCartState = { items: [] };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: initialCartState,
//   reducers: {

//     addItem(state, action) {
//       const newItem = action.payload;
//       const existingItem = state.items.find(
//         (item) => item.name === newItem.name
//       );

//       if (existingItem) {
//         existingItem.quantity++;
//         existingItem.total += newItem.price;

//       } else {
//         state.items.push({
//           title: newItem.title,
//           price: newItem.price,
//           quantity: 1,
//           total: newItem.price,
//         });
//       }
//     },

//     removeItem(state, action) {
//         const name = action.payload
//         const existingItem = state.items.find(
//             (item) => item.name === name.name
//           );
      
//           if (existingItem.quantity === 1) {
//             state.items.splice(item => item.name !== name)
//           }
//           else {
//             existingItem.quantity--;
//             existingItem.total -= existingItem.price;
//           }
//     },
//   },
// });


const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer },
});

export default store;
