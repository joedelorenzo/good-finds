import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ id, addToCart, removeFromCart, isInCart, price, name, image, size, bestSeller }) => {
  const handleClick = () => (isInCart ? removeFromCart(id) : addToCart(id));

  return (
    <div className={isInCart ? 'gf-product gf-in-cart' : 'gf-product'}>
      {bestSeller ? <div className="gf-product-best-seller"> Bestseller</div> : null}
      <img src={image} alt={name} className="gf-product-image" />
      <div className="gf-product-details">
        <h3 className="gf-h3">{name}</h3>
        <div className="gf-product-size-and-price-content">
          <span className="gf-product-size">{size}</span>
          <span className="gf-product-price">${price}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={handleClick}
        disabled={isInCart}
        className="gf-product-button gf-button"
      >
        {isInCart ? 'Sold out' : 'Add to cart'}
      </button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bestSeller: PropTypes.bool,
  image: PropTypes.string.isRequired,
  isInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Product;
