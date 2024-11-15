import { NgIf } from '@angular/common';
import { Component, inject, OnInit, output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { TextInputComponent } from '../../shared/text-input/text-input.component';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, TextInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  private accountService = inject(AccountService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  cancelRegister = output<boolean>();
  registerForm: FormGroup = new FormGroup({});
  validationErrors: string[] | undefined;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), 
          Validators.maxLength(10)]],
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value ? null : {isMatching: true}
    }
  }

  register() {
    this.accountService.register(this.registerForm.value).subscribe({
      next: _ => this.router.navigateByUrl('/dashboard') ,
      error: error => this.validationErrors = error
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
