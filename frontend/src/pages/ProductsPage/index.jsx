// import React from 'react';
// import products from '../../data/productsData'; // <-- импорт массива товаров
// import ProductCard from '../../components/ProductCard';

// const ProductsPage = () => {
//   return (
//     <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', padding: '2rem' }}>
//       {products.map((p) => (
//         <ProductCard key={p.id} {...p} />
//       ))}
//     </div>
//   );
// };

// export default ProductsPage;


import React from 'react';
import products from '../../data/productsData';
import ProductCard from '../../components/ProductCard/index';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>All Products</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.1448257686957!2d37.6250138!3d55.7147605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4043eec28fb%3A0x6c3fd2b90989d4c7!2z0JHQsNC80LDRgtC40LzQsNGPINCy0LDQvdC40YfQtdC70YzQvdC-0LPQviwgOTYsINCa0LjQtdCyLCAxMTUwOTM!5e0!3m2!1sru!2sru!4v1718800000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
    </div>
  );
};

export default ProductsPage;