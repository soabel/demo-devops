import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { FindConsultantComponent } from './modules/FindConsultant/find-consultant.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import { BannerComponent } from './components/banner/banner.component';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import {CarouselModule} from 'primeng/carousel';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import { ConsultantService } from './services/consultant.service';
import {GMapModule} from 'primeng/gmap';
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {TableModule} from 'primeng/table'; 

@NgModule({
  declarations: [
    AppComponent,
    FindConsultantComponent,
    BannerComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    ProductDetailComponent,
    ProductItemComponent,
    FormModalComponent,
    MapComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GMapModule,
    AccordionModule,
    InputSwitchModule,
    DropdownModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    CarouselModule,
    TableModule,
    BreadcrumbModule,
    RouterModule.forRoot( ROUTES, { useHash: false } ),
    
  ],
  providers: [
    ConsultantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
