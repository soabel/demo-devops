import { ListVarietiesResult } from 'src/app/agents/result/list-varieties.result';

export class ListVarietiesViewModel {
    result: ListVarietiesResult;

    constructor() {
        this.result = new ListVarietiesResult();
    }
}
