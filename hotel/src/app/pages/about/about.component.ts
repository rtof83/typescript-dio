import { Component } from '@angular/core';
import dbAccommodations from 'src/app/data/dbAccommodations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  accommodations: any = dbAccommodations;
}
