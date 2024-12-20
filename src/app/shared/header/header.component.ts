import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ISidebarData } from '../navbar-mobile/helper';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

import { LoginService } from '../../features/auth/login/_services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  @ViewChild('header', { read: ElementRef }) header!: ElementRef;

  mdq!: MediaQueryList;
  mediaQueryListener!: () => void;

  data: ISidebarData[] = [
    { routeLink: '/coffe-shop', labelTag: 'cafeterias' },
    { routeLink: '/maps', labelTag: 'mapa' },
    { routeLink: '/vouchers', labelTag: 'promoções' },
  ];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public loginService: LoginService,
    private media: MediaMatcher,
    private router: Router
  ) {
    this.mdq = media.matchMedia('(max-width: 992px)');
    this.mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mdq.addListener(this.mediaQueryListener);
  }

  getActiveClass(data: ISidebarData): string {
    return data.routeLink && this.router.url.includes(data.routeLink)
      ? 'active'
      : '';
  }

  signOut() {
    this.loginService.logout();
  }

  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY > 1.5 && this.header && this.header.nativeElement) {
      this.header.nativeElement.style.boxShadow =
        '2px 4px 15px 1px rgba(0, 0, 0, 0.2)';
      this.header.nativeElement.style.backdropFilter = 'blur(20px)';
    } else if (this.header && this.header.nativeElement) {
      this.header.nativeElement.style.boxShadow = 'none';
      this.header.nativeElement.style.backdropFilter = 'none';
    }
  }
}
