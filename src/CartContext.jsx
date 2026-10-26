// => createContext: cart data ko app ke alag-alag components ke beech share karne ke liye.
// => useContext: kisi component mein shared cart ko lene ke liye.
// => useState: cart ka current data rakhne aur update karne ke liye.
import { createContext, useContext, useState } from "react";

// 2. Cart share karne ka raasta banana
//    CartContext ek shared channel jaisa hai. Cart ka data is channel se app ke components tak jaayega.
//    null iska starting/default value hai—jab tak provider cart data nahi deta.
const CartContext = createContext(null);

// 3. Cart ko kisi component mein lena
//  Ye useCart naam ka helper function hai. Jab koi component useCart() call karta hai, use CartContext ka current data milta hai.
export const useCart = () => useContext(CartContext);

// 4. Provider: cart ko app ke andar available karna
// CartProvider ek React component hai.
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // 5. Cart ki current value rakhna
  // useState([]) khaali array se cart shuru karta hai.
  // - cart: cart ka current data.
  // - setCart: cart ko update karne ka function.
  // Jab setCart se cart update hota hai, React naye data ke saath screen dobara render karta hai.

  const addToCart = (product) => {
    //6. Product add karne wala function    //addToCart function ek input leta hai: product.
    setCart((currentCart) => {
      // Cart mein us product ko dhoondhna. // setCart ko current cart milta hai. currentCart naam is code mein diya gaya hai; ye abhi cart ki latest value hai.
      const index = currentCart.findIndex((item) => item.id === product.id);
      // Ye cart mein aisa item dhoondhta hai jiska id add kiye ja rahe product ke id ke barabar ho.
      // Maan lo cart mein T-Shirt ka id: 1 hai:
      // - T-Shirt dobara add hui (id: 1) → uski position milegi, jaise 0.
      // - Naya Shoes product add hua (id: 2) → match nahi mila, result -1.
      if (index === -1) {
        // Agar product cart mein nahi hai. // index === -1 ka matlab product cart mein pehle se nahi tha.
        return [...currentCart, { ...product, quantity: 1 }];
      }
      //       Ab naya product cart mein add hota hai aur uski quantity: 1 hoti hai.
      // - [ ...currentCart, ... ] purane cart ki copy bana kar end mein naya item jodta hai.
      // - { ...product, quantity: 1 } product ki copy banata hai aur usmein quantity add karta hai.
      // ... ko yahan spread kehte hain—ye array ya object ke existing items/properties ko copy karne mein help karta hai.

      const updatedCart = [...currentCart];
      // Agar product pehle se cart mein hai. // Purane cart ki copy banayi, taaki copy ko update kar sakein.
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity + 1,
      };
      // Us position par jo product hai uski copy banti hai, aur quantity 1 badhti hai.
      return updatedCart;    // Updated cart React ko wapas milta hai.
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      const index = currentCart.findIndex((item) => item.id === productId);

      if (index === -1) return currentCart;

      const updatedCart = [...currentCart];

      if (updatedCart[index].quantity > 1) {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity - 1,
        };
      } else {
        updatedCart.splice(index, 1);
      }

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
