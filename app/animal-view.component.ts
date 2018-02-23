import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'animal-view',
  template: `
    <div>
        <div *ngIf="selectedAnimalView">
          <hr>
          <p>name: {{selectedAnimalView.name}}</label>
          <button (click)="doneView()">Exit</button>
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
