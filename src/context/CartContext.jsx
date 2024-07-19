// src/context/CartContext.jsx
import React, { createContext, useState, useMemo } from 'react';
import { db } from '../config/firebase';
import { doc, runTransaction } from 'firebase/firestore';

const Context = createContext();

export const CartContextProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addItem = (item, quantity) => {
       const existingItem = cart.find(prod => prod.id === item.id);
       if (existingItem) {
           setCart(cart.map(prod => prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod));
       } else {
           setCart([...cart, { ...item, quantity }]);
       }
   };

   const removeItem = (itemId) => {
       setCart(cart.filter(item => item.id !== itemId));
   };

   const clearCart = () => {
       setCart([]);
   };

   const total = useMemo(() => cart.reduce((acc, item) => acc + item.precio * item.quantity, 0), [cart]);
   const stock = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

   const finalizePurchase = async () => {
       try {
           await runTransaction(db, async (transaction) => {
               for (const item of cart) {
                   const itemRef = doc(db, 'productos', item.id);
                   const itemDoc = await transaction.get(itemRef);
                   if (!itemDoc.exists) {
                       throw "Document does not exist!";
                   }

                   const newStock = itemDoc.data().stock - item.quantity;
                   if (newStock < 0) {
                       throw "Insufficient stock!";
                   }

                   transaction.update(itemRef, { stock: newStock });
               }
           });
           clearCart();
       } catch (error) {
           console.error('Error finalizing purchase:', error);
       }
   };

   return (
      <Context.Provider value={{ cart, addItem, removeItem, clearCart, total, stock, finalizePurchase }}>
         {children}
      </Context.Provider>
   );
};

export default Context;
