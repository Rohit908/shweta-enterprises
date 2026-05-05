import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;
  loading = false;

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.submitted = true;
      this.loading = false;
    }, 1000);
  }

  reset() {
    this.submitted = false;
    this.form = { name: '', email: '', phone: '', subject: '', message: '' };
  }
}
