import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent],
  template: `
    <div class="page-hero">
      <div class="container">
        <span class="section-label">Get In Touch</span>
        <h1 class="section-title">Contact <span>Us</span></h1>
        <p>We'd love to hear about your uniform requirements</p>
      </div>
    </div>
    <app-contact></app-contact>
    <div class="map-embed">
      <div class="container">
        <h3>Find Us</h3>
        <div class="map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.2627740149484!2d72.93517922534592!3d19.153604352473096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9795f54a79f%3A0x7645be3c09620716!2sShweta%20Enterprises!5e0!3m2!1sen!2sin!4v1781437088155!5m2!1sen!2sin"
            width="100%"
            height="360"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            title="Shweta Enterprises location">
          </iframe>
        </div>
        <p class="map-address">📍 B-4/9 Sadan Wadi Lake Road, Opp Sharad Industrial, near Bhandup (W), Mumbai - 400078</p>
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
    .map-embed {
      background: var(--cream);
      padding: 72px 0;
      border-top: 1px solid var(--border);
      h3 { font-family: var(--font-display); font-size: 1.5rem; color: var(--navy); margin-bottom: 24px; }
    }
    .map-frame { border-radius: 12px; overflow: hidden; box-shadow: var(--shadow); }
    .map-address { margin-top: 16px; color: var(--gray); font-size: 0.9rem; }
  `]
})
export class ContactPageComponent {}
