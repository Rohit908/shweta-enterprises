import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  reasons = [
    { icon: '🏭', title: 'Direct Manufacturer', desc: 'We manufacture in-house — no middlemen, ensuring quality control at every step and better pricing.' },
    { icon: '🎨', title: 'Custom Designs', desc: 'Fully customizable uniforms and labels tailored to your exact brand identity and requirements.' },
    { icon: '🧵', title: 'Premium Fabrics', desc: 'We source the finest fabrics — breathable, durable, and comfortable for all-day wear.' },
    { icon: '⏱️', title: 'On-Time Delivery', desc: 'We respect deadlines. Our streamlined production ensures timely delivery for all order sizes.' },
    { icon: '💰', title: 'Competitive Pricing', desc: 'Quality products at competitive prices — no hidden costs, transparent quotes every time.' },
    { icon: '🤝', title: 'Client-First Approach', desc: 'We build lasting partnerships. Your satisfaction is our measure of success.' },
  ];
}
