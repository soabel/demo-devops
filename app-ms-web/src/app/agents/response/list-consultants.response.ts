import { ListConsultantsResult } from '../result/list-consultants.result';

export class ListConsultantsResponse {
    result: ListConsultantsResult;

    constructor() {
        this.result = new ListConsultantsResult();
    }
}
