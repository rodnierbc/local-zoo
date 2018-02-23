import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h1>Animals</h1>
  <button (click)="createAnimal()">Add new animal</button>
  <select (change)="onChange($event.target.value)">
      <option value="1" selected="selected">All animals</option>
      <option value="2">Young animals</option>
      <option value="3">Mature animals</option>
    </select>
  <ul>
    <li *ngFor="let animal of animals | ageCriteriaFilter:filterByAgeCriteria">
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
  filterByAgeCriteria: string = "1";
  editAnimal(animal: Animal){
    this.editAnimalSender.emit(animal);
  }
  createAnimal(){
    this.createAnimalSender.emit();
  }
  onChange(ageCriteriaSelected){
    this.filterByAgeCriteria = ageCriteriaSelected;
  }

}
