import dbAccommodations from 'src/app/data/dbAccommodations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})

export class AccommodationsComponent {
  accommodations: any = dbAccommodations;
};
