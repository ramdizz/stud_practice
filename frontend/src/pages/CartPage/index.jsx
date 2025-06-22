import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cartSlice';
import CouponForm from '../../components/CouponForm';
import styles from './CartPage.module.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items); // 🟢 важно: получаем items
  const [coupon, setCoupon] = useState(null);

  const total = cart.reduce((sum, item) => {
    const price = item.discont_price || item.price;
    return sum + price * item.quantity;
  }, 0);

  const handleCoupon = ({ coupon }) => {
    setCoupon(coupon);
    alert(`Промокод "${coupon}" применён!`);
  };

  return (
    <div className={styles.cartPage}>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          <ul className={styles.list}>
            {cart.map(item => (
              <li key={item.id} className={styles.item}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.quantity} x {item.discont_price || item.price}₽</p>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Удалить</button>
              </li>
            ))}
          </ul>

          <div className={styles.summary}>
            <p>Итого: <strong>{total}₽</strong></p>
            <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
            <button className={styles.order}>Оформить заказ</button>
          </div>

          <CouponForm onSubmit={handleCoupon} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
