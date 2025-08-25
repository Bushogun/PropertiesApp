import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import styles from './list-product-item.module.scss';
import { PropertyCard } from '../property-card/propertyCard';

const ListItems = () => {
//   const properties = useAppSelector(state => state.productReducer.properties);

//   if (products.length === 0) {
//     return null;
//   }

  return (
    <div className={styles['cards-container']}>
      {products.map((product: IProduct, index: number) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  );
};

export default ListItems;