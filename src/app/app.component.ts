import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import { AuthGuard } from './core/guards/auth.guard';
import { LoaderService } from './core/services/loader.service';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CoreModule, SharedModule,  HttpClientModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  mdq: MediaQueryList;
  mediaQueryListener: () => void;

  constructor(
    private authGuard: AuthGuard,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    public loader: LoaderService,
    private router: Router
  ) {
    this.mdq = media.matchMedia('(max-width: 992px)');
    this.mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mdq.addListener(this.mediaQueryListener);

    this.routeEvent();
  }

  isUserAuthenticated(): boolean {
    return this.authGuard.isAuthenticated();
  }

  private routeEvent() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loader.show();
      }
      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        setTimeout(() => {
          this.loader.hide();
        }, 2000);
      }
    });
  }
}
