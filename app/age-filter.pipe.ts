import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './models/animal.model';

@Pipe({
  name: "ageCriteriaFilter",
  pure: false
})


export class AgeFilterPipe implements PipeTransform {
  transform(animals: Animal[], ageCriteria) {
    var animalsFiltered: Animal[] = [];
    if(ageCriteria === "2") {
      for (var i = 0; i < animals.length; i++) {
        if (animals[i].age < 2) {
          animalsFiltered.push(animals[i]);
        }
      }
      return animalsFiltered;
    } else if (ageCriteria === "3") {
      for (var i = 0; i < animals.length; i++) {
        if (animals[i].age >= 2) {
          animalsFiltered.push(animals[i]);
        }
      }
      return animalsFiltered;
    } else {
      return animals;
    }
  }


}
