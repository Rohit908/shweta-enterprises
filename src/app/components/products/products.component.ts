import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product {
  name: string;
  category: string;
  icon: string;
  image: string;
  desc: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  activeTab: 'uniforms' | 'labels' = 'uniforms';

  uniforms: Product[] = [
    { name: 'Security Uniform', category: 'Uniform', icon: '🛡️', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80', desc: 'Professional, authoritative security uniforms with comfort and durability.' },
    { name: 'Housekeeping Uniform', category: 'Uniform', icon: '🧹', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', desc: 'Functional and neat uniforms for housekeeping and hospitality staff.' },
    { name: 'School Uniform', category: 'Uniform', icon: '🎒', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80', desc: 'Smart, durable school uniforms in custom colors and styles.' },
    { name: 'Industrial Uniform', category: 'Uniform', icon: '🔧', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80', desc: 'Heavy-duty industrial workwear for safety and performance.' },
    { name: 'Corporate Uniform', category: 'Uniform', icon: '💼', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', desc: 'Elegant corporate uniforms that convey professionalism.' },
    { name: 'Hospital Uniform', category: 'Uniform', icon: '🏥', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80', desc: 'Hygienic and comfortable medical & hospital staff uniforms.' },
    { name: 'Hotel Uniform', category: 'Uniform', icon: '🏨', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', desc: 'Stylish hotel staff uniforms that elevate your brand presence.' },
    { name: 'T-Shirts', category: 'Uniform', icon: '👕', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', desc: 'Custom branded t-shirts for events, teams and promotions.' },
  ];

  labels: Product[] = [
    { name: 'Printed Label', category: 'Label', icon: '🖨️', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80', desc: 'High-quality printed labels in any size, color and design.' },
    { name: 'Woven Label', category: 'Label', icon: '🧵', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80', desc: 'Premium woven fabric labels for garments and clothing brands.' },
    { name: 'Tags', category: 'Label', icon: '🏷️', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80', desc: 'Custom hang tags and price tags to complete your product presentation.' },
    { name: 'Woven Bags', category: 'Label', icon: '👜', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80', desc: 'Durable woven bags for retail, gifting, and brand promotion.' },
  ];

  get currentProducts(): Product[] {
    return this.activeTab === 'uniforms' ? this.uniforms : this.labels;
  }
}
