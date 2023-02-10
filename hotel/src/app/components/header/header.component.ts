import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    // Toggle display menu hamburguer
    const hbMenu: any = document.querySelector(".topo__menu-hb");
    const navMenu: any = document.querySelector(".nav_menu");
    
    hbMenu.addEventListener("click", function () {
      if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "block";
      };
    });
  };
};
