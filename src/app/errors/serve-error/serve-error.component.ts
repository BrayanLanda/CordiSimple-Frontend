import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serve-error',
  standalone: true,
  imports: [],
  templateUrl: './serve-error.component.html',
  styleUrl: './serve-error.component.css'
})
export class ServeErrorComponent {
  error: any;

  constructor(private router: Router) {
   const navigation = this.router.getCurrentNavigation();
   this.error = navigation?.extras.state?.['error'];
  }
}
