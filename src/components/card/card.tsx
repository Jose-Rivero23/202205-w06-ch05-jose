import { ProductModel } from "../../models/product-models";

export function Card(product: ProductModel) {
    const template = (
        <>
            <div>
                <div>
                    <img src={product.image} alt="" />
                </div>

                <div>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>{product.price} €</p>
                    <p>In stock: {product.inStock}</p>
                </div>
            </div>
        </>
    );
    return template;
}
