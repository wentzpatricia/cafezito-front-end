import { Component, Input } from '@angular/core';
import { Rating } from '../../_models/list-coffee.interface';

@Component({ selector: 'app-list-rating', templateUrl: './list-rating.component.html', styleUrl: './list-rating.component.scss' })
export class ListRatingComponent {
  @Input() rating!: Rating[];
}
