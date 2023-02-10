import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 ngOnInit(): void {
  // const navMenu: any = document.querySelector(".nav_home");

  // window.addEventListener("scroll", function (event) {
  //   event.preventDefault();
  //   if (window.scrollY > 880) {
  //     navMenu.classList.add("nav-colorida");
  //   } else {
  //     navMenu.classList.remove("nav-colorida");
  //   }
  // });

  // // Toggle display menu hambúrguer
  // const hbMenu: any = document.querySelector(".home__menu-hb");

  // hbMenu.addEventListener("click", function () {
  //   if (navMenu.style.display === "block") {
  //     navMenu.style.display = "none";
  //   } else {
  //     navMenu.style.display = "block";
  //   }
  // });  
 };
}
