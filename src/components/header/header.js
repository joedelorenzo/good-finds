import React from 'react';
import Icon from '../icon';
import menu from '../../assets/icons/menu.svg';

const Header = () => {
  return (
    <header className="gf-header">
      <button type="button" className="gf-header-menu-button gf-button" aria-label="Click to open menu">
        <Icon src={menu} className="gf-header-menu-svg" />
      </button>
      <h1 className="gf-h2">
        <a href="/" className="gf-header-link">Good finds</a>
      </h1>
    </header>
  );
};

export default Header;
