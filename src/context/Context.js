// import { faker } from "@faker-js/faker"
// import React, { useContext, useReducer,createContext } from 'react'
// import { cartReducer } from './reducer'
// const CartContext = createContext();
// const CartProvider = ({ children }) => {
//     //  const [cart, setCart] = useState([]);
//     const Products = [...Array(20)].map(() => ({
//         id: faker.datatype.uuid,
//         name: faker.commerce.productName,
//         price: faker.commerce.price,
//         image: faker.image.image,
//         instock: faker.helpers.arrayElement,
//         fastDelivery: faker.datatype.boolean,
//         ratings: faker.helpers.arrayElement,
//     }));
//     const [state, dispatch] = useReducer(cartReducer, {
//         cart: [],
//         Products: Products
//     })
//     return (
//         <CartContext.Provider value={{ state, dispatch }}> {children} </CartContext.Provider>
//     )
// }
// export default CartContext;

// export const useCart = () => {
//   return useContext(CartContext);
// };
import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './reducer'; // Ensure this file exists and is correctly implemented

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const Products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    instock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const initialState = {
    cart: [],
    Products: Products,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  return useContext(CartContext);
};
