//Reducers affect the state of the store, takes a state, and an action
 import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/updateProduct.js';

export default function productsReducer(state = [], {type, payload}) {
    switch(type) {
        case ADD_PRODUCT:
        return [...state, payload.product]

        case REMOVE_PRODUCT:
            const newState = [...state];
            newState.splice(payload.index,1);
            return newState;
    }
  return state;
}
