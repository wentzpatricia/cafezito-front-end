import { Component } from '@angular/core';
import { LoaderService } from '../../core/services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progress-loader',
  templateUrl: './progress-loader.component.html',
  styleUrl: './progress-loader.component.scss'
})
export class ProgressLoaderComponent {
  loading = false;
  private subscription: Subscription;

  constructor(private loadingService: LoaderService) {
    this.subscription = this.loadingService.loading$.subscribe(
      (loading) => (this.loading = loading)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}