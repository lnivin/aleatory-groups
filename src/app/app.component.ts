import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string = 'aleatory-groups';
  name: string = '';
  show: boolean = false;
  people: string[] = [];
  peopleCopy: string[] = [];
  numberOfGroups: number = 0;
  newGroups: any[] = [];
  peopleShuffle: string[] = [];

  constructor() {}

  ngOnInit() {
    this.peopleCopy = [
      'Juan',
      'Maria',
      'Pedro',
      'Luisa',
      'Javier',
      'Mabel',
      'Jaime',
      'Elizabeth',
      'Mario',
      'Ana'
    ];
    this.people = JSON.parse(JSON.stringify(this.peopleCopy));
  }

  saveName() {
    if (this.name) {
      this.people.push(this.name);
      this.peopleCopy.push(this.name);
    }
    this.name = '';
  }

  process(): void {
    // Shuffle people
    this.peopleShuffle = this.shuffleArray(this.people);
    // Separate into a given number of groups
    this.newGroups = this.separateIntoGroups(this.peopleShuffle, this.numberOfGroups);

    console.log(this.newGroups);
  }


  ////////////////////////////
  /// Support functions ///
  ////////////////////////////

  shuffleArray(array: string[]): string[] {
    if (!array || !array.length) return [];
    let newArray = [...array].sort((a, b) => 0.5 - Math.random());
    return newArray;
  }

  separateIntoGroups(elements: any[], numOfGroups: number): any[] {
    if (!numOfGroups) return this.peopleCopy;
    let newElements: any[] = [];
    let copyElements = [...elements];
    let ratio = Math.abs(numOfGroups > copyElements.length ? 1 : copyElements.length/numOfGroups);
    if (numOfGroups > copyElements.length) numOfGroups = copyElements.length;
    //@ts-ignore
    for (let i = 0; i < numOfGroups; i++) newElements[`Group N° ${i+1}`] = copyElements.splice(0,ratio);
    for (let i = 0; i < copyElements.length; i++) Object.values(newElements)[i].push(copyElements[i]);
    return newElements;
  }
  showPeople() {
    this.show = !this.show;
  }
}
