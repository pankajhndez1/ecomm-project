// import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import productData from './ProductReducer';
import createSagaMiddleware from 'redux-saga';
import productSaga from './ProductSaga';
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const SagaMiddleware = createSagaMiddleware();
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [SagaMiddleware]
    }
)

SagaMiddleware.run(productSaga)
export default store;
