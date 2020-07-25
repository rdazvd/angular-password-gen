import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onButtonClick() {
    console.log('includeLetters', this.includeLetters);
    console.log('includeNumbers', this.includeNumbers);
    console.log('includeSymbols', this.includeSymbols);
    this.password = 'my password';
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  getPassword() {
    return this.password;
  }
}
