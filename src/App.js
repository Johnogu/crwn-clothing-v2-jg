//import "./categories.styles.scss";
//import "./components/category-item/category-item.component";
//import CategoryItem from "./components/category-item/category-item.component";
//import Directory from "./components/directory/directory.component";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.reducer";
import { selectCurrentUser } from "./store/user/user.selector";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser = user && (({ accessToken, email }) => ({accessToken,email}))(user);
      console.log(setCurrentUser(pickedUser));
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []); // will work, but only run once anyways:  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
