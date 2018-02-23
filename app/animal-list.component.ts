import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h1>Animals</h1>
  <button (click)="createAnimal()">Add new animal</button>
  <ul>
    <li *ngFor="let animal of animals">
      {{animal.name}} {{animal.age}} {{animal.caretakers}} {{animal.sex}}
      <button (click)="editAnimal(animal)">Edit</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() animals: Animal[];
  @Output() editAnimalSender = new EventEmitter();
  @Output() createAnimalSender = new EventEmitter();
  editAnimal(animal: Animal){
    this.editAnimalSender.emit(animal);
  }
  createAnimal(){
    this.createAnimalSender.emit();
  }

}
