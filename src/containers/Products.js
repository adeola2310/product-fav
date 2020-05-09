import React, {useContext} from 'react';
// import { useSelector } from 'react-redux';


//THIS IMPORT IS FOR CUSTOM HOOKS
import {useStore} from "../hook-store/store";

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { ProductsContext } from '../context/products-context'

const Products = props => {
  // we use this while using redux
  // const productList = useSelector(state => state.shop.products);


  // we use this during custom hooks
  // const state = useStore()[0];

  const productList = useContext(ProductsContext).products;
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>


// we use this with custom hooks
//       <ul className="products-list">
//       {state.products.map(prod => (
//             <ProductItem
//                 key={prod.id}
//                 id={prod.id}
//                 title={prod.title}
//                 description={prod.description}
//                 isFav={prod.isFavorite}
//             />
//         ))}
// </ul>

  );
};

export default Products;
