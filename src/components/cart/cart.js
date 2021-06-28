import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../cartItem/cartItem';
import Icon from '../icon/icon';
import close from '../../assets/icons/close.svg'

const Cart = ({ items, total, removeFromCart }) => {
  const node = useRef();
  const [open, setOpen] = useState(false);
  const activeClassName  = 'gf-cart-active';

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.classList.add(activeClassName);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove(activeClassName);
    }
 
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="gf-cart">
      <button type="button" onClick={() => setOpen(!open)} className="gf-cart-button gf-button">
        Cart
        {items.length > 0 && (
          <span>({items.length})</span>
        )}
      </button>
      <div ref={node} className={open ? 'gf-cart-panel gf-is-open' : 'gf-cart-panel'}>
        <div className="gf-cart-header">
          <h3 className="gf-h3">
            Your finds
            ({items.length})
          </h3>
          <button 
            type="button"
            onClick={() => setOpen(!open)}
            className="gf-cart-panel-close-button gf-button" 
            aria-label="Close cart menu"
          >
             <Icon src={close} className="gf-cart-panel-close-svg" />
          </button>
        </div>
        <div className="gf-cart-body">
          {items.length > 0 && (
            <>
              <div className="gf-cart-content">
                {items.map((item) => (
                  <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                ))}
              </div>
              <div className="gf-cart-total gf-h3">
                Total: 
                ${total}
              </div>
              <div className="gf-cart-checkout-button-container">
                <button className="gf-cart-checkout-button gf-button">Check out</button>
              </div>
            </>
          )}
          {items.length === 0 && (
            <h4 className="gf-cart-empty-text gf-h3">Your cart is empty</h4>
          )}
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
