import { CART_ADD, CART_REMOVE } from '../actionTypes';

export const addToCart = (productId) => ({
  type: CART_ADD,
  payload: {
    productId,
  },
});

export const removeFromCart = (productId) => ({
  type: CART_REMOVE,
  payload: {
    productId,
  },
});
