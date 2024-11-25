import { Component } from '@angular/core';
import { ProductTagEnum } from '../coffe-shop/_models/coffee-shop.enum';

@Component({ selector: 'app-maps', templateUrl: './maps.component.html', styleUrl: './maps.component.scss' })
export class MapsComponent {

  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };
    
    onFiltersChanged(activeFilters: ProductTagEnum[]): void {
        console.log(activeFilters)
      }
}
