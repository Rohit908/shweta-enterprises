import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProductsComponent } from '../../components/products/products.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, StatsComponent, AboutComponent, ProductsComponent, WhyUsComponent],
  template: `
    <app-hero></app-hero>
    <app-stats></app-stats>
    <app-about></app-about>
    <app-products></app-products>
    <app-why-us></app-why-us>
  `
})
export class HomeComponent {}
