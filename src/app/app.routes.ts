import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NonAuthGuard } from './core/guards/non-auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [NonAuthGuard],
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    canActivate: [NonAuthGuard],
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'coffe-shop',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/coffe-shop/coffe-shop.module').then((m) => m.CoffeShopModule),
  },
  {
    path: 'maps',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/maps/maps.module').then((m) => m.MapsModule),
  },
  {
    path: 'vouchers',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/vouchers/vouchers.module').then((m) => m.VouchersModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' } 
];
