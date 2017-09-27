import {Component, OnInit, ViewChild} from '@angular/core';
import {MdDialog} from '@angular/material';
import {ModifyHpDialogComponent} from '../modify-hp-dialog/modify-hp-dialog.component';
import Utils from '../shared/util';
import Combatant from '../shared/Combatant';
import CombatantInfo from '../shared/CombatantInfo';
import Stats from '../shared/Stats';
import CombatData from '../shared/CombatData';
import {RemoveCombatantDialogComponent} from '../remove-combatant-dialog/remove-combatant-dialog.component';


@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {

  @ViewChild('combatantInfoNav') combatantInfoNav;
  @ViewChild('newCombatantNav') newCombatantNav;
  combatants: Combatant[] = [];
  infoCombatant: Combatant;
  turnCount: number;
  roundCount: number;
  activeIndex: number;
  activeCombatant: Combatant;
  calcModAsString = Utils.calcModAsString;
  objectKeys = Object.keys;
  combatantInfoMode: string;
  newCombatantMode: string;

  constructor(public dialog: MdDialog) {
  }

  nextCombatant() {
    this.turnCount++;
    if (!this.activeCombatant) {
      this.activeCombatant = this.combatants[0];
    } else {
      const currentIndex = this.combatants.indexOf(this.activeCombatant);
      if (currentIndex + 1 >= this.combatants.length) {
        this.activeCombatant = this.combatants[0];
        this.roundCount ++;
      } else {
        this.activeCombatant = this.combatants[currentIndex + 1];
      }
    }
    this.infoCombatant = this.activeCombatant;
  }
  addCombatant(combatant: Combatant) {
    this.combatants.push(combatant);
    this.newCombatantNav.close();
  }
  addCombatants(combatants: Combatant[]) {
    this.combatants = this.combatants.concat(combatants);
    this.newCombatantNav.close();
  }
  viewCombatant(combatant: Combatant) {
    this.combatantInfoMode = 'edit';
    this.infoCombatant = combatant;
    this.combatantInfoNav.open();
  }
  editCombatant(combatant: Combatant) {
    this.combatantInfoMode = 'edit';
    this.infoCombatant = combatant;
    this.combatantInfoNav.open();
  }
  removeCombatant(combatant: Combatant) {
    this.dialog.open(RemoveCombatantDialogComponent, {data: combatant}).afterClosed().subscribe(result => {
      if (result) {
        const idx: number = this.combatants.indexOf(combatant);
        const isCurrentCombatant: boolean = combatant === this.activeCombatant;
        this.combatants.splice(idx, 1);
        if (isCurrentCombatant) {
          this.turnCount++;
          if (idx >= this.combatants.length) {
            this.roundCount++;
            this.activeCombatant = this.combatants[0];
          } else {
            this.activeCombatant = this.combatants[idx];
          }
        }
      }
    });
  }
  cloneCombatant(combatant: Combatant) {
    this.combatants.push(combatant.clone());
  }
  updateHP(combatant: Combatant) {
    this.dialog.open(ModifyHpDialogComponent).afterClosed().subscribe(result => {
      if (result) {
        combatant.combat.hp = combatant.combat.hp + result.heal - result.damage;
      }
    });
  }

  mockCombatants(): Combatant[] {
    const combatant1 = new Combatant('Vrell',
      new CombatData(10, 22),
      new CombatantInfo(16, 22, new Stats(8, 16, 14, 12, 15, 10)));
    const combatant2 = new Combatant('Shin',
      new CombatData(18, 16),
      new CombatantInfo(18, 16, new Stats(16, 12, 14, 10, 17, 12)));
    const combatant3 = new Combatant('Nari',
      new CombatData(2, 17),
      new CombatantInfo(14, 17, new Stats(16, 12, 14, 10, 17, 12)));
    return [combatant1, combatant2, combatant3];
  }
  ngOnInit() {
    // this.combatants = this.mockCombatants();
    this.activeIndex = -1;
    this.roundCount = 1;
    this.turnCount = 0;
  }
}
