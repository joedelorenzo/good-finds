import { getProduct } from './products';

// selectors
export const isInCart = (state, props) => state.cart.items.indexOf(props.id) !== -1;

export const getItems = (state) => state.cart.items.map((id) => getProduct(state, { id }));

export const getTotal = (state) => state.cart.items.reduce((acc, id) => {
  const item = getProduct(state, { id });
  return acc + item.price;
}, 0);
