import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';
import {ModifyHpDialogComponent} from '../modify-hp-dialog/modify-hp-dialog.component';
import Utils from '../shared/util';
import {Combatant} from '../shared/Combatant';
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";


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
    if (this.combatants.length <= 0) {
      return;
    }
    this.turnCount++;
    if (!this.activeCombatant) {
      this.activeCombatant = this.combatants[0];
    } else {
      const currentIndex = this.combatants.indexOf(this.activeCombatant);
      if (currentIndex + 1 >= this.combatants.length) {
        this.activeCombatant = this.combatants[0];
        this.roundCount++;
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

  resetEncounter() {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure you wish to reset the encounter?',
        confirm_text: 'Reset'
      }
    }).afterClosed()
      .subscribe(result => {
        if (result) {
          this.combatantInfoNav.close();
          this.newCombatantNav.close();
          this.infoCombatant = undefined;
          this.activeCombatant = undefined;
          this.turnCount = 0;
          this.roundCount = 1;
        }
      });
  }

  clearEncounter() {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure you wish to clear the encounter?',
        confirm_text: 'Clear'
      }
    }).afterClosed()
      .subscribe(result => {
        if (result) {
          this.combatantInfoNav.close();
          this.newCombatantNav.close();
          this.combatants = [];
          this.infoCombatant = undefined;
          this.activeCombatant = undefined;
          this.turnCount = 0;
          this.roundCount = 1;
        }
      });
  }

  removeCombatant(combatant: Combatant) {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: ('Are you sure you wish to remove "' + combatant.name + '" from the encounter?'),
        confirm_text: 'Remove'
      }
    }).afterClosed().subscribe(result => {
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
    this.combatants.push(Utils.copyCombatant(combatant));
  }

  updateHP(combatant: Combatant) {
    this.dialog.open(ModifyHpDialogComponent).afterClosed().subscribe(result => {
      if (result) {
        combatant.combat.hp = combatant.combat.hp + result.heal - result.damage;
      }
    });
  }

  mockCombatants(): Combatant[] {
    const combatant1: Combatant = {
      id: Utils.generateUUID(),
      name: 'Vrell',
      combat: {
        initiative: 10,
        hp: 22
      },
      data: {
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
    };
    const combatant2: Combatant = {
      id: Utils.generateUUID(),
      name: 'Shin',
      combat: {
        initiative: 18,
        hp: 16
      },
      data: {
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
    };
    const combatant3: Combatant = {
      id: Utils.generateUUID(),
      name: 'Nari',
      combat: {
        initiative: 2,
        hp: 17
      },
      data: {
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
    };
    return [combatant1, combatant2, combatant3];
  }

  ngOnInit() {
    this.combatants = this.mockCombatants();
    this.activeIndex = -1;
    this.roundCount = 1;
    this.turnCount = 0;
  }
}
