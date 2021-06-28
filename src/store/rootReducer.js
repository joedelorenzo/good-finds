import { combineReducers } from 'redux';
import cartReducer from '../reducers/cartReducers';
import productsReducer from '../reducers/productReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;
