import {Component, OnInit} from '@angular/core';
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

  combatants: Combatant[];
  infoCombatant: Combatant;
  newCombatant: Combatant;
  turnCount: number;
  roundCount: number;
  activeIndex: number;
  activeCombatant: Combatant;
  calcModAsString = Utils.calcModAsString;
  objectKeys = Object.keys;

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
  addCombatant(combatant) {
    this.combatants.push(combatant);
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
    this.combatants.push(Combatant.copy(combatant));
  }
  updateHP(combatant: Combatant) {
    this.dialog.open(ModifyHpDialogComponent).afterClosed().subscribe(result => {
      if (result) {
        combatant.combat.hp = combatant.combat.hp + result.heal - result.damage;
      }
    });
  }

  openNewCombatantNav(nav) {
    this.newCombatant = new Combatant('');
    nav.toggle();
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
    this.combatants = this.mockCombatants();
    this.activeIndex = -1;
    this.roundCount = 1;
    this.turnCount = 0;
  }
}
