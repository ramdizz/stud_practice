import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categories/${category.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={`http://localhost:3000${category.image}`} alt={category.title} />
      <h3>{category.title}</h3>
    </div>
  );
};

export default CategoryCard;