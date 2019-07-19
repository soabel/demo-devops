import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MapComponent } from './components/map/map.component';

export const ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'detail/:cuv', component: ProductDetailComponent },
    { path: 'map/:cuv', component: MapComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];