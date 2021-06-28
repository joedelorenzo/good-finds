import { createStore } from 'redux';
import rootReducer from './rootReducer';
import productsData from '../data/products';

const store = createStore(rootReducer, {
  products: productsData,
});

export default store;
