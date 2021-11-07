import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cables',
  templateUrl: './cables.component.html',
  styleUrls: ['./cables.component.css']
})
export class CablesComponent implements OnInit {
  public title: string = 'Cables'

  constructor() { }

  ngOnInit(): void {
  }

}
