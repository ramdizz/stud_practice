import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/categoriesSlice'; // правильно
import { fetchProducts } from '../../store/productsSlice';
import { addToCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

// Изображения
import bannerImg from '../../assets/images/mish22.jpg';
import discountImg from '../../assets/images/1.jpeg';
import contactImg from '../../assets/images/2.jpeg';

import fertilizerImg from '../../assets/images/mish17.jpg';
import protectionImg from '../../assets/images/mish4.jpg';
import plantingImg from '../../assets/images/mish5.jpg';
import toolsImg from '../../assets/images/mish6.jpg';

import lawnImg from '../../assets/images/mish7.jpg';
import basketImg from '../../assets/images/17.jpeg';
import aquariumImg from '../../assets/images/19.jpeg';
import secateursImg from '../../assets/images/21.jpeg';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = [
    { id: 1, title: 'Fertilizer', image: fertilizerImg },
    { id: 2, title: 'Protection products and agents', image: protectionImg },
    { id: 3, title: 'Planting material', image: plantingImg },
    { id: 4, title: 'Tools and equipment', image: toolsImg },
  ];

  const saleProducts = [
    { id: 1, title: 'Decorative target lawn', image: lawnImg, price: 600, discont_price: 500 },
    { id: 2, title: 'Flower basket', image: basketImg, price: 150, discont_price: 100 },
    { id: 3, title: 'Aquarium lock', image: aquariumImg, price: 200, discont_price: 150 },
    { id: 4, title: 'Secateurs', image: secateursImg, price: 250, discont_price: 199 },
  ];

  return (
    <div className={styles.home}>
      {/* БАННЕР */}
      <section className={styles.banner} style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className={styles.overlay}>
          <h1>Amazing Discounts on Garden Products!</h1>
          <button>Check out</button>
        </div>
      </section>

      {/* КАТЕГОРИИ */}
      <section className={`${styles.section} ${styles.gradientBackground}`}>
  <h2 className={styles.sectionTitle}>Categories</h2>
  <div className={styles.grid}>
    {categories.map(category => (
      <div
        key={category.id}
        className={styles.card}
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/categories')}
      >
        <img src={category.image} alt={category.title} />
        <p>{category.title}</p>
      </div>
    ))}
  </div>
</section>

      {/* СКИДКА 5% */}
      <section className={styles.discountSection} style={{ backgroundImage: `url(${discountImg})` }}>
        <div className={styles.discountContent}>
          <h2>5% off on the first order</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone number" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Get a discount</button>
          </form>
        </div>
      </section>

      {/* SALE / ТОВАРЫ */}
      <section className={`${styles.section} ${styles.gradientBackground}`}>
  <h2 className={styles.sectionTitle}>Sale</h2>
  <div className={styles.grid}>
    {saleProducts.map(product => (
      <div
        key={product.id}
        className={styles.card}
        onClick={() => {
          dispatch(addToCart(product));
          navigate('/cart');
        }}
        style={{ cursor: 'pointer' }}
      >
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>
          <span className={styles.oldPrice}>${product.price}</span>{' '}
          <span className={styles.newPrice}>${product.discont_price}</span>
        </p>
      </div>
    ))}
  </div>
</section>
      {/* КОНТАКТЫ + КАРТА */}
      <section className={styles.contactSection} style={{ backgroundImage: `url(${contactImg})` }}>
        <div className={styles.contactContent}>
          <h2>Contact</h2>
          <div>
            <p><strong>Phone:</strong> +7 (499) 350-66-04</p>
            <p><strong>Address:</strong> Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
            <p><strong>Working hours:</strong> 24 hours a day</p>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.1448257686957!2d37.6250138!3d55.7147605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4043eec28fb%3A0x6c3fd2b90989d4c7!2z0JHQsNC80LDRgtC40LzQsNGPINCy0LDQvdC40YfQtdC70YzQvdC-0LPQviwgOTYsINCa0LjQtdCyLCAxMTUwOTM!5e0!3m2!1sru!2sru!4v1718800000000"
            width="50%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
