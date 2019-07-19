import { Component, OnInit } from '@angular/core';
import { ListProductsRequest } from 'src/app/agents/request/list-products.request';
import { ConsultantService } from 'src/app/services/consultant.service';
import { MessageService } from 'primeng/api';
import { ListVarietiesRequest } from 'src/app/agents/request/list-varieties.request';
import { ListVarietiesViewModel } from './viewmodel/list-varieties.viewmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {
  listProductsRequest: ListProductsRequest;
  listVarietiesRequest: ListVarietiesRequest;
  viewmodelVarieties: ListVarietiesViewModel;
  products: { brand: string; name: string; price: string; image: string; cuv: string; }[];
  cols: { field: string; header: string; }[];
  cars: { label: string; value: string; }[];
  constructor(
    private consultantService: ConsultantService,
    private messageService: MessageService
  ) {
    this.viewmodelVarieties = new ListVarietiesViewModel();

  }

  ngOnInit() {
      this.cars = [
          {label: 'Id', value: 'Id'},
          {label: 'Variedad', value: 'Variedad'}
      ];

      this.cols = [
          { field: 'Id', header: 'Id' },
          {field: 'Variedad', header: 'Variedad' }
      ];
      this.ListVarieties();
    }

  ListVarieties() {
    const listVarietiesRequest = new ListVarietiesRequest();
    listVarietiesRequest.idProducto = 1;

    this.consultantService.ListVarieties(listVarietiesRequest)
      .subscribe(response => {
        this.viewmodelVarieties.result = response.result;
        this.viewmodelVarieties.result.items.sort((a, b) => {
          return (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0);
        });
      });
  }

}
