import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import {NotPageFoundComponent} from './not-page-found/not-page-found.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'about', component: HomeComponent  },
  { path: 'products', 
    component: ProductsComponent  
  },
  { path: 'contact', component: HomeComponent  },
  { path: '**', component: NotPageFoundComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouingModule { }
