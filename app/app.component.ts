import { Component } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1></h1>
  <animal-list [animals]="animals" (editAnimalSender)="editAnimal($event)"></animal-list>
  `
})

export class AppComponent {

  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based')
  ];
  selectedAnimal = null;

  editAnimal(animal){
    this.selectedAnimal = animal;
  }
}
