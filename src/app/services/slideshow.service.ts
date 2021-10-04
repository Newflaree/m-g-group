import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {
  public slideImgs:any = [
      {
        id: '123123',
        name: 'img-1',
        url: ''
      },
      {
        id: '123123',
        name: 'img-1',
        url: ''
      },
      {
        id: '123123',
        name: 'img-1',
        url: ''
      },
      {
        id: '123123',
        name: 'img-1',
        url: ''
      },
  ];

  constructor() {
  }


}
