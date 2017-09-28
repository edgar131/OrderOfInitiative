import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Combatant} from '../shared/Combatant';
import Utils from '../shared/util';
import {EncounterService} from '../encounter.service';

@Component({
  selector: 'app-edit-combatant-form',
  templateUrl: './edit-combatant-form.component.html',
  styleUrls: ['./edit-combatant-form.component.scss'],
  providers: [EncounterService]
})
export class EditCombatantFormComponent implements OnInit {

  @Input() combatant: Combatant;
  @Input() mode: string;
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @ViewChild('monsterInput') monsterInput;

  monsters: any[];
  calcModAsString = Utils.calcModAsString;

  constructor(private encounterService: EncounterService) {
  }

  private reset() {
    this.combatant = Utils.createNewCombatant();
    if (this.monsterInput) {
      this.monsterInput.nativeElement.value = '';
    }
  }

  addCombatant() {
    this.onAdd.emit(this.combatant);
    this.reset();
  }

  cancel() {
    this.onCancel.emit();
    this.reset();
  }

  monsterSelected($event) {
    const monster = this.monsters.find((ele) => {
      return ele.name === $event.option.value;
    });
    this.combatant.name = monster.name;
    this.combatant.combat.initiative = 10 + Utils.calcMod(monster.dexterity);
    this.combatant.combat.hp = monster.hit_points;
    this.combatant.data.ac = monster.armor_class;
    this.combatant.data.maxhp = monster.hit_points;
    this.combatant.data.stats.str = monster.strength;
    this.combatant.data.stats.dex = monster.dexterity;
    this.combatant.data.stats.con = monster.constitution;
    this.combatant.data.stats.int = monster.intelligence;
    this.combatant.data.stats.wis = monster.wisdom;
    this.combatant.data.stats.cha = monster.charisma;
  }

  ngOnInit() {
    this.monsters = this.encounterService.getMonsters();
    if (!this.combatant) {
      this.reset();
    }
  }
}
