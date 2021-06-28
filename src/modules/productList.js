import { connect } from 'react-redux';
import ProductList from '../components/productList';
import { getProducts } from '../selectors/products';

const mapStateToProps = (state, props) => ({
  products: getProducts(state, props),
});

export default connect(mapStateToProps)(ProductList);
