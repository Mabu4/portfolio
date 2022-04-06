import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuIsOpen = false;

  openMenu() {

    if(!this.menuIsOpen){
      document.getElementById('menu').style.transform = 'scaleY(1.0)';
      this.menuIsOpen = true;
    } else if (this.menuIsOpen) {
      document.getElementById('menu').style.transform = 'scaleY(0.0)';
      this.menuIsOpen = false;
    }
  }

}
