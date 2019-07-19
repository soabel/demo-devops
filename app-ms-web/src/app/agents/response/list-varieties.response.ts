import { ListVarietiesResult } from '../result/list-varieties.result';

export class ListVarietiesResponse {
    result: ListVarietiesResult;

    constructor() {
        this.result = new ListVarietiesResult();
    }
}
