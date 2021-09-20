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
  numberOfGroups: number = 0;
  shuffledPeople: string[] = [];

  constructor() {}

  ngOnInit() {

  }

  saveName() {
    if (this.name) this.people.push(this.name);
    this.name = '';
  }

  showPeople() {
    this.show = !this.show;
  }

  process(): string[] {
    this.shuffledPeople = this.shuffleArray(this.people);
    return this.shuffledPeople;
  }


  ////////////////////////////
  /// Supporting functions ///
  ////////////////////////////

  shuffleArray(array: string[]): string[] {
    if (!array || !array.length) return [];
    let newArray = [...array].sort((a, b) => 0.5 - Math.random());;
    return newArray;
  }
}
