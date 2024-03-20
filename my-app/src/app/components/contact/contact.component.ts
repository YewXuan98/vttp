import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {  CommonModule} from '@angular/common';
import { ContactMessage, ContactService } from '../../service/contact/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,  CommonModule, HttpClientModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [ContactService],
  animations:[]
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private contactService: ContactService) {}

  onSubmit() {
    // Here you can handle the form submission.
    // console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      const contactMessage: ContactMessage = {
        name: formValue.name!,
        email: formValue.email!,
        message: formValue?.message,
      };
      this.contactService.sendMessage(contactMessage).subscribe({
        next: (response: any) => console.log('Message sent successfully', response),
        error: (error: any) => console.error('There was an error!', error),
      });
  }}

  // Add methods to get form controls for validation messages if needed
}
