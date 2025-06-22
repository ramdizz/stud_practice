import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Garden Store</div>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Главная</NavLink>
        <NavLink to="/categories" className={({ isActive }) => isActive ? styles.active : ''}>Категории</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? styles.active : ''}>Товары</NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? styles.active : ''}>Корзина</NavLink>
      </nav>
    </header>
  );
};

export default Header;