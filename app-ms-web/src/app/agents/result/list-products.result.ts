import { ListProductsItemsResult } from './list-products-items.result';

export class ListProductsResult {
    public total: number;
    public productos: ListProductsItemsResult[];

    constructor() {
        this.productos = [];
    }
}
