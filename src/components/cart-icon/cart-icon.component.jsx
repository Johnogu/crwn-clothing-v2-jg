//import { UserContext } from "../../contexts/user.context";
//todo: borde avkommenteras?: import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

//import { CartContext } from "../../contexts/cart.context";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
//import { useContext } from "react";

const CartIcon = () => {
  //const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  console.log(" 1: Cart Open status: " + isCartOpen);
  const toggleIsCartOpen = () => {
    console.log(" 2: Cart Open status: " + isCartOpen);
    return dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
