import { Component } from '@angular/core';
import { ProductsComponent } from '../../components/products/products.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductsComponent, RouterLink],
  template: `
    <div class="page-hero">
      <div class="container">
        <span class="section-label">What We Make</span>
        <h1 class="section-title">Our <span>Products</span></h1>
        <p>Uniforms and labels crafted for every industry</p>
      </div>
    </div>
    <app-products></app-products>
    <div class="page-cta">
      <div class="container">
        <h3>Need a custom uniform or label?</h3>
        <a routerLink="/contact" class="btn-primary">Request a Quote →</a>
      </div>
    </div>
  `,
  styles: [`
    .page-hero {
      background: var(--navy);
      padding: 160px 0 80px;
      text-align: center;
      .section-title { color: var(--white); }
      p { color: rgba(255,255,255,0.6); font-size: 1.05rem; }
    }
    .page-cta {
      background: var(--cream);
      padding: 72px 0;
      text-align: center;
      border-top: 1px solid var(--border);
      .container { display: flex; flex-direction: column; align-items: center; gap: 24px; }
      h3 { font-family: var(--font-display); font-size: 1.8rem; color: var(--navy); }
    }
  `]
})
export class ProductsPageComponent {}
