// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories } from '../../store/categoriesSlice';
// import styles from './CategoriesPage.module.css';

// // Импорт картинок категорий


// const CategoriesPage = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.categories.items || []);

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   const getCategoryImage = (title = '') => {
//     switch (title.toLowerCase()) {
//       case 'fertilizer':
//         return fertilizerImg;
//       case 'protective products and septic tanks':
//         return protectionImg;
//       case 'planting material':
//         return plantingImg;
//       case 'tools and equipment':
//         return toolsImg;
//       case 'pots and planters':
//         return potsImg;
//       default:
//         return '';
//     }
//   };

//   const categoriesWithImages = categories.map((cat) => ({
//     ...cat,
//     image: getCategoryImage(cat.title),
//   }));

//   return (
//     <div className={styles.page}>
//       {/* Категории */}
//       <section className={styles.categories}>
//         <h2>Categories</h2>
//         <div className={styles.grid}>
//           {categoriesWithImages.map((category) => (
//             <div key={category.id} className={styles.card}>
//               <img src={category.image} alt={category.title} />
//               <p>{category.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Контакты */}
//       <section className={styles.contact}>
//         <h2>Contact</h2>
//         <div className={styles.contactGrid}>
//           <div>
//             <p><strong>Phone:</strong> +7 (499) 350-66-04</p>
//           </div>
//           <div>
//             <p><strong>Socials:</strong> 🛜 🟢</p>
//           </div>
//           <div>
//             <p><strong>Address:</strong> Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
//           </div>
//           <div>
//             <p><strong>Working Hours:</strong> 24 hours a day</p>
//           </div>
//         </div>

//         <div className={styles.map}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.1448257686957!2d37.6250138!3d55.7147605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4043eec28fb%3A0x6c3fd2b90989d4c7!2z0JHQsNC80LDRgtC40LzQsNGPINCy0LDQvdC40YfQtdC70YzQvdC-0LPQviwgOTYsINCa0LjQtdCyLCAxMTUwOTM!5e0!3m2!1sru!2sru!4v1718800000000"
//             width="100%"
//             height="300"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CategoriesPage;




import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categoriesSlice';
import products from '../../data/productsData';
import ProductCard from '../../components/ProductCard/index';
import styles from './CategoriesPage.module.css';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items || []);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const getCategoryImage = (title = '') => {
    switch (title.toLowerCase()) {
      case 'fertilizer':
        return fertilizerImg;
      case 'protective products and septic tanks':
        return protectionImg;
      case 'planting material':
        return plantingImg;
      case 'tools and equipment':
        return toolsImg;
      case 'pots and planters':
        return potsImg;
      default:
        return '';
    }
  };

  const categoriesWithImages = categories.map((cat) => ({
    ...cat,
    image: getCategoryImage(cat.title),
  }));

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(
          (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className={styles.page}>
      {/* Кнопки категорий */}
      <section className={`${styles.categoriesSection}`}>
        <h2>Categories</h2>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${selectedCategory === 'All' ? styles.active : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.button} ${selectedCategory === category.title ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </section>

      {/* Товары */}
      <section className={styles.products}>
        <h2>{selectedCategory} products</h2>
        <div className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Контакты */}
      <section className={styles.contact}>
        <h2>Contact</h2>
        <div className={styles.contactGrid}>
          <div>
            <p><strong>Phone:</strong> +7 (499) 350-66-04</p>
          </div>
          <div>
            <p><strong>Socials:</strong> 🛜 🟢</p>
          </div>
          <div>
            <p><strong>Address:</strong> Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
          </div>
          <div>
            <p><strong>Working Hours:</strong> 24 hours a day</p>
          </div>
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
      </section>
    </div>
  );
};

export default CategoriesPage;