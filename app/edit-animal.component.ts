import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'edit-animal',
  template: `
        <div *ngIf="selectedAnimal">
          <div class="card">
            <div class="alert alert-success">
              <div class="row">
                  <div class="col-md-10">
                      <div class="form-group">
                          <h3>Edit Animal</h3>
                      </div>
                  </div>
              </div>
            </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">
                          <label>Name</label>
                          <input class="form-control input-sm" type="text" [(ngModel)]="selectedAnimal.name">
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                          <label>Age</label>
                          <input class="form-control input-sm" type="number" [(ngModel)]="selectedAnimal.age">
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                          <label>Caretakers Number</label>
                          <input class="form-control input-sm" type="number" [(ngModel)]="selectedAnimal.caretakers">
                      </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                      <div class="col-md-3">
                          <button class="btn btn-success btn-xs" (click)="doneEdition()">Update</button>
                      </div>
                  </div>
                </div>

              </div>
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
