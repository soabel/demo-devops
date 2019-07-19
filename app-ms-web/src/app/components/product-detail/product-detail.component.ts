import { Component, OnInit } from '@angular/core';
import { FormModalComponent } from '../form-modal/form-modal.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogService, MessageService} from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { ListProductsRequest } from 'src/app/agents/request/list-products.request';
import { ConsultantService } from 'src/app/services/consultant.service';
import { ListProductsItemsResult } from 'src/app/agents/result/list-products-items.result';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
  providers: [DialogService, MessageService]
})
export class ProductDetailComponent implements OnInit {
  items: { vin: string; year: number; brand: string; color: string; }[];
  name: any;
  tel: any;
  mail: any;
  cuv: any;
  codigoIso = 'PE';
  campaniaId = '201910';
  listProductsRequest: ListProductsRequest;
  ItemProductsItemsResult: ListProductsItemsResult;
  breadcrumb: ({ label: string; url?: undefined; } | { label: string; url: string; })[];

  constructor(
    public dialogService: DialogService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private consultantService: ConsultantService
  ) { }

  ngOnInit() {

    this.items = [
      {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'},
      {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
      {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
      {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'}
  ];

    this.route.params.subscribe(params => {
      this.cuv = +params['cuv'];
      this.cuv = isNaN(this.cuv) ? 'P' : this.cuv;
      this.ListProducts();
    });
    this.breadcrumb = [
        {label: 'Home'},
        {label: 'Producto Detalle'}
    ];

  }

  showConfirm() {
      this.messageService.clear();
      this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
  }

  ListProducts() {
    const listProductsRequest = new ListProductsRequest();
    listProductsRequest.codigoIso = this.codigoIso;
    listProductsRequest.campaniaId = this.campaniaId;

    this.consultantService.ListProducts(listProductsRequest)
      .subscribe(response => {
        response.result.productos.map(x => {
          switch (x.marcaId) {
            case 1:
              x.marca = 'LBEL';
              break;
            case 2:
              x.marca = 'ESIKA';
              break;
            case 3:
              x.marca = 'CYZONE';
              break;
            default: x.marca = '';
          }
        });
        if (this.cuv.toString().startsWith('P')) {
          this.ItemProductsItemsResult = new ListProductsItemsResult();
          this.ItemProductsItemsResult.CUV = 'P1';
          this.ItemProductsItemsResult.imagen = '../../assets/Cremas.png';
          this.ItemProductsItemsResult.descripcion = 'SET VIBRANZA';
          this.ItemProductsItemsResult.precio = 50;
          this.breadcrumb.push({label: 'SET VIBRANZA'});
        } else {
          this.ItemProductsItemsResult = response.result.productos.filter(x => x.CUV === this.cuv.toString())[0];
          this.breadcrumb.push({label: this.ItemProductsItemsResult.descripcion});
        }
      });
  }

  succesBtn() {
    this.router.navigate(['./map', this.cuv], { relativeTo: this.route.parent });
  }

  openModal() {
    this.dialogService.open(FormModalComponent, {
      header: 'Choose a Car',
      width: '70%'
  });
  }

}
