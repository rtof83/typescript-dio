import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  ngOnInit(): void {
    const seta: any = document.querySelector(".seta");
    seta.addEventListener("click", function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  };
};
