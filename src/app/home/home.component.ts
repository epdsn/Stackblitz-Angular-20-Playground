import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../shared-imports';

@Component({
  selector: 'app-home',
  imports: SHARED_IMPORTS,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string | undefined = undefined;
  nameInput: string = '';

  submitName() {
    if (this.nameInput.trim()) {
      this.name = this.nameInput.trim();
      this.nameInput = '';
      console.log('Name submitted:', this.name);
    }
  }
}
