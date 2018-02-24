import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'animal-view',
  template: `
    <div>
        <div *ngIf="selectedAnimalView">
          <div class="card">
            <div class="alert alert-Warning">
              <div class="row">
                  <div class="col-md-10">
                      <div class="form-group">
                          <h3>Animal Details</h3>
                      </div>
                  </div>
                  <div class="col-md-2">
                      <div class="form-group">
                          <button class="btn btn-Warning btn-xs" (click)="doneView()">Exit</button>
                      </div>
                  </div>
              </div>
            </div>
              <div class="card-body">
                <p><strong>Species:</strong> {{selectedAnimalView.species}}</p>
                <p><strong>name:</strong> {{selectedAnimalView.name}}</p>
                <p><strong>Age:</strong> {{selectedAnimalView.age}} year(s) old</p>
                <p><strong>Diet:</strong> {{selectedAnimalView.diet}}</p>
                <p><strong>Location:</strong> {{selectedAnimalView.location}}</p>
                <p><strong>Caretakers:</strong> {{selectedAnimalView.caretakers}}</p>
                <p><strong>Sex:</strong> {{selectedAnimalView.sex}}</p>
                <p><strong>Likes:</strong> {{selectedAnimalView.likes}}</p>
                <p><strong>Dislikes:</strong> {{selectedAnimalView.dislikes}}</p>
              </div>
          </div>
        </div>
      </div>
  `
})

export class AnimalViewComponent {
    @Input() selectedAnimalView: Animal;
    @Output() doneViewSender = new EventEmitter();


    doneView() {
      this.doneViewSender.emit();
    }
}
