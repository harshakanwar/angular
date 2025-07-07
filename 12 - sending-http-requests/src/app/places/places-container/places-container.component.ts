import { Component, inject, Input, input } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-places-container',
  standalone: true,
  imports: [],
  templateUrl: './places-container.component.html',
  styleUrl: './places-container.component.css'
})
export class PlacesContainerComponent {

  private placesService = inject(PlacesService)
  title = input.required<string>();
  @Input({}) place = new Input();


}
