import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="card">
    <div class="alert alert-primary">
    <div class="row">
            <div class="col-md-8">
                <div class="form-group">
                    <h3>Animals</h3>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                <select class="form-control" data-style="btn-success" (change)="onChange($event.target.value)">
                    <option value="1" selected="selected">All animals</option>
                    <option value="2">Young animals</option>
                    <option value="3">Mature animals</option>
                  </select>
                </div>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                <button class="btn btn-primary btn-xs" (click)="createAnimal()">New Animal</button>
                </div>
            </div>
        </div>
    </div>
    <div class="card-body">
    <table class="table">
            <thead>
            <tr>
                <th>Species</th>
                <th>Name</th>
                <th>Age</th>
                <th>Caretakers Number</th>
                <th>Admittance Date</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
              <tr *ngFor="let animal of animals | ageCriteriaFilter:filterByAgeCriteria">
                <td>{{animal.species}}</td>
                <td>{{animal.name}}</td>
                <td>{{animal.age}}</td>
                <td>{{animal.caretakers}}</td>
                <td>{{animal.admittanceDate}}</td>
                <td>
                <button class="btn btn-Success btn-xs" (click)="editAnimal(animal)">Edit</button>
                <button class="btn btn-Warning btn-xs" (click)="animalView(animal)">View</button>
                </td>
              </tr>
            </tbody>
        </table>
    </div>
  `
})

export class AnimalListComponent {
  @Input() animals: Animal[];
  @Output() editAnimalSender = new EventEmitter();
  @Output() createAnimalSender = new EventEmitter();
  @Output() animalViewSender = new EventEmitter();
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
  animalView(animal: Animal){
    this.animalViewSender.emit(animal);
  }

}
