import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome() {
    document.getElementById( 'home' )
  }

  toAbout() {
    document.getElementById( 'about' )?.scrollIntoView({ behavior:'smooth' });
  }

  toContact() {
    document.getElementById( 'contact' )?.scrollIntoView({ behavior:'smooth' });
  }

}
