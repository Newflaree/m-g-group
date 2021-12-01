import { Injectable } from '@angular/core';

// Interface
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productsData: Product[] = [
    {
      id: '111311',
      categ: 'eoc',
      name: 'CONECTOR SB120',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: [
	{ line: 'lalala' },
	{ line: 'lelele' },
	{ line: 'lilili' },
	{ line: 'lololo' },
	{ line: 'lululu' },
	{ line: 'lalala' },
	{ line: 'lelele' },
	{ line: 'lilili' },
      ],
    },
    {
      id: '111312',
      categ: 'eoc',
      name: 'CONECTOR SB350',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: [
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
      ],
    },
    {
      id: '111322',
      categ: 'eoc',
      name: 'CONECTOR SB175',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: [
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
      ],
    },
    {
      id: '111323',
      categ: 'eoc',
      name: 'CONECTOR PP30',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: [
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
      ],
    },
    {
      id: '222001',
      categ: 'per',
      name: 'Infiltrado',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: [
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
      ],
    },
    {
      id: '222002',
      categ: 'per',
      name: 'Infiltrado',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: [
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
      ],
    },
    {
      id: '333001',
      categ: 'poc',
      name: 'Infiltrado',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: [
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
      ],
    },
    {
      id: '444001',
      categ: 'cab',
      name: 'Infiltra3',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: [
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
	{ line: 'lalala' },
      ],
    },
  ];

  constructor() { }

  findById( id: string ) {
    const filtered = this.productsData.filter( ( element: Product ) => {
      return element.id === id
    });

    return {
      id: filtered[0].id,
      categ: filtered[0].categ,
      name: filtered[0].name,
      url: filtered[0].url,
      desc: filtered[0].description,
      espTech: filtered[0].espTech
    };
  }

  getProducts( categ: string ) {
    const products = this.productsData.filter( ( element: Product ) => {
      return element.categ === categ;
    })

    return products;
  }
}
