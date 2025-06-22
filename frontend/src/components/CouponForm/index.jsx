import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './CouponForm.module.css';

const CouponForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <input
        {...register('coupon', { required: 'Введите промокод' })}
        placeholder="Промокод"
      />
      {errors.coupon && <span>{errors.coupon.message}</span>}
      <button type="submit">Применить</button>
    </form>
  );
};

export default CouponForm;