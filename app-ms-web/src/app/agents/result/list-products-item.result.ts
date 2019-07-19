import { ListProductsItemsResult } from './list-products-items.result';

export class ListProductsItemResult {
    total: number;
    productos: ListProductsItemsResult[];

    constructor() {
        this.productos = [];
    }
}
