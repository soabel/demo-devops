import { ListProductsResult } from 'src/app/agents/result/list-products.result';

export class ListProductsViewModel {
    result: ListProductsResult;

    constructor() {
        this.result = new ListProductsResult();
    }
}
