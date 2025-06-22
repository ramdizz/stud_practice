import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <img src={`http://localhost:3000${item.image}`} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.quantity} x {(item.discont_price || item.price)}₽</p>
      </div>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Удалить</button>
    </li>
  );
};

export default CartItem;