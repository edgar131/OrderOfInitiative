import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Combatant from '../shared/Combatant';
import Utils from '../shared/util';

@Component({
  selector: 'app-edit-combatant-form',
  templateUrl: './edit-combatant-form.component.html',
  styleUrls: ['./edit-combatant-form.component.scss']
})
export class EditCombatantFormComponent implements OnInit {

  @Input() combatant: Combatant;
  @Input() mode: string;
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  calcModAsString = Utils.calcModAsString;

  constructor() {
  }

  private reset() {
    this.combatant = new Combatant('');
  }

  addCombatant() {
    this.onAdd.emit(this.combatant);
    this.reset();
  }

  cancel() {
    this.onCancel.emit();
    this.reset();
  }

  ngOnInit() {
    if (!this.combatant) {
      this.reset();
    }
  }

}
