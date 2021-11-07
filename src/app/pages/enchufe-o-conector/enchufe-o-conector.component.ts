import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

// Services
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-enchufe-o-conector',
  templateUrl: './enchufe-o-conector.component.html',
  styleUrls: ['./enchufe-o-conector.component.css']
})
export class EnchufeOConectorComponent implements OnInit {
  public title: string = 'Enchufe o conector'
  public products: Product[] = [];

  constructor( 
    private router: Router,
    private productsService: ProductsService
  ) { 
    this.products = productsService.enchufesOCenectores;
    console.log( this.products );
  }

  ngOnInit(): void {
  }

  onProduct( product: Product ) {
    this.router.navigate([ '/producto', product.id ])
  }
}
