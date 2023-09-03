import { createContext, useState, useEffect } from "react";

//import PRODUCTS from "../shop-data.json";
/* //Only needed once to fill backend database
import SHOP_DATA from "../shop-data.js";
*/

// import { addCollectionsAndDocuments } from "../utils/firebase/firebase.utils.js";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProuductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  /* //Only run once to fill backend DB
    useEffect(() => {
    addCollectionsAndDocuments("categories", SHOP_DATA);
  }, []);
  */

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}{" "}
    </ProductsContext.Provider>
  );
};
