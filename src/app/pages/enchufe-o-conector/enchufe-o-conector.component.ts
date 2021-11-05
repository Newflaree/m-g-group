import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enchufe-o-conector',
  templateUrl: './enchufe-o-conector.component.html',
  styleUrls: ['./enchufe-o-conector.component.css']
})
export class EnchufeOConectorComponent implements OnInit {
  public title: string = 'Enchufe o conector'

  public eocItems = [
    {
      id: '123123',
      url: '../../../assets/products/DIN 320 amp Hembra.png',
      name: 'CONECTOR SB120'
    },
    {
      id: '123121',
      url: '../../../assets/products/DIN 320 amp Hembra.png',
      name: 'CONECTOR SB350'
    },
    {
      id: '123122',
      url: '../../../assets/products/DIN 320 amp Hembra.png',
      name: 'CONECTOR SB175'
    },
    {
      id: '123131',
      url: '../../../assets/products/DIN 320 amp Hembra.png',
      name: 'CONECTOR PP30'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
