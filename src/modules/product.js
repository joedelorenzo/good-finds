import { connect } from 'react-redux';
import Product from '../components/product';
import { addToCart, removeFromCart } from '../actions';
import { isInCart } from '../selectors/cart';

const mapStateToProps = (state, props) => ({
  isInCart: isInCart(state, props),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCart(id)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
