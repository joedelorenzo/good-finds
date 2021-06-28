import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import close from '../../icons/close.svg'

const CartItem = ({ name, price, size, onClick, image,bestSeller }) => (
  <div className="gf-cart-item">
    <div className="gf-cart-item-image-wrapper">
      <img className="gf-cart-item-image" src={image} alt={name} />
    </div>
    <div className="gf-cart-item-details">
      {bestSeller ? <div className="gf-cart-item-best-seller">Bestseller</div> : null}
      <button className="gf-cart-item-remove-button gf-button" type="button" onClick={onClick}>
        <Icon src={close} className="gf-cart-item-remove-svg" />
        Remove
      </button>
      <h4 className="gf-h3">{name}</h4>
      <div className="gf-cart-item-footer">
        <span className="gf-cart-item-product-size">{size}</span>
        <span className="gf-cart-item-product-price">${price}</span>
      </div>
    </div>
  </div>
);

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CartItem;
