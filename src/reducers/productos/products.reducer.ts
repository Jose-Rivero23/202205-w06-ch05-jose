// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { createReducer } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product-models";
import * as ac from "./action.creators";

const initialState: Array<ProductModel> = [];
export const productsReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ac.loadProductsAction, (state, action) => [...action.payload])
        .addCase(ac.addProductAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(ac.updateProductAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(ac.deleteProductAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addDefaultCase((state) => state);
});

// export function taskReducer(
//     initialState: Array<TaskModel>,
//     action: iAction
// ): Array<TaskModel> {
//     let state: Array<TaskModel> = [];
//     switch (action.type) {
//         case actionTypes["tasks@load"]:
//             state = action.payload;
//             break;
//         case actionTypes["tasks@add"]:
//             state = [...initialState, action.payload];
//             break;
//         case actionTypes["tasks@update"]:
//             state = initialState.map((item) =>
//                 item.id === action.payload.id ? action.payload : item
//             );
//             break;
//         case actionTypes["tasks@delete"]:
//             state = initialState.filter(
//                 (item) => item.id !== action.payload.id
//             );
//             break;
//         default:
//             state = initialState;
//     }

//     return state;
// }
