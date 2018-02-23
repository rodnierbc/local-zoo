import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h1>Animals</h1>
  <ul>
    <li *ngFor="let animal of animals">
      {{animal.name}} {{animal.age}} {{animal.caretakers}} {{animal.admittanceDate}}
      <button (click)="editAnimal(animal)">Edit</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() animals: Animal[];
  @Output() editAnimalSender = new EventEmitter();
  editAnimal(animal: Animal){
    this.editAnimalSender.emit(animal);
  }
}
