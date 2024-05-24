import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControlErrorMessagePipe } from '../../pipes/form-control-error-message.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [FormControlErrorMessagePipe,ReactiveFormsModule,CommonModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      // Diğer form kontrolleri burada eklenebilir
    });
  }
}
