import { createAction } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product-models";
import { actionTypes } from "./action.types";

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadProductsAction = createAction<Array<ProductModel>>(
    actionTypes["products@load"]
);

export const addProductAction = createAction<ProductModel>(
    actionTypes["products@add"]
);

export const updateProductAction = createAction<ProductModel>(
    actionTypes["products@update"]
);

export const deleteProductAction = createAction<ProductModel>(
    actionTypes["products@delete"]
);
