import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Party} from '../shared/Party';
import {Combatant} from '../shared/Combatant';
import {DeletePartyDialogComponent} from '../delete-party-dialog/delete-party-dialog.component';
import {MdDialog} from '@angular/material';
import Utils from '../shared/util';

@Component({
  selector: 'app-party-form',
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.scss']
})
export class PartyFormComponent implements OnInit {

  private static PARTIES_KEY = 'parties';
  @Input() combatants: Combatant[];
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  selectedParty;
  newPartyName: string;
  parties: Party[] = [];

  constructor(public dialog: MdDialog) {
  }

  save() {
    const party: Party = {
      name: this.newPartyName,
      combatants: []
    };
    this.combatants.forEach(combatant => {
      party.combatants.push(Utils.copyCombatant(combatant));
    });
    this.parties.push(party);
    localStorage.setItem(PartyFormComponent.PARTIES_KEY, JSON.stringify(this.parties));
    this.onSave.emit(party);
    this.reset();
  }

  add() {
    const combatants: Combatant[] = [];
    this.selectedParty.combatants.forEach(combatant => {
      combatants.push(Utils.copyCombatant(combatant));
    });
    this.onAdd.emit(combatants);
    this.reset();
  }

  delete() {
    this.dialog.open(DeletePartyDialogComponent, {data: this.selectedParty}).afterClosed().subscribe(result => {
      if (result) {
        this.parties.splice(this.parties.indexOf(this.selectedParty), 1);
        localStorage.setItem(PartyFormComponent.PARTIES_KEY, JSON.stringify(this.parties));
        this.reset();
      }
    });
  }

  cancel() {
    this.onCancel.emit();
    this.reset();
  }

  reset() {
    this.selectedParty = undefined;
    this.newPartyName = '';
  }

  ngOnInit() {
    const storedParties = JSON.parse(localStorage.getItem(PartyFormComponent.PARTIES_KEY));
    if (storedParties !== undefined && Array.isArray(storedParties)) {
      this.parties = storedParties;
    }
  }
}