export class Animal {
  currentTime = new Date();
  public admittanceDate: string = this.currentTime.getMonth()+"/"+this.currentTime.getDate()+"/"+this.currentTime.getFullYear();
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) { }
}
