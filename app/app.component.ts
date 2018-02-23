import { Component } from '@angular/core';
import { Animal } from './models/animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>hello</h1>
  `
})

export class AppComponent {

  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises')
  ];

}
