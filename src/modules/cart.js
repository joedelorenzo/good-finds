import { connect } from 'react-redux';
import Cart from '../components/cart';
import { getItems, getTotal } from '../selectors/cart';
import { removeFromCart } from '../actions';

const mapStateToProps = (state, props) => ({
  items: getItems(state, props),
  total: getTotal(state, props),
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
