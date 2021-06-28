import { CART_ADD, CART_REMOVE } from '../actionTypes';

const initialState = {
  items: [],
};

const handleCartAdd = (state, payload) => ({
  ...state,
  items: [...state.items, payload.productId],
});

const handleCartRemove = (state, payload) => ({
  ...state,
  items: state.items.filter((id) => id !== payload.productId),
});

export default function cart(state = initialState, action = {}) {
  switch (action.type) {
    case CART_ADD:
      return handleCartAdd(state, action.payload);
    case CART_REMOVE:
      return handleCartRemove(state, action.payload);
    default:
      return state;
  }
}
