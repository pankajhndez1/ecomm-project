import { ADD_TO_CART,PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";
import {takeEvery ,put} from 'redux-saga/effects'

function* getProducts() {
    let data = yield fetch("http://localhost:3500/product");
    data = yield data.json();
    console.log('getProducts called', data);
    yield put({type :SET_PRODUCT_LIST,data})
}

function* searchProducts(data) {
    console.log(data,'data searchProducts ');
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
    result = yield result.json();
    console.log('getProducts called', data);
    yield put({ type: SET_PRODUCT_LIST, data: result })
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}
export default productSaga;