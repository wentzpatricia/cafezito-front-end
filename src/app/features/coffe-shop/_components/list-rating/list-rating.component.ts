import { Component, Input } from '@angular/core';
import { Rating } from '../../_models/rating.interface';

@Component({ selector: 'app-list-rating', templateUrl: './list-rating.component.html', styleUrl: './list-rating.component.scss' })
export class ListRatingComponent {
  
  @Input() rating!: Rating[];
  @Input() average: number = 0;

  isDialogVisible = false;

  createRange(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }

  handleFormSubmit(event: Rating ) {

    event ? (this.rating.unshift(event), this.updateAverage(event)) : '';

    this.isDialogVisible = false;
  }

  showDialog() {
    this.isDialogVisible = true;
  }

  updateAverage(newRating: Rating) {
    const totalItems = this.rating.length;
    this.average = ((this.average * (totalItems - 1)) + newRating.stars) / totalItems;
  }

}
