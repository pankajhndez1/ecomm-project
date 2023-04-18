import { PRODUCT_LIST ,SEARCH_PRODUCT,SET_PRODUCT_LIST} from "./constant"

export const productList = () => {
    //  the below one is the wrong approach to call the api
    // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // data = await data.json();
    // console.log('PRODUCT_LIST', data);
    return {
        type: PRODUCT_LIST,
        // payload: 'apple'
    }
}

export const productSearch = (query) => {
    //  the below one is the wrong approach to call the api
    // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // data = await data.json();
    // console.log('PRODUCT_LIST', data);
    return {
        type: SEARCH_PRODUCT,
        query
    }
}

