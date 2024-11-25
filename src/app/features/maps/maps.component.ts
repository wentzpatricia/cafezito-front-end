import { Component } from '@angular/core';
import { ProductTagEnum } from '../coffe-shop/_models/coffee-shop.enum';

@Component({ selector: 'app-maps', templateUrl: './maps.component.html', styleUrl: './maps.component.scss' })
export class MapsComponent {
    
    onFiltersChanged(activeFilters: ProductTagEnum[]): void {
        console.log(activeFilters)
      }
}
