import { Product } from './product';

export interface IProduct {

    _embedded : {
        products: Product[];
    }

}