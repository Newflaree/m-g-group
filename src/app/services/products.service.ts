import { Injectable } from '@angular/core';

// Interface
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public enchufesOCenectores: any = [
    {
      id: '121311',
      name: 'CONECTOR SB120',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: 'lalala'
    },
    {
      id: '121312',
      name: 'CONECTOR SB350',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: 'lelele'
    },
    {
      id: '121322',
      name: 'CONECTOR SB175',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: 'lilili'
    },
    {
      id: '121323',
      name: 'CONECTOR PP30',
      url: '../../assets/products/DIN 320 amp Hembra.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus quam id fringilla laoreet. Vivamus semper, justo a efficitur mollis, leo sapien sagittis ipsum, vitae laoreet erat velit at tortor. Etiam suscipit felis id magna blandit, sit amet finibus diam congue. Vivamus ac sem accumsan, rutrum tortor et, fermentum enim. ',
      espTech: 'lololo'
    },
  ];

  constructor() { }

  findById( id: string ) {
    const filtered = this.enchufesOCenectores.filter( ( element: Product ) => {
      return element.id === id
    });

    return {
      id: filtered[0].id,
      name: filtered[0].name,
      url: filtered[0].url,
      desc: filtered[0].description,
      espTech: filtered[0].espTech
    };
  }
}
