import {Component, Input, OnInit} from '@angular/core';
import Combatant from '../shared/Combatant';
import Utils from '../shared/util';

@Component({
  selector: 'app-edit-combatant-form',
  templateUrl: './edit-combatant-form.component.html',
  styleUrls: ['./edit-combatant-form.component.scss']
})
export class EditCombatantFormComponent implements OnInit {

  @Input() combatant: Combatant;
  @Input() editMode: boolean;

  calcModAsString = Utils.calcModAsString;

  constructor() { }

  ngOnInit() {
  }

}
