import { Component, OnInit } from '@angular/core';
import { ListConsultantsRequest } from 'src/app/agents/request/list-consultants.request';
import { ConsultantService } from 'src/app/services/consultant.service';
import { ListConsultantsViewModel } from './viewmodel/list-consultants.viewmodel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  breadcrumb: { label: string; }[];
  currentLocation: Coordinates;
  options: any;
  overlays: any[];
  listConsultantRequest: ListConsultantsRequest;
  codigoIso = 'PE';
  viewmodel: ListConsultantsViewModel;
  cuv: any;

  constructor(
    private consultantService: ConsultantService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.viewmodel = new ListConsultantsViewModel();
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cuv = +params['cuv'];
      this.cuv = isNaN(this.cuv) ? 'P' : this.cuv;
      this.listConsultants();
    });
    
    this.breadcrumb = [
        {label:'Home'},
        {label:'Producto Detalle'},
        {label:'SET VIBRANZA'},
        {label:'Mapa'}
    ];
    this.listConsultants();
  }

  listConsultants() {
      const listConsultantRequest = new ListConsultantsRequest();
      listConsultantRequest.codigoIso = this.codigoIso;
      this.consultantService.ListConsultants(listConsultantRequest)
        .subscribe(response => {
          this.viewmodel.result = response.result;
          this.getPosition();
        });
  }

  getPosition() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        /* Location tracking code */
        this.currentLocation = position.coords;
        this.options = {
          center: {lat: this.currentLocation.latitude, lng: this.currentLocation.longitude},
          zoom: 12
        };
        this.overlays = [];
        // this.viewmodel.result.items.forEach(x => {
        //   this.overlays.push(new google.maps.Marker({position: {lat: x.latitude, lng: x.longitude}, title: 'Consultora'}));
        // });
      },
      (failure) => {
        if (failure.message.indexOf("Only secure origins are allowed") == 0) {
          alert('Only secure origins are allowed by your browser.');
        }
      }
    );
  }

}
