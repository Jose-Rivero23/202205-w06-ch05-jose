import { ProductModel } from "../../models/product-models";
import * as action from "./action.creators";

import { productsReducer } from "./products.reducer";

describe("Given UserReducer", () => {
    const mockedArray: Array<ProductModel> = [
        {
            name: "Manta Térmica",
            id: 123,
            description:
                "La mejor si te la dio jesus, en otro caso es solo una manta del chino",
            discount: true,
            price: 100,
            inStock: 50,
            category: "first",
            image: "manta.jpg",
        },
        {
            name: "Manta para el veranito",
            id: 23423,
            description:
                "La mejor si te la dio jesus, en otro caso es solo una manta del chino",
            discount: true,
            price: 100,
            inStock: 50,
            category: "first",
            image: "manta.jpg",
        },
    ];

    describe("When calling it with load action with an array products", () => {
        test("Then it should return a new state with the action payload", () => {
            //Arrange
            const initialState: ProductModel[] = [];
            const actionForTest = action.loadProductsAction(mockedArray);
            //Act

            const newState = productsReducer(initialState, actionForTest);
            //Assert
            expect(newState).toEqual(mockedArray);
            expect(newState).toHaveLength(2);
        });
    });
    describe("When calling it with add action with an array products", () => {
        test("It should return a new state with the characeter added", () => {
            const initialState: ProductModel[] = [mockedArray[0]];
            const AddProductModel = { ...mockedArray[0], name: "pepe", id: 5 };
            const actionForTest = action.addProductAction(AddProductModel);
            // Act

            const newState = productsReducer(initialState, actionForTest);
            //Asse
            expect(newState).toHaveLength(2);
        });
    });
    describe("When calling it with update action an array products", () => {
        test("It should return a new state with the ProductModel updated", () => {
            //Arrange
            const initialState: ProductModel[] = [mockedArray[0]];
            const updateProductModel = { ...mockedArray[0], name: "pepe" };
            const actionForTest =
                action.updateProductAction(updateProductModel);
            // Act

            const newState = productsReducer(initialState, actionForTest);
            //Asse
            expect(newState).toHaveLength(1);
            expect(newState).toEqual([updateProductModel]);
        });
    });
    describe("When calling it with update action an same array products", () => {
        test("It should return a new state with the ProductModel updated", () => {
            //Arrange
            const initialState: ProductModel[] = [mockedArray[0]];
            const updateProductModel = { ...mockedArray[0] };
            const actionForTest =
                action.updateProductAction(updateProductModel);
            // Act

            const newState = productsReducer(initialState, actionForTest);
            //Asse
            expect(newState).toHaveLength(1);
            expect(newState).toEqual(initialState);
        });
    });
    describe("When calling it with delete action", () => {
        test("It should load the mocked array of productss without the deleted one", () => {
            const initialState: ProductModel[] = [mockedArray[0]];
            const deleteProductModel = { ...mockedArray[0], id: 1 };
            const actionForTest =
                action.deleteProductAction(deleteProductModel);
            // Act

            const newState = productsReducer(initialState, actionForTest);
            //Asse
            expect(newState).toHaveLength(1);
        });
    });
});
