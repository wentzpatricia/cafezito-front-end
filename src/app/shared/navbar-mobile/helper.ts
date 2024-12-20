import { animate, style, transition, trigger } from '@angular/animations';

export interface ISidebarData {
  routeLink: string;
  labelTag: string;
  expanded?: boolean;
}

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('350ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('350ms', style({ opacity: 0 })),
  ]),
]);
