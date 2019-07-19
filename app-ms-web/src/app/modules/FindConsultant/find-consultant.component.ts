import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'app-find-consultant',
    templateUrl: './find-consultant.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: []
  })

  export class FindConsultantComponent implements OnInit {

    ngOnInit() {
        console.log('hola');
    }
  }
