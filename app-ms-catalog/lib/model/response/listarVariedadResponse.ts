export class ListarVariedadResponse {
    result: ListarVariedadResult;
    constructor() {
        this.result = new ListarVariedadResult();
    }
}

export class ListarVariedadResult {
    items: ListarVariedadItemResult[];
    constructor() {
        this.items = [];
    }
}

export class ListarVariedadItemResult {
    id: number;
    nombre: string;
    nombreCientifico: string;
    idProducto: number;
}
