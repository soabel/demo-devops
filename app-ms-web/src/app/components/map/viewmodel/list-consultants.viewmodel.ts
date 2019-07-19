import { ListConsultantsResult } from 'src/app/agents/result/list-consultants.result';

export class ListConsultantsViewModel {
    result: ListConsultantsResult;

    constructor() {
        this.result = new ListConsultantsResult();
    }
}
