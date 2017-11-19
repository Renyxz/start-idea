import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  showNav() {
    const nav = document.getElementById('nav');
    nav.style.height = '100%';
  }

  hideNav() {
    const nav = document.getElementById('nav');
    const navItems = document.getElementById('nav-i');

    if (window.innerWidth <= 700) {
      nav.style.height = '0%';

      // Fix nav list wrapper breaking, still looking for the perfect fix.
      navItems.style.marginTop = '4px';
      navItems.style.marginBottom = '4px';
    }

  }


}
