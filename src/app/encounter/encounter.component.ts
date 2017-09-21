import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import Utils from '../util';


@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {

  combatants: any[];
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
    if (this.activeIndex < this.combatants.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
  }
  updateHP(combatant) {
    //let dialogRef = this.dialog.open
  }
  removeCombatant($event, combatant) {

  }

  editCombatant($event, combatant) {

  }

  cloneCombatant($event, combatant) {

  }



  ngOnInit() {
    this.combatants = [{
      combat: {
        initiative: 10,
        hp: 22
      },
      data: {
        name: 'Vrell',
        ac: 16,
        maxhp: 22,
        stats: {
          str: 8,
          dex: 16,
          con: 14,
          int: 12,
          wis: 15,
          cha: 10
        }
      }
    }, {
      combat: {
        initiative: 18,
        hp: 16
      },
      data: {
        name: 'Shin',
        ac: 18,
        maxhp: 16,
        stats: {
          str: 16,
          dex: 12,
          con: 14,
          int: 10,
          wis: 17,
          cha: 12
        }
      }
    }, {
      combat: {
        initiative: 2,
        hp: 17
      },
      data: {
        name: 'Nari',
        ac: 14,
        maxhp: 17,
        stats: {
          str: 16,
          dex: 12,
          con: 14,
          int: 10,
          wis: 17,
          cha: 12
        }
      }
    }];
    this.activeIndex = 0;
  }

}

