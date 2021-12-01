import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interfaces
import { Product } from 'src/app/interfaces/product';

// Services
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-pernos',
  templateUrl: './pernos.component.html',
  styleUrls: ['./pernos.component.css']
})
export class PernosComponent implements OnInit {
  public title: string = 'Pernos'
  public products: Product[] = [];
  private category: string = 'per';

  constructor( private router: Router, private productsService: ProductsService ) { 
    this.products = productsService.getProducts( this.category );
  }

  ngOnInit(): void {
  }

  onProduct( product: Product ) {
    this.router.navigate([ '/producto', product.id ])
  }
}
