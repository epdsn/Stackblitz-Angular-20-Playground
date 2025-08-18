import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-readonly-and-consts',
  imports: [FormsModule],
  templateUrl: './readonly-and-conts.component.html',
  styleUrl: './readonly-and-conts.component.css'
})
export class ReadonlyAndConsts {

  // readonly const - cannot be reassigned, but object properties can be modified
  readonly fooOne = { one: '1' } as const;
  

  // readonly value - cannot be reassigned (but can be modified if not const)
  readonly fooRO = 54;

  // Keep track of original value
  originalValue = 'OG Object';
  hasBeenModified = false;
  
  // Input value for readonly demonstration
  readonlyInputValue: number = 100;

  // Regular object that we can modify
  regularObject = { value: this.originalValue };
  
  constMessage = 'Click buttons to see what happens!';
  roMessage = `readonly value: ${this.fooRO}`;
  regularMessage = `regular object: ${this.regularObject.value}`;

  ngOnInit() {
    fromEvent<MouseEvent>(document, 'click')
      .pipe(scan((count: number, _event: MouseEvent) => count + 1, 0))
      .subscribe((count) => console.log(`Clicked ${count} times`));
  }

  changeConst() {
    try {
      // Try to modify the object property (this will work!)
      (this.fooOne as any).one = '2';
      this.constMessage = `Const object property changed to: ${this.fooOne.one}`;
    } catch (error) {
      this.constMessage = 'Error: Cannot modify const object!';
      console.error('Error:', error);
    }
  }

  reassignConst() {
    try {
      // Try to reassign the entire const (this will fail!)
      (this.fooOne as any) = { one: '3' };
      this.constMessage = 'Const reassigned successfully!';
    } catch (error) {
      this.constMessage = 'Error: Cannot reassign const!';
      console.error('Error:', error);
    }
  }

  changeReadonlyWithInput() {
    try {
      // Try to change readonly value with user input
      (this.fooRO as any) = this.readonlyInputValue;
      this.roMessage = `readonly changed to: ${this.fooRO}`;
    } catch (error) {
      this.roMessage = `Error: Cannot change readonly value to ${this.readonlyInputValue}!`;
      console.error('Error:', error);
    }
  }

  // This method shows what compile-time errors look like
  // UNCOMMENT ANY OF THESE LINES TO SEE REAL COMPILE-TIME ERRORS:
  showCompileTimeErrorExamples() {
    //this.fooRO = 100;
    // this.fooOne.one = "2";
    // this.fooOne = { one: "3" };
    // const myConst = 42;
    // myConst = 100;
  }

  changeRegularObject() {
    // This will work - regular object can be modified
    this.regularObject.value = 'I\'m a newbie!';
    this.hasBeenModified = true;
    this.regularMessage = `Original: "${this.originalValue}" → Modified to: "${this.regularObject.value}"`;
  }

  resetRegularObject() {
    // Reset back to original value
    this.regularObject.value = this.originalValue;
    this.hasBeenModified = false;
    this.regularMessage = `regular object: ${this.regularObject.value}`;
  }

}

