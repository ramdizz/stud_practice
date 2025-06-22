import { useParams } from 'react-router-dom';
import products from '../../data/productsData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import styles from '../ProductPage/ProductPage.module.css'; 

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const dispatch = useDispatch();

  if (!product) return <p>Product not found</p>;

  const { title, image, price, oldPrice, description } = product;
  const discount = oldPrice ? Math.round(100 - (price / oldPrice) * 100) : null;

  return (
    <div className={styles.container}>
      <div className={styles.productSection}>
        <img src={image} alt={title} className={styles.productImage} />
        <div className={styles.productInfo}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.priceBlock}>
            <span className={styles.price}>${price}</span>
            {oldPrice && (
              <>
                <span className={styles.oldPrice}>${oldPrice}</span>
                <span className={styles.discount}>-{discount}%</span>
              </>
            )}
          </div>

          <div className={styles.cartControls}>
            <button className={styles.cartButton} onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </button>
          </div>

          <div className={styles.description}>
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h2>Contact</h2>
        <div className={styles.contactGrid}>
          <div>
            <strong>Phone</strong>
            <p>+7 (499) 350-66-04</p>
          </div>
          <div>
            <strong>Socials</strong>
            <p>📸 🟢</p>
          </div>
          <div>
            <strong>Address</strong>
            <p>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
          </div>
          <div>
            <strong>Working Hours</strong>
            <p>24 hours a day</p>
          </div>
        </div>

        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4239403859545!2d37.62572577669092!3d55.709544373063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0a95db2c65%3A0xa5b055d6d3a53e49!2sIT%20Hub%20college!5e0!3m2!1sen!2sru!4v1700000000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};


export default ProductPage;