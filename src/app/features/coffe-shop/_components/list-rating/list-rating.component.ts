import { Component, Input } from '@angular/core';
import { Rating } from '../../_models/rating.interface';

@Component({ selector: 'app-list-rating', templateUrl: './list-rating.component.html', styleUrl: './list-rating.component.scss' })
export class ListRatingComponent {
  
  @Input() rating!: Rating[];
  @Input() average: number = 0;

  createRange(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

}
