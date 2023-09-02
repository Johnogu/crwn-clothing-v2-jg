import { createContext, useState } from "react";

//import PRODUCTS from "../shop-data.json";
import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProuductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}{" "}
    </ProductsContext.Provider>
  );
};
