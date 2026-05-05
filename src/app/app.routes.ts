import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.AboutPageComponent) },
  { path: 'products', loadComponent: () => import('./pages/products-page/products-page.component').then(m => m.ProductsPageComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact-page/contact-page.component').then(m => m.ContactPageComponent) },
  { path: '**', redirectTo: '' }
];
