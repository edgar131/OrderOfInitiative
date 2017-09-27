import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Party} from '../shared/Party';
import {Combatant} from '../shared/Combatant';
import {MD_DIALOG_DATA, MdDialog} from '@angular/material';
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

@Component({
  selector: 'app-delete-party-dialog',
  template: `
    <h1 md-dialog-title>Are you sure you wish to delete the party: "{{data.name}}"?</h1>
    <div md-dialog-actions>
      <button md-raised-button color="primary" [md-dialog-close]="true">Remove</button>
      <button md-raised-button color="warn" [md-dialog-close]="false">Cancel</button>
    </div>
  `
})
export class DeletePartyDialogComponent {
  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }
}
