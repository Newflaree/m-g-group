import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

// Services
import {ProductsService} from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public product: any;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {  }

  ngOnInit(): void {
    const { id } =  this.activatedRoute.snapshot.params;
    const product = this.productsService.findById(id);

    this.product = product
    console.log( this.product );

  }

}
