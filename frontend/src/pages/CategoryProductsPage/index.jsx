import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import styles from './CategoryProductsPage.module.css';

const CategoryProductsPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${id}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [id]);

  return (
    <div className={styles.categoryProductsPage}>
      <h2>Товары категории</h2>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProductsPage;