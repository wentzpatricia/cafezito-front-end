import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ISidebarData, fadeInOut } from './helper';
import { LoginService } from '../../features/auth/login/_services/login.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss',
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate(
          '200ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(1turn)', offset: '1' }),
          ])
        ),
      ]),
    ]),
  ],
})

export class NavbarMobileComponent {
  @Input() navsideData!: ISidebarData[];
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  @Output() darkThemeOn: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('sidenavs', { read: ElementRef }) elementNav: | ElementRef | undefined;

  collapsed = false;
  loadingImage!: boolean;
  logo: string = '../../../assets/icones/graos-de-cafe.svg';
  multiple: boolean = false;
  profileImage!: string;
  screenWidth = 0;
  sub!: string;
  systemPicture: string | undefined;

  constructor(
    public loginService: LoginService,
    public router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.screenWidth = window.innerWidth;

    document.addEventListener('click', this.handleClickOutside.bind(this));
  }
  
  getActiveClass(data: ISidebarData): string {
    return data.routeLink && this.router.url.includes(data.routeLink)
      ? 'active'
      : '';
  }

  handleClickOutside(event: MouseEvent): void {
    const menuElement = this.elementNav?.nativeElement;

    if ( this.collapsed && menuElement && !menuElement.contains(event.target as Node)) {
      this.collapsed = !this.collapsed;

      this.onToggleSideNav.emit({
        collapsed: this.collapsed, 
        screenWidth: this.screenWidth,
      });

      this.removeBodyOverlay();
    }
  }

  shrinkItems(item: ISidebarData): void {
    if (this.multiple) return;

    for (let modelItem of this.navsideData) {
      if (item !== modelItem && modelItem.expanded) {
        modelItem.expanded = false;
      }
    }
  }

  signOut() {
    this.loginService.logout();
  }

  toggleCollapse(): void {
    if (this.collapsed) {
      this.removeBodyOverlay();
      return;
    }
    this.addBodyOverlay();

    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  private addBodyOverlay(): void {
    document.body.classList.add('body-overlay');
  }

  private removeBodyOverlay(): void {
    document.body.classList.remove('body-overlay');
  }
}
