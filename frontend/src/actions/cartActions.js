import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  RESET_STATE,
} from "../constants/cartConstants";
import axios from "axios";

// Add to Cart
export const addItemsToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/product/${id}`
  );

  dispatch({
    type: ADD_TO_CART,

    payload: {
      product: data._id,
      name: data.name,
      price: data.price,
      description: data.description,
      image: data.images[0],
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// EMPTY CART
export const resetState = () => async (dispatch) => {
  dispatch({
    type: RESET_STATE,
  });
  localStorage.removeItem("cartItems");
};
