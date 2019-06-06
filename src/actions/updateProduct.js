export const ADD_PRODUCT = 'products:addProduct';
export const REMOVE_PRODUCT = 'products:deleteProductr';

export function addProduct(newItem) {
    return {
        type: ADD_PRODUCT,
        payload:{
            product:newItem
        }
    }
}

export function deleteProduct() {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            products: 'ERROR!!'
        }
    }
}
