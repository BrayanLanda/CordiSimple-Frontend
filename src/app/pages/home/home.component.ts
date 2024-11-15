import { Component } from '@angular/core';
import { NavComponent } from "../../layout/nav/nav.component";
import { RegisterComponent } from "../../auth/register/register.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  registerMode = false;

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}
