import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/hero';
import { Heroes } from '../../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = Heroes;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
