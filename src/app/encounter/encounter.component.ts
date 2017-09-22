import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {ModifyHpDialogComponent} from '../modify-hp-dialog/modify-hp-dialog.component';
import Utils from '../util';
import Combatant from '../model/Combatant';
import CombatantInfo from '../model/CombatantInfo';
import Stats from '../model/Stats';
import CombatData from "../model/CombatData";
import {RemoveCombatantDialogComponent} from "../remove-combatant-dialog/remove-combatant-dialog.component";


@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {

  combatants: Combatant[];
  turnCount: number;
  roundCount: number;
  activeIndex: number;
  calcModAsString = Utils.calcModAsString;
  objectKeys = Object.keys;

  constructor(public dialog: MdDialog) {
  }

  modHP(combatant, damage) {
    if (!isNaN(damage)) {
      combatant.combat.hp += damage;
    }
  }
  nextCombatant() {
    this.turnCount++;
    if (this.activeIndex < this.combatants.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
      this.roundCount++;
    }
  }
  updateHP(combatant) {
    this.dialog.open(ModifyHpDialogComponent).afterClosed().subscribe(result => {
      combatant.combat.hp = combatant.combat.hp + result.heal - result.damage;
    });

  }
  removeCombatant(combatant) {
    this.dialog.open(RemoveCombatantDialogComponent, {data: combatant}).afterClosed().subscribe(result => {
      if (result) {
        const idx = this.combatants.indexOf(combatant);
        this.combatants.splice(idx, 1);
        if (idx === this.activeIndex) {
          this.turnCount++;
        }
        if (idx >= this.combatants.length) {
          this.activeIndex = 0;
          this.roundCount++;
        }
      }
    });
  }

  editCombatant($event, combatant) {

  }

  cloneCombatant(combatant) {
    this.combatants.push({...combatant});
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
