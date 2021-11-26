import { ActionTypes } from "../contants/action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";

export const fetchProducts = () => async dispatch => {    // GET DATA DENGAN REDUX THUNK
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async dispatch => {    // GET DATA DENGAN REDUX THUNK
  const response = await fakeStoreApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = products => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
};

export const selectedProducts = product => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  };
};

export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT
  };
};
