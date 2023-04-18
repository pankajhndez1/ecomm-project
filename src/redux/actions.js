import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constant"

export const addToCart = (payload) => {
    console.log('ADD_TO_CART', payload);
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload) => {
    console.log('REMOVE_FROM_CART', payload);
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export const clearCart = (payload) => {
    console.log('CLEAR_CART', payload);
    return {
        type: CLEAR_CART,
        payload
    }
}