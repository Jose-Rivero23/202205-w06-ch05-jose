export interface iProduct {
    name: string;
    id: number;
    description: string;
    discount: boolean;
    price: number;
    inStock: number;
    category: string;
    image: string;
}

export class ProductModel implements iProduct {
    id: number;
    discount: boolean;

    static generateId(): number {
        return Math.ceil(Math.random() * 100_000);
    }
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public inStock: number,
        public category: string,
        public image: string
    ) {
        this.discount = false;
        this.id = ProductModel.generateId();
    }
}
