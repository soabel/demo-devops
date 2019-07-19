import { ListProductsResult } from '../result/list-products.result';

export class ListProductsResponse {
    result: ListProductsResult;

    constructor() {
        this.result = new ListProductsResult();
    }
}
