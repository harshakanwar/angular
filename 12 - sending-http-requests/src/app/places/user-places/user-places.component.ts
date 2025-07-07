import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit{
  
  private placesService = inject(PlacesService);
  isFetching = signal(false);
  error = signal('');
  places = this.placesService.loadedUserPlaces;

  private destroyRef = inject(DestroyRef)
  
     ngOnInit() {
      this.isFetching.set(true);
      const subscription = this.placesService.loadUserPlaces().subscribe({
    
        complete : () => {
          this.isFetching.set(false)
        },
        error : (error) =>{
          console.log(error.message)
          this.error.set(error.message)
        }
      });
  
      this.destroyRef.onDestroy(() =>{
        subscription.unsubscribe();
  
      })
    }

    onClick(place : Place) {
   const subscription = this.placesService.removeUserPlace(place).subscribe();
  
      this.destroyRef.onDestroy(() =>{
        subscription.unsubscribe();
  
      })
  }
}
