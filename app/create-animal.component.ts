import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'create-animal',
  template: `
  <h1>New Task</h1>
  <div *ngIf="createAnimalControl">
     <div>
       <label>Species:</label>
       <input #newSpecies>
     </div>
     <div>
       <label>Name:</label>
       <input #newName>
     </div>
     <div>
       <label>Age:</label>
       <input #newAge>
     </div>
     <div>
       <label>Diet:</label>
       <input #newDiet>
     </div>
     <div>
       <label>Location:</label>
       <input #newLocation>
     </div>
     <div>
       <label>Caretakers:</label>
       <input #newCaretakers>
     </div>
     <div>
       <label>Sex:</label>
       <select #newSex>
         <option [value]="Male"> Male </option>
         <option [value]="Female"> Female </option>
       </select>
     </div>
     <div>
       <label>Likes:</label>
       <input #newLikes>
     </div>
     <div>
       <label>Dislikes:</label>
       <input #newDislikes>
     </div>
      <button class="btn btn-primary" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value = ''; newName.value = ''; newAge.value = ''; newDiet.value = ''; newLocation.value = ''; newCaretakers.value = ''; newLikes.value = ''; newDislikes.value = '';">Add</button>

  </div>
  `
})

export class CreateAnimalComponent {
  @Input() createAnimalControl: boolean;
  @Output() newAnimalSender = new EventEmitter();


  submitForm(newSpecies: string, newName: string, newAge: number, newDiet: string, newLocation: string, newCaretakers: number, newSex: string, newLikes: string, newDislikes: string) {
    var newAnimalToAdd: Animal = new Animal(newSpecies, newName, newAge, newDiet, newLocation, newCaretakers, newSex, newLikes, newDislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
