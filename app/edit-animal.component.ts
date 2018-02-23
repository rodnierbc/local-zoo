import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="selectedAnimal">
          <hr>
          <label>Enter animal name:</label>
          <input [(ngModel)]="selectedAnimal.name">
          <label>Enter animal age:</label>
          <input [(ngModel)]="selectedAnimal.age">
          <label>Enter animal caretakers:</label>
          <input [(ngModel)]="selectedAnimal.caretakers">
          <button (click)="doneEdition()">Edit</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
    @Input() selectedAnimal: Animal;
    @Output() doneEditionSender = new EventEmitter();


    doneEdition() {
      this.doneEditionSender.emit();
    }
}
