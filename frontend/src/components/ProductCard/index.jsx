// import styles from './ProductCard.module.css';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../store/cartSlice';

// const ProductCard = ({ id, title, image, price, oldPrice }) => {
//   const dispatch = useDispatch();
//   const discount = oldPrice ? Math.round(100 - (price / oldPrice) * 100) : null;

//   return (
//     <div className={styles.card}>
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} className={styles.image} />
//       </Link>

//       {discount && <div className={styles.discount}>-{discount}%</div>}

//       <h3 className={styles.title}>{title}</h3>

//       <div className={styles.priceBlock}>
//         <span className={styles.price}>${price}</span>
//         {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
//       </div>

//       <button
//         className={styles.cartBtn}
//         onClick={() => dispatch(addToCart({ id, title, image, price }))}
//       >
//         Add to cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;




import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import styles from './ProductCard.module.css';

const ProductCard = ({ id, title, image, price, oldPrice }) => {
  const dispatch = useDispatch();
  const discount = oldPrice ? Math.round(100 - (price / oldPrice) * 100) : null;

  return (
    <div className={styles.card}>
      <Link to={`/products/${id}`} className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </Link>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.priceBlock}>
          <span className={styles.price}>${price}</span>
          {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
          {discount && <span className={styles.discount}>-{discount}%</span>}
        </div>

        <button
          className={styles.cartButton}
          onClick={() => dispatch(addToCart({ id, title, image, price, oldPrice }))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;