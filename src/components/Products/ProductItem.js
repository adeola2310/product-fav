import React, {useContext} from 'react';

//THIS IMPORT IS FOR REDUX
// import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import './ProductItem.css';

//THIS IMPORT IS FOR REDUX
// import { toggleFav } from '../../store/actions/products';


import { ProductsContext } from "../../context/products-context";

//THIS IMPORT IS FOR CUSTOM HOOKS
import { useStore} from "../../hook-store/store";


//REACT MEMO FOR CODE OPTIMIZATION
const ProductItem = React.memo(props => {
  //this line is for redux
  // const dispatch = useDispatch();

  //this line is for customhooks
  //   const dispatch = useStore()[1];


  const toggleFav = useContext(ProductsContext).toggleFav;

  const toggleFavHandler = () => {

    // dispatch toggle fav is for redux
    // dispatch(toggleFav(props.id));

    // togglefav here is for context
    toggleFav(props.id);

    // THIS IS FOR CUSTOM HOOK
    //  dispatch('TOGGLE_FAV', props.id);

  };

  return (
      <Card style={{ marginBottom: '3rem' }}>
        <div className="product-item">
          <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
          <p>{props.description}</p>
          <button
              className={!props.isFav ? 'button-outline' : ''}
              onClick={toggleFavHandler}
          >
            {props.isFav ? 'Un-Favorite' : 'Favorite'}
          </button>
        </div>
      </Card>
  );
}) ;

export default ProductItem;
