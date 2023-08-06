import axios from "axios"

const fetchProductDetailsRequest = () => {
    return {
        type: "FETCH_PRODUCT_DETAILS_REQUEST"
    }
}

const fetchProductDetailsSuccess = productDetails => {
    return {
        type: "FETCH_PRODUCTS_DETAILS_SUCCESS",
        payload: productDetails
    }
}

const fetchProductDetailsFailure = error => {
    return {
        type: "FETCH_PRODUCTS_DETAILS_FAILURE",
        payload: error
    }
}
export const fetchProductDetails = (id) => {
    return (dispatch) => {
        dispatch(fetchProductDetailsRequest());
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                const productDetails = response.data;
                dispatch(fetchProductDetailsSuccess(productDetails[id-1]))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchProductDetailsFailure(errorMsg))
            })
    }
}