import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { ContactInfoComponent } from './components/contact-info/contact-info';
import { SocialLinksComponent } from './components/social-links/social-links';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, ContactInfoComponent, SocialLinksComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {}
