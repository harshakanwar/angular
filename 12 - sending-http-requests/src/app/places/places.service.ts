import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {

  private errorService = inject(ErrorService);

  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);
  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces('http://localhost:3000/places',
       'Something went wrong while fetching the available places. Please try again later...');
  }

  loadUserPlaces() {
        return this.fetchPlaces('http://localhost:3000/user-places',
      'Something went wrong while fetching your favourite places. Please try again later...'
    ).pipe( 
      tap({
      next: (userPlaces) => this.userPlaces.set(userPlaces),

    })
  );

  }

  addPlaceToUserPlaces(place : Place) {
    const prevPlaces = this.userPlaces();

    if(!prevPlaces.some((p) => p.id ===place.id)){
     this.userPlaces.set([...prevPlaces, place]);
    }
    
    return this.httpClient.put('http://localhost:3000/user-places', {
    placeId : place.id
  }).pipe(catchError( error =>{
    this.userPlaces.set(prevPlaces);
    this.errorService.showError(`Failed to store selected Place : ${place.title}`)
    return throwError(() => new Error(`Failed to store selected Place : ${place.title}`));
  })
 );
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();

    if(prevPlaces.some((p) => p.id ===place.id)){
     this.userPlaces.set(prevPlaces.filter(p => p.id !== place.id));
    }
    
    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`)
    .pipe(catchError( error =>{
    this.userPlaces.set(prevPlaces);
    this.errorService.showError(`Failed to remove selected Place : ${place.title}`)
    return throwError(() => new Error(`Failed to remove selected Place : ${place.title}`));
  })
 );
  
  }

  private fetchPlaces(url : string, errorMessage : string){
    return this.httpClient.get<{places : Place[]}>(url).pipe( 
        map((resData) => resData.places),
        catchError( (error) => {
          console.log(error);
          return throwError(() => new Error(errorMessage));
  })
      )
  }
}
