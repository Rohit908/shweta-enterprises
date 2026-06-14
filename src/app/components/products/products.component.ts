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
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  activeTab: 'uniforms' | 'labels' = 'uniforms';

  uniforms: Product[] = [
    { name: 'Security Uniform', category: 'Uniform', icon: '🛡️', image: '/images/p1.jpg', desc: 'Professional, authoritative security uniforms with comfort and durability.' },
    { name: 'Housekeeping Uniform', category: 'Uniform', icon: '🧹', image: '/images/p2.jpg', desc: 'Functional and neat uniforms for housekeeping and hospitality staff.' },
    { name: 'School Uniform', category: 'Uniform', icon: '🎒', image: '/images/p3.jpg', desc: 'Smart, durable school uniforms in custom colors and styles.' },
    { name: 'Industrial Uniform', category: 'Uniform', icon: '🔧', image: '/images/p4.jpg', desc: 'Heavy-duty industrial workwear for safety and performance.' },
    { name: 'Corporate Uniform', category: 'Uniform', icon: '💼', image: '/images/p5.jpg', desc: 'Elegant corporate uniforms that convey professionalism.' },
    { name: 'Hospital Uniform', category: 'Uniform', icon: '🏥', image: '/images/p6.jpg', desc: 'Hygienic and comfortable medical & hospital staff uniforms.' },
    { name: 'Hotel Uniform', category: 'Uniform', icon: '🏨', image: '/images/p7.jpg', desc: 'Stylish hotel staff uniforms that elevate your brand presence.' },
    { name: 'T-Shirts', category: 'Uniform', icon: '👕', image: '/images/p8.jpg', desc: 'Custom branded t-shirts for events, teams and promotions.' },
  ];

  labels: Product[] = [
    { name: 'Printed Label', category: 'Label', icon: '🖨️', image: '/images/l1.jpg', desc: 'High-quality printed labels in any size, color and design.' },
    { name: 'Woven Label', category: 'Label', icon: '🧵', image: '/images/l2.jpg', desc: 'Premium woven fabric labels for garments and clothing brands.' },
    { name: 'Tags', category: 'Label', icon: '🏷️', image: '/images/l3.jpg', desc: 'Custom hang tags and price tags to complete your product presentation.' },
    { name: 'Woven Bags', category: 'Label', icon: '👜', image: '/images/l4.jpg', desc: 'Durable woven bags for retail, gifting, and brand promotion.' },
  ];

  get currentProducts(): Product[] {
    return this.activeTab === 'uniforms' ? this.uniforms : this.labels;
  }
}
