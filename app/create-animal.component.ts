import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'create-animal',
  template: `
  <div *ngIf="createAnimalControl">
    <div class="card">
      <div class="alert alert-primary">
        <div class="row">
            <div class="col-md-10">
                <div class="form-group">
                    <h3>Create Animal</h3>
                </div>
            </div>
        </div>
      </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label>Species</label>
                    <input class="form-control input-sm" required #newSpecies>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control input-sm" required #newName>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label>Age</label>
                    <input class="form-control input-sm" type="number" required #newAge>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label>Diet</label>
                    <input class="form-control input-sm" required #newDiet>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Location</label>
                    <input class="form-control input-sm" required #newLocation>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Caretakers</label>
                    <input class="form-control input-sm" type="number" required #newCaretakers>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Sex</label>
                    <input class="form-control input-sm" required #newSex>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Likes</label>
                    <textarea class="form-control input-sm" required #newLikes></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Dislikes</label>
                    <textarea class="form-control input-sm" required #newDislikes></textarea>
                </div>
            </div>
          </div>
          <div class="form-group">
            <div class="row">
                <div class="col-md-3">
                    <button class="btn btn-primary btn-xs" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value = ''; newName.value = ''; newAge.value = ''; newDiet.value = ''; newLocation.value = ''; newCaretakers.value = ''; newLikes.value = ''; newDislikes.value = '';">Add</button>
                </div>
            </div>
          </div>
        </div>
    </div>
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
