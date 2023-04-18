import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constant";

const initialState = {
    compoData: []
}

export default function cardData(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            console.log(payload, 'ADD_TO_CART');
            return {
                ...state,
                compoData: [...state.compoData, payload]
            }
            

        case REMOVE_FROM_CART:
            console.log(payload, 'REMOVE_FROM_CART');
            const newArr = state.compoData.length > 1 ? state.compoData.filter((currentValue, index, arr) => {
                return currentValue.id !== payload.id
            }) : []

            console.log(newArr, 'newArr');
            return {
                ...state,
                compoData: [...newArr]
            }

        case CLEAR_CART:
            return {
                ...state,
                compoData: []
            }

        default: return state
            
    }

}