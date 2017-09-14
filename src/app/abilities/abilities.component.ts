import { Component, OnInit } from '@angular/core';

import { Ability } from '../ability';
import { ABILITIES } from '../mock-abilities';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Abilities = ABILITIES;

}
