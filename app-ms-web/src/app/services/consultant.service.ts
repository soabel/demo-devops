import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ListConsultantsRequest } from '../agents/request/list-consultants.request';
import { ListConsultantsResponse } from '../agents/response/list-consultants.response';
import { HttpClient } from '@angular/common/http';
import { ConsultantPaths } from './consultant.paths';
import { map } from 'rxjs/operators';
import { ListProductsRequest } from '../agents/request/list-products.request';
import { ListProductsResponse } from '../agents/response/list-products.response';
import { ListVarietiesRequest } from '../agents/request/list-varieties.request';
import { ListVarietiesResponse } from '../agents/response/list-varieties.response';

@Injectable()
export class ConsultantService {
    _url: string;

    constructor(private http: HttpClient) {
        this._url = environment.urlApiBelShopApp;
    }

    ListConsultants(request: ListConsultantsRequest): Observable<ListConsultantsResponse> {
        return this.http.post(`${this._url}${ConsultantPaths.ListConsultants}`, request)
            .pipe(map(response => response)) as Observable<ListConsultantsResponse>;
    }

    ListProducts(request: ListProductsRequest): Observable<ListProductsResponse> {
        return this.http
            .post(`${this._url}${ConsultantPaths.ListProducts}`, request)
            .pipe(map(r => r)) as Observable<ListProductsResponse>;
    }

    ListVarieties(request: ListVarietiesRequest): Observable<ListVarietiesResponse> {
        return this.http.post(`${this._url}${ConsultantPaths.ListVarieties}`, request)
            .pipe(map(response => response)) as Observable<ListVarietiesResponse>;
    }
}
