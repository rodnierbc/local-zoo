import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'animal-view',
  template: `
    <div>
        <div *ngIf="selectedAnimalView">
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

export class AnimalViewComponent {
    @Input() selectedAnimalView: Animal;
    @Output() doneViewSender = new EventEmitter();


    doneEdition() {
      this.doneViewSender.emit();
    }
}
