import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

const initialState = {
    productList: []
}

export default function productData(state = initialState, actions) {
    switch (actions.type) {
        // case PRODUCT_LIST:
        //     console.log(actions.payload, 'PRODUCT_LIST');
        //     return {
        //         ...state,
        //         productList: [...state.productList, actions.payload]
        //     }

        case SET_PRODUCT_LIST:  
            return {
                ...state,
                productList: [...actions.data]
            }

        default: return state

    }

}