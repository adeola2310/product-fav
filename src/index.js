import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import ProductsContextProvider from "./context/products-context";
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

// import productReducer from './store/reducers/products';


// const rootReducer = combineReducers({
//     shop: productReducer
// });
//
// const store = createStore(rootReducer);


ReactDOM.render(
    <ProductsContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ProductsContextProvider>,
    // <Provider store={store}>
    //     <BrowserRouter>
    //         <App />
    //     </BrowserRouter>
    // </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





