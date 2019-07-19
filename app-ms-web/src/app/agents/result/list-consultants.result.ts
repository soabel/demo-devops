import { ListConsultantsItemResult } from './list-consultants-item.result';

export class ListConsultantsResult {
    public items: ListConsultantsItemResult[];

    constructor() {
        this.items = [];
    }
}
