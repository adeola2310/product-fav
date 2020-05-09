import React, {useContext} from 'react';

//THIS IMPORT IS FOR REDUX
// import { useSelector } from 'react-redux';

import { ProductsContext} from "../context/products-context";

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

// IMPORT FOR CUSTOM HOOKS
import { useStore} from "../hook-store/store";


//FAVOURITE PRODUCT FOR CONTEXT
const Favorites = props => {
  const favoriteProducts = useContext(ProductsContext).products.filter(p => p.isFavorite);


  //FAVOURITE PRODUCT FOR REDUX
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );



  //FAVORITE PRODUCT FOR CUSTOM HOOKS
  // const  state = useStore()[0];
  // const favoriteProducts = state.products.filter(p => p.isFavorite);


  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
